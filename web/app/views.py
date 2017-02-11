from flask import render_template, request
from app import instance
from .audit_parse import parseAudit

@instance.route('/')
@instance.route('/index')
def index():
    return render_template('index.html')

@instance.route('/audit', methods=['GET', 'POST'])
def audit():
    jsonOutput = ''
    humanOutput = ''
    if request.method == "POST":
        jsonOutput, humanOutput = parseAudit(request.form['audit'])
    return render_template('audit.html', json=jsonOutput, humanReadable=humanOutput)