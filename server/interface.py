#!/usr/bin/python3
import service as s
from flask import Flask, request, jsonify
import json
import sys
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


# @app.route('/register', methods=['POST'])
# def reegisterUser():
#     data = request.data
#     if data:
#         inputData = json.loads(data)
#         output = s.parseData(inputData)
#     result = {}
#     try:
#         id_ = output["_id"]
#         result = json.dumps({"result": output})
#     except:
#         result = json.dumps({"result": {"_id": str(output)}})

    # print("result: ", result)
#     return result

@app.route('/register', methods=['POST'])
def reegister():
    data = request.data
    if data:
        inputData = json.loads(data)
        print("input data: ",inputData)
        output = s.registerUser(inputData)
    result = {}
    result = json.dumps({"result": output})
    return result


@app.route('/details', methods=['GET'])
def userDetails():
    data = request.headers['userName']
    if data:
        output = s.loginUser(data)
    result = {}
    result = json.dumps({"result": output},default=str)
    return result
