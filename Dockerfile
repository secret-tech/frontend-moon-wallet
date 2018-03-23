FROM mhart/alpine-node:9

USER root
ARG ENV_FILE=stage

VOLUME /usr/src/app
WORKDIR /usr/src/app
