import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Don't fail builds on TS errors during deployment
    ignoreBuildErrors: true
  }
};

export default nextConfig;
