/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kanaane-auto-services.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const paths = [
      '/',
      '/fr',
      '/ar',
      '/fr/location',
      '/ar/location',
      '/fr/contact',
      '/ar/contact',
      '/ar/nos-services',
      '/fr/nos-services',
    ];

    return paths.map((url) => ({
      loc: `https://www.kanaane-auto-services.com${url}`,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
