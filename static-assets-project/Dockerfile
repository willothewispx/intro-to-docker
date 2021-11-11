# $ docker run -p 8080:80 my-react-app

# build stage
FROM node:12-alpine AS build
WORKDIR /app
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage
FROM nginx:1.20-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build app/build ./
