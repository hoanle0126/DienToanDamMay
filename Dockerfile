# Giai đoạn 1: Build Frontend (React/Vite)
FROM node:18-alpine as frontend_builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
# Thay thế VITE_BACKEND_URL bằng đường dẫn API thật trên Render
# (Bạn cần biết URL Backend sau khi deploy để đặt ở đây)
# Ví dụ: VITE_BACKEND_URL=https://your-backend-service.onrender.com/api
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm run build

# Giai đoạn 2: Build Backend (Laravel) và kết hợp với Nginx
FROM php:8.2-fpm-alpine as backend_builder

# Cài đặt các thư viện hệ thống cần thiết cho PHP
RUN apk add --no-cache \
    nginx \
    postgresql-client \
    postgresql-dev \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    jpeg-dev \
    freetype-dev \
    oniguruma-dev \
    git \
    g++ \
    make

# Cài đặt các extensions PHP
RUN docker-php-ext-install -j$(nproc) pdo pdo_pgsql mbstring exif pcntl bcmath gd zip # <-- ĐÃ THAY ĐỔI
# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy code backend (Laravel)
COPY backend/laravel/ .

# Cài đặt dependencies Composer (chỉ production)
RUN composer install --no-dev --optimize-autoloader

# Cấu hình Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Xóa cache config của Laravel (nếu có)
RUN php artisan config:clear || true

# Copy frontend build từ giai đoạn 1
COPY --from=frontend_builder /app/frontend/dist /var/www/html/public

# Expose port của Nginx
EXPOSE 80

# Chạy Nginx và PHP-FPM
CMD ["sh", "-c", "php artisan migrate --force && nginx -g 'daemon off;' && php-fpm"]