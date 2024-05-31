import pymongo
from app.config.Config import settings


# def get_client():
#     mongo_server = str(settings.mongodb_host) + ":" + str(settings.mongodb_port)
#
#     client = pymongo.MongoClient(mongo_server,
#                                  username=settings.mongodb_username,
#                                  password=settings.mongodb_password,
#                                  authSource=settings.mongodb_auth_source,
#                                  authMechanism=settings.mongodb_auth_mechanism,
#                                  retryWrites=settings.mongodb_retry_writes
#                                  )
#
#
#     return client

def get_client():
    mongo_server = settings.mongodb_host

    client = pymongo.MongoClient(mongo_server,
                                 username=settings.mongodb_username,
                                 password=settings.mongodb_password,
                                 authSource=settings.mongodb_auth_source,
                                 retryWrites=settings.mongodb_retry_writes
                                 )


    return client


myclient = get_client()
mydb = myclient.get_database(settings.auth_db)
print(mydb)


