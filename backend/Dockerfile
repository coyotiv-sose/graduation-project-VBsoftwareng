FROM node:alpine
# We add package json cause we dont want to install all the dependencies all the time unless package jason has changed
RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin


CMD ["nodemon"]

# we install it so we can use it within this container everywhere
