FROM node:22-alpine3.20  AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["sh", "-c", "node dist/main.js"]