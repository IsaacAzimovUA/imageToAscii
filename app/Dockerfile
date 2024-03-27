FROM node:20.11.1-alpine3.19

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json ./ 

RUN npm ci
COPY . . 

ARG APP_PORT
ARG APP_HOST
ARG API_PORT
ARG API_HOST

ENV APP_PORT=${APP_PORT}
ENV APP_HOST=${APP_HOST}
ENV API_PORT=${API_PORT}
ENV API_HOST=${API_HOST}

EXPOSE ${APP_PORT}


CMD ["npm", "run", "dev"]
