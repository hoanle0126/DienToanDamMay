FROM node:14 AS build

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend ./
RUN npm run build

FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]