import type { NextConfig } from "next";
import { SHOW_INDUSTRIES } from "./src/lib/featureFlags";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    if (SHOW_INDUSTRIES) {
      return [];
    }
    return [
      {
        source: "/industries",
        destination: "/",
        permanent: false,
      },
      {
        source: "/industries/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
