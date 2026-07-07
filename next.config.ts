import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rajkumar-malviya-portfolio.vercel.app",
      },
    ],
  },
};

export default nextConfig;
