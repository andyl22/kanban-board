FROM node:14.16.0-alpine3.10
WORKDIR /app/

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
EXPOSE $PORT
CMD [ "npm", "start" ]

