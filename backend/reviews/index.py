import json
import os
import psycopg2
import smtplib
from email.mime.text import MIMEText


def send_notification(name: str, text: str, rating: int):
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    if not smtp_password:
        return
    stars = '★' * rating + '☆' * (5 - rating)
    msg = MIMEText(
        f"Новый отзыв на сайте!\n\n"
        f"Имя: {name}\n"
        f"Оценка: {stars}\n"
        f"Текст: {text}\n\n"
        f"Чтобы одобрить, зайдите в админ-панель.",
        'plain', 'utf-8'
    )
    msg['Subject'] = f'Новый отзыв от {name}'
    msg['From'] = 'govorova.73@inbox.ru'
    msg['To'] = 'govorova.73@inbox.ru'
    try:
        with smtplib.SMTP_SSL('smtp.inbox.ru', 465) as server:
            server.login('govorova.73@inbox.ru', smtp_password)
            server.send_message(msg)
    except Exception as e:
        print(f"Email error: {e}")


def handler(event: dict, context) -> dict:
    """Получение и создание отзывов для сайта воспитателя"""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    method = event.get('httpMethod')

    if method == 'GET':
        params = event.get('queryStringParameters') or {}
        admin = params.get('admin') == '1'

        if admin:
            cur.execute("SELECT id, name, text, rating, approved, created_at FROM reviews ORDER BY created_at DESC")
        else:
            cur.execute("SELECT id, name, text, rating, created_at FROM reviews WHERE approved = TRUE ORDER BY created_at DESC")

        rows = cur.fetchall()
        reviews = []
        for row in rows:
            if admin:
                reviews.append({'id': row[0], 'name': row[1], 'text': row[2], 'rating': row[3], 'approved': row[4], 'created_at': str(row[5])})
            else:
                reviews.append({'id': row[0], 'name': row[1], 'text': row[2], 'rating': row[3], 'created_at': str(row[4])})

        cur.close()
        conn.close()
        return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'reviews': reviews}, ensure_ascii=False)}

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        action = body.get('action')

        if action == 'approve':
            review_id = body.get('id')
            approved = body.get('approved', True)
            cur.execute("UPDATE reviews SET approved = %s WHERE id = %s", (approved, review_id))
            conn.commit()
            cur.close()
            conn.close()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

        if action == 'delete':
            review_id = body.get('id')
            cur.execute("DELETE FROM reviews WHERE id = %s", (review_id,))
            conn.commit()
            cur.close()
            conn.close()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

        name = (body.get('name') or '').strip()
        text = (body.get('text') or '').strip()
        rating = int(body.get('rating') or 5)

        if not name or not text:
            cur.close()
            conn.close()
            return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Заполните имя и текст отзыва'}, ensure_ascii=False)}

        if len(text) > 1000:
            cur.close()
            conn.close()
            return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Отзыв слишком длинный'}, ensure_ascii=False)}

        cur.execute(
            "INSERT INTO reviews (name, text, rating) VALUES (%s, %s, %s) RETURNING id",
            (name, text, rating)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        send_notification(name, text, rating)

        return {'statusCode': 201, 'headers': cors, 'body': json.dumps({'ok': True, 'id': new_id}, ensure_ascii=False)}

    cur.close()
    conn.close()
    return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}
