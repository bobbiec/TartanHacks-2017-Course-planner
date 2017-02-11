from flask import render_template, request, jsonify
from app import instance
from .audit_parse import parseAudit
from .suggestions import makeSuggestion
import json

@instance.route('/')
@instance.route('/index', methods=['GET', 'POST'])
def index():
    json = "{}"
    text = 'Paste your academic audit here'
    suggestion = ''
    if request.method == "POST":
        text = request.form['audit']
        json, humanReadable = parseAudit(text)
    return render_template('index.html', json=json, textbox=text)

@instance.route('/suggest', methods=['GET', 'POST'])
def suggest():
    courses = request.json['info']
    return jsonify(makeSuggestion(courses[0], courses[1], courses[2]))