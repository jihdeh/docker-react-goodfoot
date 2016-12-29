FROM node:7.3.0
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install yarn -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY app /usr/src/app/app
COPY server /usr/src/app/server
COPY dist /usr/src/app/dist
COPY tools /usr/src/app/tools
COPY images /usr/src/app/images
COPY style /usr/src/app/style
COPY util /usr/src/app/util

RUN yarn install
RUN npm run build

COPY . /usr/src/app

CMD ["npm", "run", "start"]