import logging

import uvicorn
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from app.router import v1

log = logging.getLogger("asyncio")

api_context = "authentication-swagger"


def get_application():
    """ Creates and configures a FastAPI application instance. """

    application = FastAPI(
        title="User Authentication Swagger",
        description="User Authentication",
        version="V1",
        openapi_url=f"/{api_context}/openapi.json",
        docs_url=f"/{api_context}/docs",
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    application.add_middleware(GZipMiddleware, minimum_size=1400)

    application.include_router(
        v1.router,
        prefix=f"/{api_context}/v1",
        tags=["Authentication Swagger tag"],
        # dependencies=[
        #     Depends(oauth2_scheme),
        #     Depends(
        #         Authorization(
        #             required_perms=settings.required_perms,
        #             allowed_roles=settings.allowed_roles,
        #         )
        #     ),
        # ],
    )



    return application


app = get_application()
""" The FastAPI application instance. """

# Main method to run the application on http://localhost:5000/starter/
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=5000, log_level="info", reload=True)

