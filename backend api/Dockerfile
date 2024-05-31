FROM python:3.9

COPY . /pythonProject
WORKDIR /

COPY ./.env /pythonProject

RUN pip install -r /pythonProject/requirements.txt


ENV PYTHONPATH "${PYTHONPATH}:/pythonProject"



EXPOSE 5000
#CMD ["python", "./pythonProject/app/main.py"]
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]