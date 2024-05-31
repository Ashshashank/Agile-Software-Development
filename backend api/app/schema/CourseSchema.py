from fastapi_camelcase import CamelModel as BaseModel
from typing import List


class AddCourseSchema(BaseModel):
    courses: List[str]



