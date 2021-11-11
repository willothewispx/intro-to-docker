# Dockerfile file development (node:latest)
# $ docker build -t my-node-app -f dev.Dockerfile .

# build stage
FROM node:latest AS build
WORKDIR /build
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
FROM alpine:3.14
RUN apk add --update nodejs
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/src
WORKDIR /home/node/src
COPY --from=build --chown=node:node /build .

# in general --publish flag is more convenient
# but one can leave this here for documentation
EXPOSE 3000

CMD ["node", "index.js"]
