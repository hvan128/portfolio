#!/bin/bash

# Script deploy tự động cho VPS
# Chạy script này trên VPS sau khi code được deploy

set -e

echo "🚀 Bắt đầu quá trình deploy..."

# Di chuyển đến thư mục project
cd /var/www/portfolio

# Cài đặt dependencies
echo "📦 Đang cài đặt dependencies..."
npm ci --production=false

# Build project
echo "🔨 Đang build project..."
npm run build

# Restart ứng dụng với PM2
echo "🔄 Đang restart ứng dụng..."
if pm2 list | grep -q "portfolio"; then
    pm2 restart portfolio
else
    pm2 start ecosystem.config.js
    pm2 save
fi

# Kiểm tra status
echo "✅ Kiểm tra trạng thái ứng dụng..."
pm2 status

echo "🎉 Deploy hoàn tất!"

