from fastapi_camelcase import CamelModel as BaseModel
from typing import List


class AuthSchema(BaseModel):
    email: str
    password: str

class SignupSchema(BaseModel):
    email: str
    password: str
    courses: List[str]



