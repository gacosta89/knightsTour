FROM node:argon
EXPOSE 3000
ADD . /knightsTour
RUN cd /knightsTour; npm install

WORKDIR "/knightsTour"
CMD ["npm", "start"]
