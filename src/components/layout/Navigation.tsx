'use client';

import {
  Languages,
  Menu,
  ShoppingCart,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const navigationConfig = {
  en: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  ur: [
    { name: 'ہوم', href: '/' },
    { name: 'مصنوعات', href: '/products' },
    { name: 'خدمات', href: '/services' },
    { name: 'ہمارے بارے میں', href: '/about' },
    { name: 'رابطہ', href: '/contact' },
  ],
};

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { getTotalItems } = useCart();
  const { language, setLanguage } = useLanguage();
  const cartItemCount = getTotalItems();

  const navigation =
    navigationConfig[language as keyof typeof navigationConfig];
  const cartText = language === 'en' ? 'Cart' : 'کارٹ';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <div dir='ltr' style={{ unicodeBidi: 'isolate' }}>
            <Link href='/' className='flex items-center group'>
              <Image
                src='/images/logo.png'
                alt='Dr. Aqua Logo'
                width={80}
                height={32}
                className='h-10 w-auto transition-transform group-hover:scale-105'
                priority
              />
            </Link>
          </div>

          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navigation.map((item) => {
              if (item.name === 'Products' || item.name === 'مصنوعات') {
                return (
                  <div key={item.name} className='relative group'>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-sm font-semibold transition-all duration-200 relative inline-flex items-center gap-1 py-2',
                        pathname === item.href
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600',
                      )}
                    >
                      {item.name}
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-primary-500 to-aqua-500 transition-all duration-200',
                          pathname === item.href
                            ? 'w-full'
                            : 'w-0 group-hover:w-full',
                        )}
                      />
                    </Link>
                    <div className='absolute left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50'>
                      <div className='bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden'>
                        <div
                          className='flex flex-col py-2'
                          suppressHydrationWarning
                        >
                          <Link
                            href='/products?category=residential'
                            className='px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors'
                            suppressHydrationWarning
                          >
                            Residential
                          </Link>
                          <Link
                            href='/products?category=commercial'
                            className='px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors'
                            suppressHydrationWarning
                          >
                            Commercial
                          </Link>
                          <Link
                            href='/products?category=industrial'
                            className='px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors'
                            suppressHydrationWarning
                          >
                            Industrial
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold transition-all duration-200 relative group',
                    pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600',
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-primary-500 to-aqua-500 transition-all duration-200',
                      pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full',
                    )}
                  />
                </Link>
              );
            })}

            <Button
              variant='ghost'
              size='sm'
              onClick={toggleLanguage}
              className='gap-1 text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              aria-label='Toggle language'
            >
              <Languages className='h-4 w-4' />
              <span className='text-sm font-medium'>
                {language === 'en' ? 'اردو' : 'EN'}
              </span>
            </Button>

            <Link href='/cart'>
              <Button
                variant='outline'
                size='sm'
                className='relative border-aqua-300 text-aqua-600 hover:bg-aqua-50 hover:border-aqua-400 transition-all'
              >
                <ShoppingCart className='h-4 w-4' />
                <span className='ml-2'>{cartText}</span>
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-linear-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md'>
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          <div className='flex items-center gap-2 md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={toggleLanguage}
              className='gap-1 text-gray-700'
              aria-label='Toggle language'
            >
              <Languages className='h-4 w-4' />
              <span className='text-xs font-medium'>
                {language === 'en' ? 'اردو' : 'EN'}
              </span>
            </Button>
            <Link href='/cart'>
              <Button
                variant='outline'
                size='sm'
                className='relative border-aqua-300 text-aqua-600 hover:bg-aqua-50'
              >
                <ShoppingCart className='h-4 w-4' />
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-linear-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md'>
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700'
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className='border-t border-gray-200 py-4 md:hidden bg-linear-to-br from-white to-gray-50'>
            <div className='flex flex-col space-y-2'>
              {navigation.map((item) => {
                if (item.name === 'Products' || item.name === 'مصنوعات') {
                  return (
                    <div key={item.name} className='px-4'>
                      <Link
                        href={item.href}
                        className={cn(
                          'rounded-lg block px-4 py-3 text-base font-semibold transition-all',
                          pathname === item.href
                            ? 'bg-linear-to-r from-primary-50 to-aqua-50 text-primary-700 border-l-4 border-primary-500'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600',
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className='mt-2 ml-2 flex flex-col space-y-1'>
                        <Link
                          href='/products?category=residential'
                          className='px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-50'
                          onClick={() => setIsOpen(false)}
                        >
                          Residential
                        </Link>
                        <Link
                          href='/products?category=commercial'
                          className='px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-50'
                          onClick={() => setIsOpen(false)}
                        >
                          Commercial
                        </Link>
                        <Link
                          href='/products?category=industrial'
                          className='px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-50'
                          onClick={() => setIsOpen(false)}
                        >
                          Industrial
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'rounded-lg px-4 py-3 text-base font-semibold transition-all',
                      pathname === item.href
                        ? 'bg-linear-to-r from-primary-50 to-aqua-50 text-primary-700 border-l-4 border-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600',
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
