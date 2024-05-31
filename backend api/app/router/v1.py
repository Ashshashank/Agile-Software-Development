import logging
import os
from importlib import import_module
from app.config.Config import settings, module_dir
from fastapi import APIRouter, Depends, status
from app.schema.AuthSchema import AuthSchema, SignupSchema
from app.schema.CourseSchema import AddCourseSchema
from app.schema.EmailSchema import EmailSchema
from app.controller.DBConn import mydb
from app.controller.ClsPasswordHandler import PasswordHandler
from app.controller.ClsTokenHandler import TokenHandler
from app.controller.CourseServicer import CourseServicer
from app.controller.EmailService import EmailService
from app.util.ClsJwtBearer import JWTBearer, get_token_user


log = logging.getLogger("asyncio")
router = APIRouter()


def _get_module(scripts_dir, script_name):
    scripts_path = os.path.join(module_dir, scripts_dir)
    file_name = f"{script_name}.py"
    if file_name not in os.listdir(scripts_path):
        raise ModuleNotFoundError
    return import_module(f"app.{scripts_dir}.{script_name}")


def get_collection(db):
    collections = db.list_collection_names()
    return collections


@router.post(
    "/Sign Up",
    summary="Sign Up",
    description="Sign Up",
    status_code=status.HTTP_201_CREATED,
)
def sign_up(schema: SignupSchema):
    log.info("Starting Sign up")

    password_handler = PasswordHandler(schema.email.lower(), schema.password, mydb)
    result = password_handler.sign_up(schema.courses)

    log.info("Server.sign_up finished!")
    return result


@router.post(
    "/Log in",
    summary="Log in",
    description="Log in",
    status_code=status.HTTP_201_CREATED,
)
def log_in(schema: AuthSchema):
    log.info("Starting Log in")

    password_handler = PasswordHandler(schema.email.lower(), schema.password, mydb)
    result = password_handler.log_in()

    log.info("Server.log_in finished!")
    return result


@router.post(
    "/Token",
    summary="Token",
    description="Token",
    status_code=status.HTTP_201_CREATED,
)
def get_token(schema: AuthSchema):
    log.info("getting token")

    token_handler = TokenHandler(schema.email.lower(), schema.password, mydb)
    token = token_handler.signJWT()

    log.info("Server.get_token finished!")
    return token

@router.get(
    "/owned-courses",
    dependencies=[Depends(JWTBearer())],
    summary="Get Owned Courses",
    description="Get Owned Courses",
    status_code=status.HTTP_201_CREATED,
)
def get_owned_courses(token=Depends((JWTBearer()))):
    log.info("Getting Owned Courses")
    email = get_token_user(token)
    course_service = CourseServicer(mydb)
    owned_courses = course_service.owned_courses(email)

    log.info("Server.get_owned_courses finished!")
    return owned_courses

@router.post(
    "/add-courses",
    dependencies=[Depends(JWTBearer())],
    summary="Add New Courses",
    description="Add New Courses",
    status_code=status.HTTP_201_CREATED,
)
def add_courses(schema: AddCourseSchema, token=Depends((JWTBearer()))):
    log.info("add courses")
    email = get_token_user(token)
    course_service = CourseServicer(mydb)
    owned_courses = course_service.add_course(email, schema.courses)

    log.info("Server.add_courses finished!")
    return owned_courses


@router.get(
    "/all-courses",
    summary="Get all Courses",
    description="Get all Courses",
    status_code=status.HTTP_201_CREATED,
)
def get_all_courses():
    log.info("Getting all courses")
    course_service = CourseServicer(mydb)
    all_courses = course_service.all_courses()
    print(all_courses)

    log.info("Server.get_all_courses finished!")
    return all_courses

@router.get(
    "/all-courses-detail",
    summary="Get all Courses detail",
    description="Get all Courses detail",
    status_code=status.HTTP_201_CREATED,
)
def get_all_courses_detail():
    log.info("Getting all courses detail")
    course_service = CourseServicer(mydb)
    all_courses_detail = course_service.all_courses_detail()

    log.info("Server.get_all_courses_detail finished!")
    return all_courses_detail

@router.get(
    "/get-course-info",
    summary="Get course info",
    description="Get course info",
    status_code=status.HTTP_201_CREATED,
)
def get_course_info(course: str):
    log.info(f"Getting {course} info")
    course_service = CourseServicer(mydb)
    course_info = course_service.get_course_info(course)

    log.info("Server.get_course_info finished!")
    return course_info



@router.post(
    "/send-email",
    summary="Send email",
    description="Send email",
    status_code=status.HTTP_201_CREATED,
)
def send_email(schema: EmailSchema):
    email_svc = EmailService()
    response = email_svc.sendEmail(schema.name, schema.phone, schema.email, schema.message)

    log.info("Server.send_email finished!")
    return response
