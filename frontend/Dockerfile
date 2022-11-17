FROM node:18-alpine

WORKDIR /frontend

RUN apk --no-cache add --virtual builds-deps build-base python3 git


WORKDIR /frontend

COPY package.json ./
COPY ./src ./src
COPY ./public ./public

RUN yarn install



