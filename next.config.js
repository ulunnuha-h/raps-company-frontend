/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.veritrans.co.id',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
