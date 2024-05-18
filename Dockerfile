# Application

FROM node:latest AS build

LABEL version="1.0" maintainer="lbonnaire1@myges.fr"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Reverse proxy

FROM nginx:alpine

# Fichiers du build --> Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Conf. reverse proxy --> Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
