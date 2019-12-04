#!/usr/bin/python3
import service as s
from flask import Flask, request
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/createUser', methods=['POST'])
def createUser():
    data = request.data
    if data:
        inputData = json.loads(data)
        print("input data: ",inputData)
        output = s.createUser(inputData)
    result = json.dumps({"result": output})
    return result


@app.route('/searchUser', methods=['GET'])
def searchUser():
    data = request.headers['userName']
    if data:
        output = s.searchUser(data)
    result = json.dumps({"result": output},default=str)
    return result
