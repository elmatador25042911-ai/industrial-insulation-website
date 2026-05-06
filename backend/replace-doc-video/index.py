import json
import os
import urllib.request
import urllib.parse
import boto3


def handler(event, context):
    """Скачивает видео с Яндекс.Диска и заливает в S3 по пути videos/documentation-video.mp4"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    public_key = 'https://disk.yandex.ru/d/Zgbtf5Xmc47z2w'
    api = 'https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=' + urllib.parse.quote(public_key)

    req = urllib.request.Request(api, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        meta = json.loads(r.read().decode('utf-8'))
    download_url = meta['href']

    dl_req = urllib.request.Request(download_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(dl_req, timeout=120) as r:
        data = r.read()

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    key = 'videos/documentation-video.mp4'
    s3.put_object(
        Bucket='files',
        Key=key,
        Body=data,
        ContentType='video/mp4',
        CacheControl='no-cache, max-age=0',
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'body': json.dumps({'ok': True, 'size': len(data), 'url': cdn_url}),
    }
