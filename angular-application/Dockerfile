FROM node:lts-alpine3.15 as node
WORKDIR /ngApp
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g @angular/cli@13.2.6
COPY . .

FROM nginx:alpine
COPY --from=node /ngApp/dist/angular-application /usr/share/nginx/html