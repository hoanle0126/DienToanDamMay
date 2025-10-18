FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# Expose port 5173 (default của Vite)
EXPOSE 5173