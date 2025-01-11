# Mates Multi-SaaS Platform

![Mates Logo](frontend/src/assets/logo.png)

Mates Multi-SaaS Platform is a **multi-tenant SaaS solution** that allows customers to generate their own systems like **LMS**, **HR**, **E-commerce**, and more. Built with **PHP Laravel**, **Vue.js**, and **Python**, it provides a scalable and modular architecture for managing multiple tenants and systems.

## Features

- **Multi-Tenancy**: Each tenant has its own isolated environment.
- **Customizable Systems**: Deploy systems like LMS, HR, and E-commerce.
- **Dynamic Roles and Permissions**: Tenants can create custom roles and permissions.
- **Automation**: Python scripts for tenant provisioning, system deployment, and third-party integrations.
- **CI/CD**: Automated testing and deployment with GitHub Actions.

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MHarooney/mates-multi-saas-platform.git
   cd mates-multi-saas-platform
   ```

2. Run the initialization script:
   ```bash
   ./scripts/init.sh
   ```

3. Start the containers:
   ```bash
   docker-compose up -d
   ```

4. Access the application:
   - Backend: `http://localhost:8000`
   - Frontend: `http://localhost:8080`

## Documentation

- [Backend Documentation](#backend)
- [Frontend Documentation](#frontend)
- [AI and Automation](#ai-and-automation)
- [Deployment](#deployment)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

## Contact

For questions or support, please contact [Mahmoud Alharoon](mailto:mahmoud@example.com).
