import json
import os
import psycopg2  # noqa


def handler(event: dict, context) -> dict:
    """Админ-панель: проверка пароля и управление отзывами"""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    admin_password = os.environ.get('ADMIN_PASSWORD', '')
    print(f"DEBUG: admin_password set={bool(admin_password)}, len={len(admin_password)}")
    method = event.get('httpMethod')

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        password = body.get('password', '')
        print(f"DEBUG: received password len={len(password)}, match={password == admin_password}")

        if password != admin_password:
            return {'statusCode': 401, 'headers': cors, 'body': json.dumps({'error': 'Неверный пароль'}, ensure_ascii=False)}

        action = body.get('action')
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()

        if action == 'list':
            cur.execute("SELECT id, name, text, rating, approved, created_at FROM reviews ORDER BY created_at DESC")
            rows = cur.fetchall()
            reviews = [
                {'id': r[0], 'name': r[1], 'text': r[2], 'rating': r[3], 'approved': r[4], 'created_at': str(r[5])}
                for r in rows
            ]
            cur.close()
            conn.close()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'reviews': reviews}, ensure_ascii=False)}

        if action == 'approve':
            cur.execute("UPDATE reviews SET approved = %s WHERE id = %s", (body.get('approved', True), body.get('id')))
            conn.commit()
            cur.close()
            conn.close()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

        if action == 'delete':
            cur.execute("DELETE FROM reviews WHERE id = %s", (body.get('id'),))
            conn.commit()
            cur.close()
            conn.close()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

        if action == 'add':
            name = (body.get('name') or '').strip()
            text = (body.get('text') or '').strip()
            rating = int(body.get('rating') or 5)
            if not name or not text:
                cur.close()
                conn.close()
                return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Заполните имя и текст'}, ensure_ascii=False)}
            cur.execute(
                "INSERT INTO reviews (name, text, rating, approved) VALUES (%s, %s, %s, TRUE) RETURNING id",
                (name, text, rating)
            )
            new_id = cur.fetchone()[0]
            conn.commit()
            cur.close()
            conn.close()
            return {'statusCode': 201, 'headers': cors, 'body': json.dumps({'ok': True, 'id': new_id}, ensure_ascii=False)}

        cur.close()
        conn.close()
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Неизвестное действие'}, ensure_ascii=False)}

    return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}