# Use an official Python runtime as a base image
FROM ubuntu
MAINTAINER Andrew Wichmann
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

RUN apt-get update
RUN apt-get install -y software-properties-common python curl
RUN echo "deb http://us.archive.ubuntu.com/ubuntu/ precise universe" >> /etc/apt/sources.list
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
#RUN apt-get install -y nodejs=0.6.12~dfsg1-1ubuntu1
EXPOSE 8000


RUN npm install --unsafe-perm=true

CMD ["/app/node_modules/.bin/http-server", "www/", "-a", "0.0.0.0", "-p", "8000"]