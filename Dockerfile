FROM node:17-alpine
WORKDIR /App
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm","start" ]