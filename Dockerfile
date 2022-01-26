# pull the official base image
FROM node:alpine
# set working direction

RUN mkdir /app

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
# add app
COPY . ./
# start app
CMD ["yarn", "start"]