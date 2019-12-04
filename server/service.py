#!/usr/bin/python
import insert as DB

def searchUser(data):
    userData = DB.readData(data)
    if data is None or not data:
        return False
    return userData


def createUser(innerParams):
    params = innerParams["params"]
    userName = params['userName']
    userEmail = params['userEmail']
    userPassword = params['userPassword']
    userData = DB.getData(userEmail)
    if userData:
        status = DB.insertUser(userName, userEmail, userPassword)
        if status:
            return "Registered Successfully"
    else:
        return "Already exit"
