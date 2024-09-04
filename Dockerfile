FROM nodesource/vivid:latest 

ADD package.json package.json
RUN npm install
ADD . .

CMD ["node","index.js"]