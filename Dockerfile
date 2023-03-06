FROM ubuntu:18.04 

WORKDIR /mydir  
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
COPY frontend front
RUN cd front && npm install --silent --force && npm run build --silent && cd .. 
RUN cp -r front/build build && rm -r front
COPY backend . 
RUN npm install
CMD npx nodemon index.js