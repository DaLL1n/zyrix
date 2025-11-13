import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // -----------------------------------------------------------------
  // ↓↓↓ ЭТО ДВЕ САМЫЕ ВАЖНЫЕ НАСТРОЙКИ ДЛЯ GITHUB PAGES ↓↓↓
  // -----------------------------------------------------------------

  /**
   * Говорим Next.js, что нам нужен статический экспорт (папка 'out' с HTML/CSS/JS)
   */
  output: 'export',

  /**
   * Указываем, что сайт будет лежать в подпапке '/zyrix'
   * (т.к. адрес будет https://dall1n.github.io/zyrix/)
   * Отключаем для локальной разработки
   */
  basePath: process.env.NODE_ENV === 'production' ? '/zyrix' : '',

  // -----------------------------------------------------------------
  // ↑↑↑ КОНЕЦ ВАЖНЫХ НАСТРОЕК ↑↑↑
  // -----------------------------------------------------------------

  //
  // Дальше идут ваши настройки, которые УЖЕ БЫЛИ в файле.
  //
  images: {
    // ВАЖНО: для 'output: export' картинки Next.js Image
    // нужно "отключить", иначе будет ошибка при 'npm run build'.
    // unoptimized: true,

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
