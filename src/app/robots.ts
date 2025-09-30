import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rapidbizz.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
          '/api/og/*', // Allow OG image generation
        ],
        disallow: [
          '/api/*', // Disallow most API routes except OG
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/private/',
          '*.json',
          '*.xml',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
        ],
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
        ],
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
        ],
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
        ],
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/services/',
          '/projects/',
          '/team/',
          '/careers/',
          '/contact/',
          '/changelog/',
        ],
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
