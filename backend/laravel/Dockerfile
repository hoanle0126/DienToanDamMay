# Dòng này BẮT BUỘC phải có ở trên cùng
FROM php:8.2-alpine

# Đặt thư mục làm việc
WORKDIR /var/www/html

# Cài đặt các thư viện hệ thống
RUN apk add --no-cache \
    build-base \
    mysql-client \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    jpeg-dev \
    freetype-dev \
    oniguruma-dev \
    git
# Cài đặt các extensions PHP
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy code (để cài đặt composer, dù sẽ bị volume ghi đè)
COPY . .

# Cài đặt dependencies
RUN composer install --ignore-platform-reqs

# Expose port 8000 (của 'artisan serve')
EXPOSE 8000