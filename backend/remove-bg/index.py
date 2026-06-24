import json
import os
import urllib.request
import io

import boto3
from PIL import Image


def handler(event: dict, context) -> dict:
    '''Делает белый фон логотипа прозрачным и сохраняет PNG в S3'''
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
            'body': '',
        }

    src_url = 'https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/5f5f6a5b-dcd6-4bd8-a7dd-1f04f6762f37.png'
    raw = urllib.request.urlopen(src_url).read()
    img = Image.open(io.BytesIO(raw)).convert('RGBA')

    datas = img.getdata()
    new_data = []
    for r, g, b, a in datas:
        if r > 240 and g > 240 and b > 240:
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)

    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    out = io.BytesIO()
    img.save(out, format='PNG')
    out.seek(0)

    key = 'logos/hero-logo-transparent.png'
    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    s3.put_object(Bucket='files', Key=key, Body=out.getvalue(), ContentType='image/png')
    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'body': json.dumps({'url': cdn_url}),
    }
