# FROM node:10-slim as prod
# ENV NODE_ENV=production
# COPY package.json ./
# EXPOSE 8080
# RUN npm install --only=production && npm cache clean --force
# RUN npm install -g nodemon
# COPY . .
# CMD ["npm", "run", "dev"]

# FROM dev as test
# ENV NODE_ENV=development
# CMD ["npm", "run", "test"]
FROM node:14

WORKDIR /usr/src/app

RUN npm install
RUN npm install express
RUN npm i dotenv
RUN npm i cors
RUN npm i yamljs
RUN npm i chai-as-promised
RUN npm install chai-http
RUN npm i mongoose
RUN npm i swagger
RUN npm i swagger-ui-express
RUN npm install -g mocha
RUN npm install -g nyc
RUN npm install -g nodemon

COPY package.json ./
EXPOSE 8080

COPY . .
CMD ["npm", "run", "dev"]


