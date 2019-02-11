FROM node:10.15-alpine

WORKDIR /usr/src/app/

RUN npm config set registry http://registry.npmjs.org/

CMD yarn install && npm run start:docker
