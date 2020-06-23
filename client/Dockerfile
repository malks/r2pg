FROM malks/r2pg
RUN apt-get update
RUN apt-get upgrade nodejs 
COPY . /app
WORKDIR /app
RUN npm install duplex-json-stream
CMD ["node","client.js","Spensa11"]
