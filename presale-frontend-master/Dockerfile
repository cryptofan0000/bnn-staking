FROM node:14.16.1-alpine as builder
ARG app_env=development

ENV APP_ENV $app_env

RUN apk add --update yarn

WORKDIR /app

COPY package.json /app/
RUN npm install
RUN npm install -g dotenv dotenv-cli

COPY . /app
RUN yarn install
RUN REACT_APP_ENV=$app_env dotenv -e .env.$app_env yarn build

FROM nginx:1.19.4-alpine
COPY --from=builder /app/build /var/www/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf
