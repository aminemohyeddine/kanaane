const SITE_URL = 'https://www.kanaane-auto-services.com';
const LOCALES = ['fr', 'ar'];
const PATHS = ['', '/nos-services', '/location', '/contact'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: true,
  // Locale-prefixed URLs are listed explicitly below; skip whatever Next emits.
  exclude: ['*'],
  sitemapSize: 5000,

  additionalPaths: async () => {
    const now = new Date().toISOString();

    return PATHS.flatMap((path) =>
      LOCALES.map((locale) => ({
        loc: `${SITE_URL}/${locale}${path}`,
        changefreq: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : 0.8,
        lastmod: now,
        // hreflang pairs so Google serves the right language per user.
        alternateRefs: [
          ...LOCALES.map((code) => ({
            href: `${SITE_URL}/${code}${path}`,
            hreflang: code,
            hrefIsAbsolute: true,
          })),
          {
            href: `${SITE_URL}/fr${path}`,
            hreflang: 'x-default',
            hrefIsAbsolute: true,
          },
        ],
      })),
    );
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
};
