from app.controller.ClsPasswordGenerator import PasswordGenerator
from fastapi import HTTPException



class PasswordHandler:
    def __init__(self, email: str, password: str, mydb):
        self.client = PasswordGenerator(email,password)
        self.db = mydb
        self.mycol = mydb["Authentication"]

    def signup_condition(self):
        myquery = [{"$match": {"Email": self.client.email}},
                   {"$project": {
                       "_id": 0,
                       "Email": 1,
                   }}]
        mycursor = self.mycol.aggregate(myquery)
        if len(list(mycursor)) == 0:
            return True
        else:
            return False

    def sign_up(self, courses):
        if not self.signup_condition():
            return "Email already exist, please try sign in"

        payload = {"Email":self.client.email,
                   "Password":self.client.encoded_password,
                   "Courses": courses
                   }


        self.mycol.insert_one(payload)

        return "Sign up successful"

    def log_in(self):
        myquery = [{"$match": {"Email": self.client.email}},
                   {"$project": {
                       "_id": 0,
                       "Email": 1,
                       "Password": 1
                   }}]
        mycursor = self.mycol.aggregate(myquery)
        mylist = next(mycursor, None)
        if not mylist:
            raise HTTPException(status_code=403, detail="Unauthorized email or password, please try again")
        password = mylist['Password']
        if self.client.encoded_password == password:
            return "Log in successful"
        else:
            raise HTTPException(status_code=403, detail="Unauthorized email or password, please try again")



