/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] , typedRoutes: true},
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  },
  images: {
    domains: ['images.unsplash.com','firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
