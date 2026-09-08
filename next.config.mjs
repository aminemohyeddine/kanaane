import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Serve modern formats to browsers that accept them (helps Core Web Vitals,
    // which Google uses as a ranking signal).
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
