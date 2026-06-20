const createNextIntlPlugin = require('next-intl/plugin')

// Points next-intl at the per-request config (default: ./i18n/request.ts).
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withNextIntl(nextConfig)
