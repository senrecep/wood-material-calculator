#!/bin/bash

# Wood Material Calculator Deployment Script
# This script deploys your application with Docker

echo "🚀 Wood Material Calculator Deployment Starting..."

# Stop and remove existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build new image
echo "🏗️  Building new image..."
docker-compose build --no-cache

# Start container
echo "▶️  Starting container..."
docker-compose up -d

# Check container status
echo "📊 Container Status:"
docker-compose ps

# Show logs
echo "📝 Recent logs:"
docker-compose logs --tail=20 wood-calculator

echo "✅ Deployment completed!"
echo "🌐 Application is running at: http://localhost:6767"
echo "📊 To view logs: docker-compose logs -f wood-calculator"
echo "🛑 To stop: docker-compose down"
