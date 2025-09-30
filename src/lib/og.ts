/**
 * Open Graph Image Generation
 *
 * This utility generates dynamic Open Graph images for better social media sharing.
 *
 * Options:
 * 1. Use a self-hosted OG image service (recommended for production)
 * 2. Use a third-party service like og-image.vercel.app
 * 3. Static images (fallback)
 *
 * For production: Deploy your own OG service or use services like:
 * - https://github.com/vercel/og-image
 * - https://github.com/m-hamidmehmood/og
 */

export type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  theme?: 'light' | 'dark';
  fontFamily?: string;
};

/**
 * Generate Open Graph image URL
 *
 * @param config - Open Graph configuration
 * @returns Generated OG image URL
 *
 * @example
 * ```ts
 * const ogUrl = openGraph({
 *   siteName: 'RapidBizz',
 *   description: 'Professional web development services',
 *   templateTitle: 'About Us',
 *   theme: 'dark'
 * });
 * ```
 */
export function openGraph({
  siteName,
  templateTitle,
  description,
  logo: _logo = '/favicon/logo-512.png', // Fallback to local logo
  theme = 'dark',
  fontFamily: _fontFamily = 'Inter',
}: OpenGraphType): string {
  // Use local API route for dynamic OG generation
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rapidbizz.com';

  const params = new URLSearchParams({
    title: siteName.trim(),
    description: description.trim(),
    theme,
  });

  if (templateTitle) {
    params.set('templateTitle', templateTitle.trim());
  }

  return `${baseUrl}/api/og?${params.toString()}`;
}

/**
 * Generate metadata for Next.js app router
 *
 * @param config - Page metadata configuration
 * @returns Next.js metadata object
 *
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: 'About Us',
 *   description: 'Learn about our company',
 *   path: '/about'
 * });
 * ```
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'RapidBizz';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rapidbizz.com';
  const fullUrl = `${siteUrl}${path}`;

  const ogImage =
    image ||
    openGraph({
      siteName,
      description,
      templateTitle: title,
    });

  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
