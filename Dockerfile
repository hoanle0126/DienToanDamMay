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

# Cài đặt các thư viện hệ thống
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
    make

# Cài đặt các extensions PHP
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

# --- BẮT ĐẦU PHẦN SỬA ---

# Tạo file nginx.conf trực tiếp bằng 'printf' (đã sửa cú pháp '%s\n')
RUN printf '%s\n' 'server {' > /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    listen 80;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    server_name localhost;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    root /var/www/html/public;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    index index.php index.html;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    charset utf-8;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    location / {' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        try_files \$uri \$uri/ /index.php?\$query_string;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    }' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    location /api {' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        try_files \$uri \$uri/ /index.php?\$query_string;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    }' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    location ~ \.php$ {' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        fastcgi_pass 127.0.0.1:9000;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        fastcgi_index index.php;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        include fastcgi_params;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    }' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    location ~ /\.(?!well-known).* {' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '        deny all;' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '    }' >> /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '}' >> /etc/nginx/conf.d/default.conf

# Copy frontend build từ giai đoạn 1 vào thư mục public của Laravel
COPY --from=frontend_builder /app/frontend/dist /var/www/html/public

# Tạo file start.sh trực tiếp bằng 'printf' (đã sửa cú pháp '%s\n')
RUN printf '%s\n' '#!/bin/sh' > /usr/local/bin/start.sh && \
    printf '%s\n' 'echo "Running database migrations..."' >> /usr/local/bin/start.sh && \
    printf '%s\n' 'php artisan migrate --force' >> /usr/local/bin/start.sh && \
    printf '%s\n' 'echo "Starting PHP-FPM..."' >> /usr/local/bin/start.sh && \
    printf '%s\n' 'php-fpm &' >> /usr/local/bin/start.sh && \
    printf '%s\n' 'echo "Starting Nginx..."' >> /usr/local/bin/start.sh && \
    printf '%s\n' 'nginx -g "daemon off;"' >> /usr/local/bin/start.sh

# Cấp quyền thực thi cho start.sh
RUN chmod +x /usr/local/bin/start.sh

# Expose port của Nginx
EXPOSE 80

# Chạy script khởi động
CMD ["/usr/local/bin/start.sh"]