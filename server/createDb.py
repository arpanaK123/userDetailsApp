#!/usr/bin/python3
import connect as con

c = con.connect()
if c is not None:
    mydb = c["ledger"]
    print(mydb)
    print(c.database_names())

