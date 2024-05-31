from fastapi_camelcase import CamelModel as BaseModel



class EmailSchema(BaseModel):
    email: str
    phone: str
    message: str
    name: str
