FROM node:latest

ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build

CMD ["node","build/index.js"]