#!/usr/bin/python3
import connect as connections
con = connections.connect()


def insertUser(username, userEmail, userPassword):
    try:
        if con is not None:
            db = con["userDB"]
            collection = db["user"]
            status = collection.insert_one(
                {"userName": username, "userEmail": userEmail, "userPassword": userPassword})
        if status:
            return "Successfull Registered"
        else:
            return "Unsuccessfull !"
    except Exception as e:
        return e


def readData(userName):
    if con is not None:
        db = con["userDB"]
        collection = db["user"]
        myData = list(collection.find({"userName": userName}))
        print(myData)
        if myData:
            return myData
        else:
            return "UnRegisterd User"


def getData(userEmail):
    if con is not None:
        db = con["userDB"]
        collection = db["user"]
        data = collection.find_one({"userEmail": userEmail})
        # print("data: ", data)
        if data:
            return False
        else:
            return True
