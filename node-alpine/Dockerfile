FROM node:12-alpine

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

# in general --publish flag is more convenient
# but one can leave this here for documentation
EXPOSE 3000

CMD ["node", "index.js"]
