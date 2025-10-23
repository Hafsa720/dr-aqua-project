'use client';

import { Languages,Menu, ShoppingCart, X } from 'lucide-react';
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
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  ur: [
    { name: 'ہوم', href: '/' },
    { name: 'مصنوعات', href: '/products' },
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
    <nav className='sticky top-0 z-50 w-full border-b border-primary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold text-primary-900'>Dr. Aqua</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  pathname === item.href
                    ? 'text-primary-700'
                    : 'text-primary-900',
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <Button
              variant='ghost'
              size='sm'
              onClick={toggleLanguage}
              className='gap-1 text-primary-700 hover:text-primary-900 hover:bg-primary-50'
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
                className='relative border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400'
              >
                <ShoppingCart className='h-4 w-4' />
                <span className='ml-2'>{cartText}</span>
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md'>
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
              className='gap-1 text-primary-700'
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
                className='relative border-primary-300 text-primary-700 hover:bg-primary-50'
              >
                <ShoppingCart className='h-4 w-4' />
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-secondary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md'>
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsOpen(!isOpen)}
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
          <div className='border-t border-primary-200 py-4 md:hidden'>
            <div className='flex flex-col space-y-3'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-primary-900 hover:bg-primary-50',
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
