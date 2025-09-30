/**
 * Next.js Sitemap Configuration
 *
 * Automatically generates sitemap.xml and robots.txt for better SEO
 *
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // Base URL of your website (without trailing slash)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rapidbizz.com',

  // Generate robots.txt file
  generateRobotsTxt: true,

  // Generate index sitemap (sitemap of sitemaps)
  generateIndexSitemap: true,

  // Sitemap size limit (default: 50000)
  sitemapSize: 7000,

  // Change frequency for pages
  changefreq: 'daily',
  priority: 0.7,

  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, '/projects/ecommerce-platform'),
    await config.transform(config, '/projects/healthcare-system'),
    await config.transform(config, '/projects/financial-dashboard'),
  ],

  // Exclude specific paths
  exclude: [
    '/api/*',
    '/admin/*',
    '/404',
    '/500',
    '/_document',
    '/_app',
    '/_error',
  ],

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      // Add additional sitemaps if needed
      // 'https://rapidbizz.com/blog-sitemap.xml',
    ],
  },

  // Transform function to modify URLs
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = config.priority;

    if (path === '/') priority = 1.0;
    else if (path.includes('/projects/')) priority = 0.8;
    else if (path.includes('/services')) priority = 0.9;
    else if (path.includes('/contact')) priority = 0.7;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
