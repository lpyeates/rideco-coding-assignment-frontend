FROM node:16-alpine

WORKDIR /groceries

COPY package*.json .

RUN npm install

COPY . /groceries

CMD ["npm", "start"]