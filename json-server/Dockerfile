FROM node:16-alpine

RUN npm install -g json-server

WORKDIR /data

EXPOSE 3000

ENTRYPOINT ["json-server"]

CMD ["--watch", "db.json", "--host", "0.0.0.0", "--routes", "routes.json"]

# docker run --name json-server -p 3000:3000 -v `pwd`/db:/data json-server