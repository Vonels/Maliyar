import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["26.12.238.0"],

  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
