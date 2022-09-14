FROM node:16-alpine

RUN npm install -g json-server

WORKDIR /data

EXPOSE 3000

ENTRYPOINT ["json-server"]

CMD ["--watch", "db.json", "--host", "0.0.0.0"]