# Navigator-Performance

[![GitHub stars](https://img.shields.io/github/stars/AgafonovVadim/Navigator-Performance?style=social)](https://github.com/AgafonovVadim/Navigator-Performance/stargazers)

Navigator-Performance is a modern web application for a car tuning studio. It showcases exclusive tuning services by seamlessly integrating both frontend and backend systems built on modern technologies such as Node.js and NestJS.

## About the Project

Navigator-Performance is designed to:
- **Showcase tuning services:** Display a portfolio of custom car tuning projects and detailed service descriptions.
- **Enable online booking and customer feedback:** Provide an intuitive interface for scheduling appointments and contacting the studio.
- **Integrate modern technologies:** Utilize Render for hassle-free deployment, centralized configuration management, and more.

## Features

- **Modular Architecture:** Built with NestJS to ensure a scalable and maintainable codebase.
- **Centralized Configuration:** Uses `@nestjs/config` to efficiently manage environment variables.
- **Responsive Design:** Developed with modern HTML, CSS, and JavaScript to ensure cross-browser compatibility and responsiveness.
- **Render Integration:** Automatically detects the port via the `PORT` environment variable for seamless deployment.

## Technologies

- **Backend:** [NestJS](https://nestjs.com/), Node.js, Express (internally via NestJS)
- **Frontend:** HTML5, CSS3, JavaScript
- **Development Tools:** Git, VS Code, Docker (optional)
- **Hosting:** Render

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/AgafonovVadim/Navigator-Performance.git
cd Navigator-Performance
```
Install Dependencies

For the backend (NestJS):
```bash
npm install
```
Configure Environment Variables

Running the Application

For development:
```bash
npm run start:dev
```
For production:
```bash
npm run start:prod
```
The application will listen on the port specified in the PORT environment variable, or default to a predefined port if not set.

Deploying on Render

Navigator-Performance is configured for deployment on Render. Render automatically provides the PORT environment variable, so you don’t need to manually configure the server port when deploying. Ensure your local .env file is set up correctly for development.

Contributing

We welcome feedback and contributions! If you have ideas or suggestions:
	•	Open an issue in the repository
	•	Contact the author directly through the contact form on the website.

License

This project is licensed under the GPL-3.0 License.

© 2025 Agafonov Vadim