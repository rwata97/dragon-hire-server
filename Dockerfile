# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all your application files to the container
COPY . .

# Expose the port your mock server will run on (replace PORT_NUMBER with your desired port)
EXPOSE 2121

# Command to start your Node.js application (replace start with your script command)
CMD ["node", "server.js"]


