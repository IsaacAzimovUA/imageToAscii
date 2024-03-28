FROM node:20.11.1-alpine3.19

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json ./ 

RUN npm ci
COPY . . 

ARG API_PORT

ENV API_PORT=${API_PORT}
ENV APP_PORT=3000

EXPOSE 3000


CMD ["npm", "run", "dev"]
