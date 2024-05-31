from app.controller.ClsPasswordHandler import PasswordHandler
import time
from fastapi import HTTPException
import jwt
from app.config.Config import settings


def decodeJWT(self, token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        return decoded_token if decoded_token["expires"] >= time.time() else None
    except:
        return {}

class TokenHandler:
    def __init__(self, email: str, password: str, mydb):
        self.password_handler = PasswordHandler(email, password, mydb)
        self.jwt_secret = settings.jwt_secret
        self.jwt_algorithm = settings.jwt_algorithm
        self.duration = 600

    def signJWT(self):
        self.password_handler.log_in()

        payload = {
            "Email": self.password_handler.client.email,
            "expires": time.time() + 600
        }
        token = jwt.encode(payload, self.jwt_secret, algorithm=self.jwt_algorithm)

        return token


