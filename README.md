# Wood Material Calculator

A Vue.js application for calculating wood materials with real-time updates.

## ✨ Features

- Real-time date/time updates
- Vue 3 with Composition API
- Vuetify UI components
- TypeScript support
- Responsive design
- Docker deployment ready

## 🔗 Repository

- **GitHub**: [https://github.com/senrecep/wood-material-calculator](https://github.com/senrecep/wood-material-calculator)
- **Clone**: `git clone https://github.com/senrecep/wood-material-calculator.git`

## 🚀 Project Setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 🐳 Docker Deployment

### Requirements

- Docker
- Docker Compose

### Quick Start

```bash
# Clone the repository
git clone https://github.com/senrecep/wood-material-calculator.git
cd wood-material-calculator

# Start the container
docker-compose up -d --build

# Access the application: http://localhost:6767
```

### Deployment Scripts

**Linux/Mac:**

```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows:**

```cmd
deploy.bat
```

### Docker Commands

```bash
# Start the container
docker-compose up -d

# Stop the container
docker-compose down

# View logs
docker-compose logs -f wood-calculator

# Check container status
docker-compose ps

# Rebuild
docker-compose build --no-cache
```

### Port Configuration

In `docker-compose.yml`:

```yaml
ports:
  - "6767:80" # Change 6767 to your desired port
```

## 🛠️ Technology Stack

- **Frontend**: Vue.js 3, Vuetify, TypeScript
- **Build Tool**: Vue CLI, Yarn
- **Deployment**: Docker, Docker Compose
- **Web Server**: Nginx (in container)

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**SenRecep**

- GitHub: [@senrecep](https://github.com/senrecep)
- Repository: [wood-material-calculator](https://github.com/senrecep/wood-material-calculator)
