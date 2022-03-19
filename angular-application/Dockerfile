FROM node:16-alpine3.14 as node
WORKDIR /ngApp
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /ngApp/dist/angular-application /usr/share/nginx/html
