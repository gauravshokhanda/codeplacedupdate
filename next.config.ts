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
    const serviceRedirects = [
      {
        source: "/services/executive-dashboards",
        destination: "/services/data-analytics-engineering",
        permanent: true,
      },
      {
        source: "/services/data-platforms",
        destination: "/services/data-analytics-engineering",
        permanent: true,
      },
      {
        source: "/services/digital-social-marketing",
        destination: "/services/data-analytics-engineering",
        permanent: true,
      },
      {
        source: "/services/data-engineering-analytics",
        destination: "/services/data-analytics-engineering",
        permanent: true,
      },
      {
        source: "/case-studies/hoopwrld",
        destination: "/case-studies/courtmetrics",
        permanent: true,
      },
      {
        source: "/case-studies/progress-partners",
        destination: "/case-studies/growthpulse",
        permanent: true,
      },
    ];

    if (SHOW_INDUSTRIES) {
      return serviceRedirects;
    }

    return [
      ...serviceRedirects,
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
