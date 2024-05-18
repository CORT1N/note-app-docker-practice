FROM node:latest

LABEL version="1.0" maintainer="lbonnaire1@myges.fr"

RUN npm install -g json-server

COPY db.json /data/db.json

EXPOSE 3001

CMD ["json-server", "--watch", "/data/db.json", "--port", "3001"]
