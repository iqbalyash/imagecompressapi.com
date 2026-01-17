import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static export for Cloudflare Pages
  output: process.env.CF_PAGES ? "export" : undefined,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
