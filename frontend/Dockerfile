FROM node:lts-alpine3.18
# We add package json cause we dont want to install all the dependencies all the time unless package jason has changed
WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .eslintrc.cjs ./app/.eslintrc.cjs
ADD .prettierrc.json ./app/.prettierrc.json
ADD index.html ./app/index.html
ADD vite.config.js ./app/vite.config.js
ADD vitest.config.js ./app/vitest.config.js

CMD ["npm","run","dev"] // default command




# we install it so we can use it within this container everywhere
