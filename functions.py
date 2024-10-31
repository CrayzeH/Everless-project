import sqlite3

def add_user(name, email, password, phone):
    conn = sqlite3.connect('everlessdata')
    c = conn.cursor()
    c.execute("INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)", (name, phone, email, password))
    conn.commit()
    conn.close()