FROM node:18
WORKDIR /app
COPY ../frontend .
RUN npm install