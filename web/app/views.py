from flask import render_template, request
from app import instance
from .audit_parse import parseAudit
from .suggestions import makeSuggestion

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

@instance.route('/suggest', methods=['GET','POST'])
def suggest():
	suggestion = ''
	if request.method == "POST":
		suggestion  = makeSuggestion(request.form['firstCourse'], request.form['secondCourse'],request.form['thirdCourse'])
	return render_template('suggest.html',suggestOutput=suggestion)