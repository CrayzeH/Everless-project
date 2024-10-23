from Tools.scripts.make_ctype import method
from flask import Flask, render_template, request, jsonify, flash, redirect, session, url_for
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'insanity'

@app.route('/', methods=["GET", "POST"])
def hello():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('hello.html')

@app.route('/catalog', methods=["GET", "POST"])
def catalog():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('main.html')

@app.route('/auctions', methods=["GET", "POST"])
def auctions():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('auctions.html')

@app.route('/bussiness', methods=["GET", "POST"])
def bussiness():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('bussiness.html')

@app.route('/help', methods=["GET", "POST"])
def help():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('help.html')

@app.route('/registration', methods=["GET", "POST"])
def registration():
    if request.method == "POST":
        if request.form['submit-action'] == 'Каталог':
            return redirect(url_for('catalog'))
        elif request.form['submit-action'] == 'Аукционы':
            return redirect(url_for('auctions'))
        elif request.form['submit-action'] == 'Для бизнеса':
            return redirect(url_for('bussiness'))
        elif request.form['submit-action'] == 'Помощь':
            return redirect(url_for('help'))
        elif request.form["submit-action"] == 'Регистрация':
            return redirect(url_for('registration'))
    return render_template('registration.html')
if __name__ == '__main__':
    app.run()