import json
import os
import io
import zipfile
import urllib.request
import urllib.parse
import boto3

PUBLIC_KEY = 'https://disk.yandex.ru/d/y1EG1BtOXyydlg'
API = 'https://cloud-api.yandex.net/v1/disk/public/resources'

IMAGE_EXT = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg')
VERSION = 3


def api_list(path: str):
    qs = urllib.parse.urlencode({'public_key': PUBLIC_KEY, 'path': path, 'limit': 200})
    req = urllib.request.Request(f'{API}?{qs}')
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.loads(r.read().decode())


def get_download_url(path: str) -> str:
    qs = urllib.parse.urlencode({'public_key': PUBLIC_KEY, 'path': path})
    req = urllib.request.Request(f'{API}/download?{qs}')
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.loads(r.read().decode())['href']


def find_item(path: str, target: str):
    """Ищет файл ИЛИ папку по имени target внутри path (рекурсивно). Возвращает item или None."""
    data = api_list(path)
    items = data.get('_embedded', {}).get('items', [])
    for it in items:
        if it['name'] == target:
            return it
    for it in items:
        if it['type'] == 'dir':
            found = find_item(it['path'], target)
            if found:
                return found
    return None


def list_images_in_dir(path: str, files: list):
    """Собирает все изображения внутри папки path (рекурсивно)."""
    data = api_list(path)
    items = data.get('_embedded', {}).get('items', [])
    for it in items:
        if it['type'] == 'dir':
            list_images_in_dir(it['path'], files)
        elif it['type'] == 'file' and it['name'].lower().endswith(IMAGE_EXT):
            files.append(it)


def content_type_for(name: str) -> str:
    n = name.lower()
    if n.endswith('.png'):
        return 'image/png'
    if n.endswith(('.jpg', '.jpeg')):
        return 'image/jpeg'
    if n.endswith('.webp'):
        return 'image/webp'
    if n.endswith('.gif'):
        return 'image/gif'
    if n.endswith('.svg'):
        return 'image/svg+xml'
    return 'application/octet-stream'


def handler(event: dict, context) -> dict:
    '''Импортирует один файл или один архив с Яндекс.Диска в хранилище проекта (поэтапно)'''
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    cors = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    params = event.get('queryStringParameters') or {}
    target = params.get('file')
    if not target:
        return {'statusCode': 400, 'headers': cors, 'isBase64Encoded': False,
                'body': json.dumps({'error': 'Не передан параметр file (имя файла/архива)'}, ensure_ascii=False)}

    item = find_item('/', target)
    if not item:
        return {'statusCode': 404, 'headers': cors, 'isBase64Encoded': False,
                'body': json.dumps({'error': f'Не найдено на Я.Диске: {target}'}, ensure_ascii=False)}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    base = os.environ['AWS_ACCESS_KEY_ID']

    results = []

    if item['type'] == 'dir':
        folder = item['name']
        img_items: list = []
        list_images_in_dir(item['path'], img_items)
        for f in img_items:
            dl = get_download_url(f['path'])
            with urllib.request.urlopen(dl, timeout=120) as r:
                content = r.read()
            name = f['name']
            key = f'termochekhly/{folder}/{name}'
            s3.put_object(Bucket='files', Key=key, Body=content, ContentType=content_type_for(name))
            cdn = f'https://cdn.poehali.dev/projects/{base}/bucket/{key}'
            results.append({'name': name, 'cdn_url': cdn, 'size': len(content)})
    elif target.lower().endswith('.zip'):
        dl = get_download_url(item['path'])
        with urllib.request.urlopen(dl, timeout=120) as r:
            body = r.read()
        archive_name = target.rsplit('.', 1)[0]
        zf = zipfile.ZipFile(io.BytesIO(body))
        for info in zf.infolist():
            if info.is_dir():
                continue
            name = os.path.basename(info.filename)
            if not name.lower().endswith(IMAGE_EXT):
                continue
            content = zf.read(info.filename)
            key = f'termochekhly/{archive_name}/{name}'
            s3.put_object(Bucket='files', Key=key, Body=content, ContentType=content_type_for(name))
            cdn = f'https://cdn.poehali.dev/projects/{base}/bucket/{key}'
            results.append({'name': name, 'cdn_url': cdn, 'size': len(content)})
    else:
        dl = get_download_url(item['path'])
        with urllib.request.urlopen(dl, timeout=120) as r:
            body = r.read()
        name = item['name']
        key = f'termochekhly/{name}'
        s3.put_object(Bucket='files', Key=key, Body=body, ContentType=content_type_for(name))
        cdn = f'https://cdn.poehali.dev/projects/{base}/bucket/{key}'
        results.append({'name': name, 'cdn_url': cdn, 'size': len(body)})

    return {
        'statusCode': 200,
        'headers': cors,
        'isBase64Encoded': False,
        'body': json.dumps({'source': target, 'count': len(results), 'files': results}, ensure_ascii=False),
    }