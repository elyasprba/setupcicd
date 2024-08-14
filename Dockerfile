FROM node:18-alpine

WORKDIR /app

COPY package* .

RUN npm i

COPY . . 

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "preview" ]