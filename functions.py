import sqlite3

def add_user(name, email, password, phone):
    conn = sqlite3.connect('everlessdata')
    c = conn.cursor()
    c.execute("INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)", (name, phone, email, password))
    conn.commit()
    conn.close()

def check_user_by_email(email, password):
    conn = sqlite3.connect('everlessdata')
    c = conn.cursor()
    c.execute(f"SELECT id, email, password FROM users WHERE  email = '{email}' AND password = '{password}'")
    is_user = c.fetchall()
    conn.close()
    return is_user

def check_user_by_phone(phone, password):
    conn = sqlite3.connect('everlessdata')
    c = conn.cursor()
    c.execute(f"SELECT id, phone, password FROM users WHERE  phone = '{phone}' AND password = '{password}'")
    is_user = c.fetchall()
    conn.close()
    return is_user

def get_user_data(id):
    conn = sqlite3.connect('everlessdata')
    c = conn.cursor()
    c.execute(f"SELECT * FROM users WHERE id = {id}")
    user_data = c.fetchall()
    conn.close()
    return user_data