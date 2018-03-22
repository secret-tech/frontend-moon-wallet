FROM node:9.0.0-alpine

WORKDIR /usr/src/app

ARG APIHOST=https://api.com/v1/

ENV API_HOST=$APIHOST

ADD . /usr/src/app/
ADD .env.stage .env

RUN apk add --no-cache --update nginx && \
  rm -rf /var/cache/apk/*

RUN yarn && npm rebuild node-sass && yarn build && \
  rm -rf ./src ./node_modules /usr/local/lib/node_modules /usr/local/share/.cache/yarn/ && \
  mkdir -p /run/nginx

ADD ./nginx-stage/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]

EXPOSE 80
