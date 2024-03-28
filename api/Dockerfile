FROM node:20.11.1-alpine3.19

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package*.json ./ 

RUN npm ci
COPY . . 

ENV API_PORT=3001
EXPOSE 3001

CMD ["npm", "start"]
