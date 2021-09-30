FROM node:12-alpine

WORKDIR /work/frontend

# COPY package*.json ./
COPY . .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
