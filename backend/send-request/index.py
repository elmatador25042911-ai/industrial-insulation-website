import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from email.utils import formataddr


FIELD_LABELS = {
    'name': 'Имя',
    'phone': 'Телефон',
    'company': 'Компания',
    'email': 'Email',
    'message': 'Комментарий',
}

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
    'Access-Control-Max-Age': '86400',
}


def handler(event: dict, context) -> dict:
    '''Принимает заявку из формы обратной связи и отправляет её на почту t1izol@mail.ru.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except (ValueError, TypeError):
        body = {}

    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}),
        }

    source = (body.get('source') or '').strip()

    lines = []
    for key, label in FIELD_LABELS.items():
        value = (body.get(key) or '').strip() if isinstance(body.get(key), str) else body.get(key)
        if value:
            lines.append(f'{label}: {value}')

    for key, value in body.items():
        if key in FIELD_LABELS or key == 'source':
            continue
        if isinstance(value, str) and value.strip():
            lines.append(f'{key}: {value.strip()}')

    if source:
        lines.append('')
        lines.append(f'Страница: {source}')

    text_body = 'Новая заявка с сайта T1 Изоляция\n\n' + '\n'.join(lines)

    smtp_login = os.environ.get('SMTP_LOGIN', 't1izol@mail.ru')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.mail.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    mail_to = os.environ.get('MAIL_TO', 't1izol@mail.ru')
    mail_cc = (os.environ.get('SMTP_CC') or '').strip()

    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'SMTP не настроен'}),
        }

    recipients = [mail_to]
    if mail_cc and '@' in mail_cc:
        recipients.append(mail_cc)

    subject = 'Новая заявка с сайта T1 Изоляция'
    if source:
        subject = f'Новая заявка с сайта T1 Изоляция — {source}'

    msg = MIMEText(text_body, 'plain', 'utf-8')
    msg['Subject'] = Header(subject, 'utf-8')
    msg['From'] = formataddr((str(Header('Сайт T1 Изоляция', 'utf-8')), smtp_login))
    msg['To'] = mail_to
    if mail_cc and '@' in mail_cc:
        msg['Cc'] = mail_cc

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_login, smtp_password)
        server.sendmail(smtp_login, recipients, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True}),
    }