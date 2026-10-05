import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/smart-lock", destination: "/services", permanent: true },
      { source: "/blog/smart-lock-buying-guide", destination: "/blog", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
