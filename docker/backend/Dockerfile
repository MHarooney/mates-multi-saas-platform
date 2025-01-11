FROM php:8.1-fpm

WORKDIR /app
COPY backend /app

RUN docker-php-ext-install pdo pdo_mysql

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
