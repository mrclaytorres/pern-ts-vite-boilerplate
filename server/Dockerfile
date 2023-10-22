FROM node:18 AS Development

ENV NODE_ENV=development

WORKDIR /usr/src/server

COPY package*.json .

RUN npm install

COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Start the React development server
CMD ["sh", "-c", "npm run dev"]