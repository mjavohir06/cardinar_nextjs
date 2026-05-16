import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cardinar.uz',
        pathname: '/img/**',
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port:"8888",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**"
      }
    ],
    dangerouslyAllowLocalIP: true
  }
};

export default withNextIntl(nextConfig);
