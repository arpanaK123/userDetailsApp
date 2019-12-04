#!/usr/bin/python3
import pymongo
IP = "127.0.0.1"


def connect():
    try:
        cli = pymongo.MongoClient("mongodb://"+IP+":27018/")
        print("Connection Successfull!!")
        return cli
    except:
        print("Connection failed....")
        return None
