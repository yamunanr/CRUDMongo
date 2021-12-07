FROM python:3.6
ADD . /app
WORKDIR /app
RUN pip install -r requirements.txt


#FROM mongo:latest
#
## install Python 3
#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN apt-get -y install python3-dev
#RUN pip3 install pymongo
#EXPOSE 27017
