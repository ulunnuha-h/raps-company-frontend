/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.veritrans.co.id',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'tuzfjdyigbxavulfrgjv.supabase.co',
        port: '',
        pathname: '/**'
      }
    ],
    domains: ['tuzfjdyigbxavulfrgjv.supabase.co', 'api.veritrans.co.id']
  },
  distDir: './.next'
}

module.exports = withVideos(nextConfig)
