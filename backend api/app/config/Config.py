import logging
import os
from pydantic import BaseSettings, Field


log = logging.getLogger("asyncio")




class Settings(BaseSettings):
    mongodb_host: str = Field(env="MONGODB_HOST")
    mongodb_port: int = Field(env="MONGODB_PORT")
    mongodb_username: str = Field(env="MONGODB_USERNAME")
    mongodb_password: str = Field(env="MONGODB_PASSWORD")

    email: str = Field(env="EMAIL")
    email_password: str = Field(env="EMAIL_PASSWORD")

    mongodb_auth_source: str = Field(env="MONGODB_AUTH_SOURCE", default="admin")
    mongodb_database: str = Field(env="MONGODB_DATABASE", default="admin")
    mongodb_auth_mechanism: str = Field(env="MONGODB_AUTH_MECHANISM", default="SCRAM-SHA-1")
    auth_db: str = Field(env="AUTH_DB", default="BettingApp")
    auth_col: str = Field(env="AUTH_COL", default="Authentication")
    mongodb_retry_writes: bool = Field(env="MONGODB_RETRY_WRITES", default=True)
    mongodb_ssl: bool = Field(env="MONGODB_SSL", default=True)
    mongodb_tlsallowinvalidhostnames: bool = Field(env="MONGODB_TLS_ALLOW_INVALID_HOSTNAME", default=True)

    jwt_secret: str = Field(env="JWT_SECRET", default=False)
    jwt_algorithm: str = Field(env="JWT_ALGORITHM", default=True)


settings = Settings()
# """ Application and environment settings. """
#
module_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(module_dir)
