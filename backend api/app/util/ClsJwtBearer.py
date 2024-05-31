from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.security.utils import get_authorization_scheme_param
import jwt
import time

from app.config.Config import settings

import os

def decodeJWT(token: str) -> dict:
    decoded_token = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
    if decoded_token["expires"] >= time.time():
        return decoded_token
    else:
        raise HTTPException(status_code=401, detail="Token expired")


def get_token_user(token):
    decoded_token = decodeJWT(token)
    if decoded_token and len(decoded_token)>0:
        try:
            user = decoded_token['Email']
        except:
            user = None
    else:
        user = None

    return user

class JWTBearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super(JWTBearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super(JWTBearer, self).__call__(request)
        authorization: str = request.headers.get("Authorization")
        scheme, token = get_authorization_scheme_param(authorization)

        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(status_code=403, detail="Invalid authentication scheme.")
            if not self.verify_jwt(credentials.credentials):
                raise HTTPException(status_code=403, detail="Invalid token or expired token.")
            return credentials.credentials
        else:
            raise HTTPException(status_code=403, detail="Invalid authorization code.")



    def verify_jwt(self, jwtoken: str) -> bool:
        isTokenValid: bool = False

        try:
            payload = decodeJWT(jwtoken)
        except:
            payload = None
        if payload:
            isTokenValid = True
        return isTokenValid