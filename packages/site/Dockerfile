FROM node:18-alpine

COPY ./public /app
COPY ./local.settings.json /app/settings.json

RUN npm install -g serve

ENTRYPOINT serve /app
