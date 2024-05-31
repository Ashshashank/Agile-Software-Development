# Authentication API

## Build docker image
```docker build -t authentication . ```

## Run docker image on local port 5000
```docker run -p 5000:5000 --env-file .env authentication```

## Open browser and go to
```http://localhost:5000/authentication-swagger/docs#/```