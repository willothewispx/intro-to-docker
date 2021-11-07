FROM node:12-stretch

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node . .

RUN npm ci

# in general --publish flag is more convenient
EXPOSE 3000

CMD ["node", "index.js"]
