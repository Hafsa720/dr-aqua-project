import '@/styles/globals.css';

import { Metadata } from 'next';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/constant/config';

// Site metadata configured in @/constant/config
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // Favicon configuration - generate your own from https://realfavicongenerator.net/
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/manifest.json`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@rapidbizz',
  },
  // authors: [
  //   {
  //     name: 'RapidBizz Team',
  //     url: 'https://rapidbizz.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-inter' suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme-preference');
                  const theme = stored && ['light', 'dark', 'system'].includes(stored) ? stored : 'system';
                  
                  let resolved;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  } else {
                    resolved = theme;
                  }
                  
                  if (resolved === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  document.documentElement.setAttribute('data-theme', resolved);
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <Navigation />
          <main className='min-h-main'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
