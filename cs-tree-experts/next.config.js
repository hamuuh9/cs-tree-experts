/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['maps.googleapis.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
