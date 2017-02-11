#!/usr/bin/python

from flask import Flask

instance = Flask(__name__)

from app import views
