/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = nextConfig;
