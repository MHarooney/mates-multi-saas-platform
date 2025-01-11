FROM php:8.2-fpm
WORKDIR /var/www/html
COPY ../backend .
RUN composer install