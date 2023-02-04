/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: 'public/next.svg',
  },
  // assetPrefix: 'https://vigneshmarimuthu.com',
  distDir: 'build',
  reactStrictMode: true,
}


module.exports = nextConfig