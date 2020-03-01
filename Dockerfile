FROM mhart/alpine-node:12
ENV APP_HOME /app
WORKDIR ${APP_HOME}
COPY package*.json ./
RUN apk update --no-cache && \
    npm ci && \
    rm -rf /var/cache/apk/*
COPY . ${APP_HOME}
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "npm", "start"]