FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install

COPY ./src/server.js ./src/server.js
COPY ./dist ./dist

EXPOSE 3000

CMD [ "npm", "start" ]