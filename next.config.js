/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: 'public/next.svg',
  },
  distDir: 'build',
  reactStrictMode: true,
}


module.exports = nextConfig