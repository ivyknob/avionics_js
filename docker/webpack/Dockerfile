FROM node:10.15-alpine

RUN apk add --no-cache --virtual .build-deps git
RUN npm config set registry http://registry.npmjs.org/

WORKDIR /usr/src/app/

CMD yarn install && npm run start:docker
