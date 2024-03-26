FROM node:20.11.1-alpine3.19

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package*.json ./ 

RUN npm ci
COPY . . 

ARG API_PORT
ENV API_PORT=${API_PORT}
EXPOSE ${API_PORT}

CMD ["npm", "start"]
