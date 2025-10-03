import './globals.css';

import { Metadata } from 'next';
import * as React from 'react';
import { Toaster } from 'sonner';

import { CartProvider } from '@/components/cart-provider';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { siteConfig } from '@/constant/config';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Site metadata configured in @/constant/config
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Dr. Aqua - Pure Water Solutions',
    template: `%s | Dr. Aqua`,
  },
  description:
    'Premium water filter plants and professional installation services. Your trusted partner for clean, pure water solutions.',
  robots: { index: true, follow: true },
  // Favicon configuration
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/manifest.json`,
  openGraph: {
    url: siteConfig.url,
    title: 'Dr. Aqua - Pure Water Solutions',
    description:
      'Premium water filter plants and professional installation services.',
    siteName: 'Dr. Aqua',
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Aqua - Pure Water Solutions',
    description:
      'Premium water filter plants and professional installation services.',
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-inter'>
        <LanguageProvider>
          <CartProvider>
            <Navigation />
            <main className='min-h-main'>{children}</main>
            <Footer />
            <Toaster position='bottom-right' richColors />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
