from flask import render_template
from app import instance

@instance.route('/')
@instance.route('/index')
def index():
    return render_template('index.html')
