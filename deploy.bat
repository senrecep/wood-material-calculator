@echo off
echo 🚀 Wood Material Calculator Deployment Starting...

REM Stop and remove existing containers
echo 🛑 Stopping existing containers...
docker-compose down

REM Build new image
echo 🏗️  Building new image...
docker-compose build --no-cache

REM Start container
echo ▶️  Starting container...
docker-compose up -d

REM Check container status
echo 📊 Container Status:
docker-compose ps

REM Show logs
echo 📝 Recent logs:
docker-compose logs --tail=20 wood-calculator

echo ✅ Deployment completed!
echo 🌐 Application is running at: http://localhost:6767
echo 📊 To view logs: docker-compose logs -f wood-calculator
echo 🛑 To stop: docker-compose down

pause
