FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
# RUN npm ci --only=production
COPY . .
EXPOSE 8080
EXPOSE 9229
RUN chown -R node /usr/src/app
USER node
CMD [ "npm", "run", "dev" ]
#TODO remove npm from container for production