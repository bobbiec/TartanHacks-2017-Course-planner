from flask import render_template, request
from app import instance
from .audit_parse import parseAudit
from .suggestions import makeSuggestion

@instance.route('/')
@instance.route('/index', methods=['GET', 'POST'])
def index():
    json = "{}"
    text = 'Paste your academic audit here'
    suggestion = ''
    if request.method == "POST":
        text = request.form['audit']
        json, humanReadable = parseAudit(text)
    return render_template('index.html', json=json, textbox=text, suggestOutput=suggestion)

@instance.route('/suggest', methods=['GET','POST'])
def suggest():
    json = "{}"
    text = 'Paste your academic audit here'
    suggestion = ''
    if request.method == "POST":
        suggestion  = makeSuggestion(request.form['firstCourse'], request.form['secondCourse'], request.form['thirdCourse'])
    return render_template('index.html', json=json, textbox=text, suggestOutput=suggestion)