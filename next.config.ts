import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable React Strict Mode for development */
  reactStrictMode: true,

  /* Export the app as static HTML */
  output: 'export',

  /* Optional: Skip ESLint checks during the build process */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* Optional: Add custom headers for your app */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Custom-Header',
            value: 'MyCustomHeaderValue',
          },
        ],
      },
    ];
  },

  /* Optional: Define paths to be used in the app */
  trailingSlash: true, // Optional: Adds a trailing slash to the URL
};

export default nextConfig;
