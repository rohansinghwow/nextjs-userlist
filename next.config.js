/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.dog.ceo'],
    
  },
  target: "serverless",
}

module.exports = nextConfig
