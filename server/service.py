#!/usr/bin/python
import insert as DB


def parseData(inputData):
    try:
        innerCmd = inputData["command"]
        innerParams = inputData["params"]
        if innerCmd == "LOGIN":
            result = loginUser(inputData)
            print("result: ", result)
            return result
        elif innerCmd == "SIGNUP":
            result = registerUser(inputData)
            return result
    except Exception as e:
        return e


def loginUser(innerParams):
    # print("innerparam: ", innerParams)
    # print("----> ",)
    # exit(0)
    # params = innerParams["params"]
    # userName = innerParams.get("userName")
    # print(userName)
    userData = DB.readData(innerParams)
    # print("userdata----> ",userData)
    if innerParams is None or not innerParams:
        return False
    return userData


def registerUser(innerParams):
    params = innerParams["params"]
    userName = params['userName']
    userEmail = params['userEmail']
    userPassword = params['userPassword']
    userData = DB.getData(userEmail)
    # email = userData["userEmail"]
    if userData:
        status = DB.insertUser(userName, userEmail, userPassword)
        if status:
            return "Registered Successfully"
    else:
        return "Already exit"
