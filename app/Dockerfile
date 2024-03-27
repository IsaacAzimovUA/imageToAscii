FROM node:20.11.1-alpine3.19

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json ./ 

RUN npm ci
COPY . . 

ARG APP_PORT
ARG API_PORT

ENV APP_PORT=${APP_PORT}
ENV API_PORT=${API_PORT}

EXPOSE ${APP_PORT}


CMD ["npm", "run", "dev"]
