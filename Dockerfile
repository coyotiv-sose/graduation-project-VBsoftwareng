FROM node:alpine
# We add package json cause we dont want to install all the dependencies all the time unless package jason has changed
ADD package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon
# we install it so we can use it within this container everywhere

ADD bin ./bin
ADD src ./src

CMD ["nodemon"]
