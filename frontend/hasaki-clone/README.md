# Hasaki Clone

## Overview
Hasaki Clone is a full-stack web application that consists of a frontend built with React and a backend built with Node.js and Express. This project is designed to demonstrate the integration of both parts using Docker for containerization.

## Project Structure
```
hasaki-clone
├── docker-compose.yml
├── .env
├── .dockerignore
├── nginx
│   └── default.conf
├── backend
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── tsconfig.json
│   └── src
│       ├── index.js
│       ├── app.js
│       ├── routes
│       │   └── index.js
│       └── controllers
│           └── index.js
├── frontend
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── index.jsx
│       ├── App.jsx
│       └── pages
│           └── ClientPage
│               └── LandingPage
│                   └── index.jsx
└── README.md
```

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd hasaki-clone
   ```

2. Create a `.env` file in the root directory and add your environment variables.

3. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Usage
- The frontend is built with React and serves the user interface.
- The backend is built with Node.js and Express, providing API endpoints for the frontend to consume.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.