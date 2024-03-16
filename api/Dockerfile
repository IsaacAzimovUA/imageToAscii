FROM node:20.11.1-alpine3.19

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package*.json ./ 

RUN npm ci
COPY . . 

EXPOSE 3000

CMD ["npm", "start"]
