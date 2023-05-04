FROM node:16-alpine as builder-side

#Setting the build parameters from Pipeline
ARG BUILD_ENV
RUN echo $BUILD_ENV


COPY package.json package-lock.json ./
RUN rm -rf ./node_modules

RUN npm install -g npm@8.3.1

RUN npm uninstall node-sass
RUN npm install node-sass@7.0.0

RUN npm install && npm i -D --save-exact mini-css-extract-plugin@2.4.5 && mkdir /app-ui && mv ./node_modules ./app-ui
WORKDIR /app-ui
COPY . .

#Delete the existing files from source Code
RUN rm -f ./src/configurations/OidcAuthenticationConfigurations.jsx
RUN rm -f ./src/services/ApiEndpoint.jsx

#Rename the files with respective env
RUN mv ./src/configurations/OidcAuthenticationConfigurations_$BUILD_ENV.jsx ./src/configurations/OidcAuthenticationConfigurations.jsx
RUN mv ./src/services/ApiEndpoint_$BUILD_ENV.jsx ./src/services/ApiEndpoint.jsx

RUN npm run build
FROM nginx:alpine
#!/bin/sh
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN addgroup nginx root
USER nginx

COPY --from=builder-side /app-ui/build /usr/share/nginx/html
EXPOSE 8080
