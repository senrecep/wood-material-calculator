# Build stage
FROM node:20-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false --ignore-engines

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine AS production-stage

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
