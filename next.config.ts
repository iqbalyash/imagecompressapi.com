import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable cache components for Next.js 16
  experimental: {
    cacheComponents: true,
  },
};

export default nextConfig;
