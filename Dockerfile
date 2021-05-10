# pull the official base image
FROM crouchy/node12
# set working direction
WORKDIR /src
# add `/src/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]
