'use client';

import { Languages, Menu, ShoppingCart, X } from 'lucide-react';
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

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-aqua-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity' />
              <span className='relative text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent'>
                Dr.
              </span>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-aqua-500 to-aqua-600 bg-clip-text text-transparent'>
              AQUA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navigation.map((item) => (
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
                    'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-aqua-500 transition-all duration-200',
                    pathname === item.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full',
                  )}
                />
              </Link>
            ))}

            {/* Language Toggle */}
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

            {/* Cart Button */}
            <Link href='/cart'>
              <Button
                variant='outline'
                size='sm'
                className='relative border-aqua-300 text-aqua-600 hover:bg-aqua-50 hover:border-aqua-400 transition-all'
              >
                <ShoppingCart className='h-4 w-4' />
                <span className='ml-2'>{cartText}</span>
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse'>
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
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
                  <span className='absolute -top-2 -right-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md'>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='border-t border-gray-200 py-4 md:hidden bg-gradient-to-br from-white to-gray-50'>
            <div className='flex flex-col space-y-2'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-semibold transition-all',
                    pathname === item.href
                      ? 'bg-gradient-to-r from-primary-50 to-aqua-50 text-primary-700 border-l-4 border-primary-500'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-primary-600',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
