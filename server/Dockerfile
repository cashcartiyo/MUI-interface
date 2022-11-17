FROM node:18-alpine


RUN yarn global add nodemon --prefix /usr/local
RUN yarn global add webpack --prefix /usr/local

WORKDIR /server

COPY package.json  ./

COPY ./src ./src

RUN yarn

