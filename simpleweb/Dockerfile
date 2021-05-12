# Specify a base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/app

# Copy the package.json file
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY ./ ./

# Default Command
CMD ["npm", "start"]