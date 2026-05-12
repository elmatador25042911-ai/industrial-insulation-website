import json
import os
import urllib.parse
import urllib.request
import boto3

PUBLIC_KEY = 'https://disk.yandex.ru/d/6DZB1gpTMfdeaA'
API = 'https://cloud-api.yandex.net/v1/disk/public/resources'


def get_download_url(public_key: str, path: str) -> str:
    qs = urllib.parse.urlencode({'public_key': public_key, 'path': path})
    url = f'{API}/download?{qs}'
    with urllib.request.urlopen(url, timeout=20) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    return data['href']


def list_items(public_key: str):
    qs = urllib.parse.urlencode({'public_key': public_key, 'limit': 200})
    url = f'{API}?{qs}'
    with urllib.request.urlopen(url, timeout=20) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    return data.get('_embedded', {}).get('items', [])


def handler(event, context):
    """Импортирует фото каталога с Я.Диска в S3 проекта"""
    method = event.get('httpMethod', 'GET')
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )

    items = list_items(PUBLIC_KEY)
    results = []

    for it in items:
        if it.get('type') != 'file':
            continue
        name = it['name']
        path = it['path']
        try:
            href = get_download_url(PUBLIC_KEY, path)
            with urllib.request.urlopen(href, timeout=60) as resp:
                body = resp.read()
            ct = it.get('mime_type') or ('image/png' if name.lower().endswith('.png') else 'image/jpeg')
            key = f'catalog/{name}'
            s3.put_object(Bucket='files', Key=key, Body=body, ContentType=ct)
            cdn = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"
            results.append({'name': name, 'url': cdn, 'size': len(body)})
        except Exception as e:
            results.append({'name': name, 'error': str(e)})

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'isBase64Encoded': False,
        'body': json.dumps({'items': results}, ensure_ascii=False),
    }
