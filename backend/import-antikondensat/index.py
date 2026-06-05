import json
import os
import io
import zipfile
import urllib.parse
import urllib.request

import boto3

YADISK_PUBLIC_URL = "https://disk.yandex.ru/d/UCWCiBwPYFxyXg"
S3_PREFIX = "antikondensat"
ALLOWED_EXT = (".png", ".jpg", ".jpeg", ".webp")


def _http_get(url: str, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "poehali-importer"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def _yadisk_download_url(public_url: str) -> str:
    api = (
        "https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key="
        + urllib.parse.quote(public_url, safe="")
    )
    data = json.loads(_http_get(api, timeout=30))
    href = data.get("href")
    if not href:
        raise RuntimeError(f"Я.Диск не вернул ссылку на скачивание: {data}")
    return href


def _content_type(name: str) -> str:
    n = name.lower()
    if n.endswith(".png"):
        return "image/png"
    if n.endswith(".webp"):
        return "image/webp"
    return "image/jpeg"


def handler(event: dict, context) -> dict:
    """Импортирует изображения антиконденсата с Я.Диска в S3/CDN проекта."""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    cors = {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}

    try:
        download_url = _yadisk_download_url(YADISK_PUBLIC_URL)
        raw = _http_get(download_url, timeout=120)
    except Exception as e:
        return {
            "statusCode": 502,
            "headers": cors,
            "body": json.dumps(
                {"error": "download_failed", "detail": str(e)}, ensure_ascii=False
            ),
        }

    images = {}
    try:
        if zipfile.is_zipfile(io.BytesIO(raw)):
            with zipfile.ZipFile(io.BytesIO(raw)) as zf:
                for info in zf.infolist():
                    if info.is_dir():
                        continue
                    base = os.path.basename(info.filename)
                    if base.lower().endswith(ALLOWED_EXT):
                        images[base] = zf.read(info)
            if not images:
                raise RuntimeError("В архиве не найдено изображений")
        else:
            raise RuntimeError(
                "Скачан не zip-архив. Я.Диск вернул одиночный файл — "
                "нужна ссылка на папку с архивом изображений."
            )
    except Exception as e:
        return {
            "statusCode": 422,
            "headers": cors,
            "body": json.dumps(
                {"error": "unpack_failed", "detail": str(e)}, ensure_ascii=False
            ),
        }

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )
    akey = os.environ["AWS_ACCESS_KEY_ID"]

    uploaded = []
    for name, data in sorted(images.items()):
        key = f"{S3_PREFIX}/{name}"
        s3.put_object(
            Bucket="files",
            Key=key,
            Body=data,
            ContentType=_content_type(name),
        )
        uploaded.append(
            {
                "file": name,
                "cdn": f"https://cdn.poehali.dev/projects/{akey}/bucket/{key}",
                "size_bytes": len(data),
                "status": "uploaded",
            }
        )

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps(
            {"count": len(uploaded), "files": uploaded}, ensure_ascii=False
        ),
    }
