#!/bin/sh

# 1. Chạy migrations (quan trọng)
echo "Running database migrations..."
php artisan migrate --force

# 2. Chạy php-fpm trong nền
echo "Starting PHP-FPM..."
php-fpm &

# 3. Chạy nginx ở tiền cảnh (lệnh này sẽ giữ cho container chạy)
echo "Starting Nginx..."
nginx -g 'daemon off;'