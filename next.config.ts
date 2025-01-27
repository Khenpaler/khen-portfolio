import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // For static site export
  basePath: "/khen-portfolio", // Set to your repository name
  assetPrefix: "/khen-portfolio", // Prefix for static assets
  images: {
    unoptimized: true, // Disable Next.js image optimization for static sites
  },
};

export default nextConfig;
