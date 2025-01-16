import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/khen-portfolio', // Correct base path for your GitHub Pages project
  assetPrefix: '/khen-portfolio/', // Correct asset prefix for assets on GitHub Pages
  trailingSlash: true, // Make sure to handle URLs with trailing slashes for proper routing
  eslint: {
    ignoreDuringBuilds: true, // Ignore linting during production builds
  },
};

export default nextConfig;
