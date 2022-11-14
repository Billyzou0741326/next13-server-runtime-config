/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    secret: 'password',
  },
}

module.exports = nextConfig
