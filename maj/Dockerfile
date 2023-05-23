FROM python:3.9.12

WORKDIR /maj

COPY . .

RUN pip install -r requirements.txt
 
ENV PORT=8000

EXPOSE 8000

CMD [ "python","beta.py"]