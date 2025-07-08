# Use an official Node image to build the app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# ----------------------
# Use nginx to serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]