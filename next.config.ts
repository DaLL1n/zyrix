import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  basePath: process.env.GITHUB_ACTIONS ? '/zyrix' : '',

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/**',
      },
    ],
    qualities: [75, 100],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
