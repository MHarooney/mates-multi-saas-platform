# Contributing to Mates Multi-SaaS Platform

Thank you for your interest in contributing to Mates Multi-SaaS Platform! Here are some guidelines to help you get started.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

1. **Fork the Repository**: Fork the project repository to your GitHub account.
2. **Clone the Repository**: Clone your forked repository to your local machine.
3. **Create a Branch**: Create a new branch for your feature or bugfix.
4. **Make Changes**: Make your changes and commit them with clear and concise messages.
5. **Push Changes**: Push your changes to your forked repository.
6. **Submit a Pull Request**: Open a pull request to the main repository.

## Development Setup

1. Install Docker and Docker Compose.
2. Clone the repository:
   ```bash
   git clone https://github.com/MHarooney/mates-multi-saas-platform.git
   cd mates-multi-saas-platform
   ```
3. Run the initialization script:
   ```bash
   ./scripts/init.sh
   ```
4. Start the containers:
   ```bash
   docker-compose up -d
   ```

## Testing

Run the tests using:
```bash
docker-compose exec backend php artisan test
```

## Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
