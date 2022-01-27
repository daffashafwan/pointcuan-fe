# pull official base image
FROM node:16.13.0-alpine

# set working directory
WORKDIR /app
RUN chown -R node:node /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
USER node
RUN npm install
USER node
RUN npm install react-scripts@5.0.0


# add app
COPY --chown=node:node . .

# start app
CMD ["npm", "start"]