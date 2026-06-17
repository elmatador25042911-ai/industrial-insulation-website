import json
import os
import urllib.request
import urllib.parse

import boto3


YANDEX_PUBLIC_KEY = 'https://disk.yandex.ru/d/71ONsNMOO0x3Mw'
API = 'https://cloud-api.yandex.net/v1/disk/public/resources/download'


def get_download_url(path: str) -> str:
    qs = urllib.parse.urlencode({'public_key': YANDEX_PUBLIC_KEY, 'path': path})
    with urllib.request.urlopen(f'{API}?{qs}') as r:
        data = json.loads(r.read().decode())
    return data['href']


def handler(event: dict, context) -> dict:
    '''Загружает документы по каучуку из Яндекс.Диска в S3 и возвращает CDN-ссылки.'''
    method = event.get('httpMethod', 'GET')
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    files = [
        '01-vypiska-iz-reestra-sertifikatov.jpg',
        '02-sertifikat-sistemy-menedzhmenta-kachestva.jpg',
        '03-sertifikat-pozharnoy-bezopasnosti.jpg',
        '04-sertifikat-dobrovolnoy-sertifikatsii.jpg',
        '05-podtverzhdenie-sootvetstviya-pozharnoy-bezopasnosti.jpg',
        '06-razreshenie-na-znak-sootvetstviya.jpg',
        '07-sertifikat-apb-pozharnoy-bezopasnosti.jpg',
        '08-ekspertnoe-zaklyuchenie.jpg',
    ]

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )

    result = []
    for name in files:
        href = get_download_url('/' + name)
        with urllib.request.urlopen(href) as r:
            body = r.read()
        key = f'kauchuk-docs/{name}'
        s3.put_object(Bucket='files', Key=key, Body=body, ContentType='image/jpeg')
        cdn = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"
        result.append({'name': name, 'url': cdn})

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({'files': result}, ensure_ascii=False),
    }
