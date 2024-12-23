/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  images: {
    domains: ["placeholder.com"], // Add any other domains you're loading images from
  },
};

module.exports = nextConfig;
