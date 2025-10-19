# Giai đoạn 1: Build Frontend (React/Vite)
FROM node:18-alpine as frontend_builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

# Biến này sẽ được Render cung cấp lúc build
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# Giai đoạn 2: Build Backend (Laravel) và kết hợp với Nginx
FROM php:8.2-fpm-alpine as backend_builder

WORKDIR /var/www/html

# Cài đặt các thư viện hệ thống (Đã đổi sang Postgres)
RUN apk add --no-cache \
    nginx \
    git \
    postgresql-client \
    postgresql-dev \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    jpeg-dev \
    freetype-dev \
    oniguruma-dev \
    g++ \
    make \
    sed \
    dos2unix # <--- THÊM GÓI NÀY

# Cài đặt các extensions PHP (Đã đổi sang Postgres)
RUN docker-php-ext-install -j$(nproc) pdo pdo_pgsql mbstring exif pcntl bcmath gd zip

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy code backend (Laravel)
COPY backend/laravel/ .

# Cài đặt dependencies Composer (chỉ production)
RUN composer install --no-dev --optimize-autoloader

# Xóa cache (nếu có) để nhận biến .env của production
RUN php artisan config:clear || true
RUN php artisan route:clear || true

# Copy cấu hình Nginx VÀ XÓA KÝ TỰ BOM
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN dos2unix /etc/nginx/conf.d/default.conf # <--- SỬA LẠI DÒNG NÀY

# Copy frontend build từ giai đoạn 1 vào thư mục public của Laravel
COPY --from=frontend_builder /app/frontend/dist /var/www/html/public

# Copy script khởi động VÀ XÓA KÝ TỰ DOS
COPY start.sh /usr/local/bin/start.sh
RUN dos2unix /usr/local/bin/start.sh && \
    chmod +x /usr/local/bin/start.sh

# Expose port của Nginx
EXPOSE 80

# Chạy script khởi động
CMD ["/usr/local/bin/start.sh"]