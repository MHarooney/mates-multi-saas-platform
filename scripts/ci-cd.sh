#!/bin/bash

echo "Running CI/CD pipeline..."
docker-compose build
docker-compose up -d
docker-compose exec backend php artisan test
