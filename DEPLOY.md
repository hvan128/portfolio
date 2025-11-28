# Hướng dẫn Deploy với CI/CD lên VPS

Hướng dẫn chi tiết để deploy project Next.js lên VPS với CI/CD tự động sử dụng GitHub Actions.

## 📋 Yêu cầu

- VPS với Ubuntu/Debian
- Node.js 20+ đã được cài đặt
- PM2 đã được cài đặt
- Nginx đã được cài đặt (cho reverse proxy)
- SSH key đã được setup
- GitHub repository

## 🔧 Bước 1: Chuẩn bị VPS

### 1.1. Cài đặt Node.js

```bash
# Cài đặt Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Kiểm tra version
node -v
npm -v
```

### 1.2. Cài đặt PM2

```bash
sudo npm install -g pm2

# Khởi động PM2 khi server restart
pm2 startup
pm2 save
```

### 1.3. Cài đặt Nginx

```bash
sudo apt update
sudo apt install nginx -y

# Khởi động Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 1.4. Tạo thư mục project

```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### 1.5. Tạo thư mục log cho PM2

```bash
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2
```

## 🔐 Bước 2: Cấu hình SSH Key

### 2.1. Tạo SSH Key trên máy local (nếu chưa có)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 2.2. Copy public key lên VPS

```bash
ssh-copy-id username@your-vps-ip
```

Hoặc copy thủ công:

```bash
cat ~/.ssh/id_ed25519.pub | ssh username@your-vps-ip "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 2.3. Test kết nối SSH

```bash
ssh username@your-vps-ip
```

## 🔑 Bước 3: Cấu hình GitHub Secrets

Vào GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Thêm các secrets sau:

1. **VPS_HOST**: Địa chỉ IP hoặc domain của VPS (ví dụ: `123.456.789.0` hoặc `yourdomain.com`)
2. **VPS_USER**: Username SSH (ví dụ: `root` hoặc `ubuntu`)
3. **VPS_SSH_KEY**: Nội dung private key SSH (copy toàn bộ nội dung file `~/.ssh/id_ed25519`)
4. **VPS_PORT**: Port SSH (mặc định: `22`, có thể bỏ qua nếu dùng port 22)

### Cách lấy SSH Private Key:

```bash
cat ~/.ssh/id_ed25519
```

Copy toàn bộ output (bao gồm `-----BEGIN OPENSSH PRIVATE KEY-----` và `-----END OPENSSH PRIVATE KEY-----`)

## 🌐 Bước 4: Cấu hình Nginx

Tạo file cấu hình Nginx:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Thêm nội dung sau:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kích hoạt site:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 Bước 5: Cấu hình SSL với Let's Encrypt (Tùy chọn)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot sẽ tự động cấu hình SSL và renew tự động.

## 🚀 Bước 6: Deploy lần đầu

### 6.1. Clone repository lên VPS

```bash
cd /var/www/portfolio
git clone https://github.com/your-username/your-repo.git .
```

### 6.2. Cài đặt dependencies và build

```bash
npm install
npm run build
```

### 6.3. Chạy với PM2

```bash
pm2 start ecosystem.config.js
pm2 save
```

### 6.4. Kiểm tra

```bash
pm2 status
pm2 logs portfolio
```

Truy cập `http://your-vps-ip` hoặc `http://yourdomain.com` để kiểm tra.

## 🔄 Bước 7: Tự động Deploy với CI/CD

Sau khi đã cấu hình GitHub Secrets, mỗi khi push code lên branch `main` hoặc `master`, GitHub Actions sẽ tự động:

1. Build project
2. Deploy code lên VPS
3. Chạy script deploy.sh
4. Restart ứng dụng với PM2

### Test CI/CD

```bash
# Commit và push code
git add .
git commit -m "Test CI/CD deployment"
git push origin main
```

Vào GitHub → Actions để xem quá trình deploy.

## 📊 Quản lý ứng dụng

### Xem logs

```bash
pm2 logs portfolio
```

### Restart ứng dụng

```bash
pm2 restart portfolio
```

### Stop ứng dụng

```bash
pm2 stop portfolio
```

### Xem status

```bash
pm2 status
```

### Xem thông tin chi tiết

```bash
pm2 info portfolio
```

## 🔧 Troubleshooting

### Lỗi permission

```bash
sudo chown -R $USER:$USER /var/www/portfolio
```

### Lỗi port đã được sử dụng

Kiểm tra port 3000:

```bash
sudo lsof -i :3000
```

Hoặc thay đổi port trong `ecosystem.config.js` và cấu hình lại Nginx.

### Lỗi build

Kiểm tra logs:

```bash
pm2 logs portfolio --err
```

### Kiểm tra Nginx

```bash
sudo nginx -t
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

## 📝 Lưu ý

1. Đảm bảo firewall cho phép port 80, 443, và 22
2. Nếu dùng domain, cấu hình DNS trỏ về IP VPS
3. Backup database và files quan trọng trước khi deploy
4. Kiểm tra `.env` files nếu có biến môi trường

## 🔐 Bảo mật

1. Sử dụng SSH key thay vì password
2. Cấu hình firewall (UFW)
3. Cập nhật hệ thống thường xuyên
4. Sử dụng SSL/HTTPS
5. Không commit secrets vào Git

## 📚 Tài liệu tham khảo

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [GitHub Actions](https://docs.github.com/en/actions)

