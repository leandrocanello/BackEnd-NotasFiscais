FROM node:14-alpine

ENV TZ=America/Sao_Paulo
RUN mkdir -p /home/node/PROG3

WORKDIR /home/node/PROG3

COPY ./package.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000

CMD ["node", "./src/index.js"]