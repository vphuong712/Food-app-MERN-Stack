FROM node:18-alpine3.18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","run", "start-server"]
