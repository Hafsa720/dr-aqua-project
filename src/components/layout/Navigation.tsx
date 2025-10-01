'use client';

import {
  Code,
  Home,
  Mail,
  Menu,
  Users,
  X,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import { ThemeToggle } from '@/components/theme-toggle';
import { useThemeContext } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useThemeContext();
  const isDarkTheme = resolvedTheme === 'dark';

  const navItems: MenuItem[] = [
    {
      icon: <Home className='h-4 w-4' />,
      label: 'Home',
      href: '/',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(37,99,235,0.15) 50%, rgba(29,78,216,0.05) 100%)'
        : 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.10) 50%, rgba(29,78,216,0.02) 100%)',
      iconColor: 'text-blue-500',
    },
    {
      icon: <Code className='h-4 w-4' />,
      label: 'Components',
      href: '/components-demo',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(147,51,234,0.15) 50%, rgba(126,34,206,0.05) 100%)'
        : 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(147,51,234,0.10) 50%, rgba(126,34,206,0.02) 100%)',
      iconColor: 'text-purple-500',
    },
    {
      icon: <Users className='h-4 w-4' />,
      label: 'Team',
      href: '/team',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(234,88,12,0.15) 50%, rgba(194,65,12,0.05) 100%)'
        : 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(234,88,12,0.10) 50%, rgba(194,65,12,0.02) 100%)',
      iconColor: 'text-orange-500',
    },
    {
      icon: <Mail className='h-4 w-4' />,
      label: 'Contact',
      href: '/contact',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(239,68,68,0.35) 0%, rgba(220,38,38,0.15) 50%, rgba(185,28,28,0.05) 100%)'
        : 'radial-gradient(circle, rgba(239,68,68,0.25) 0%, rgba(220,38,38,0.10) 50%, rgba(185,28,28,0.02) 100%)',
      iconColor: 'text-red-500',
    },
  ];


  return (
    <header className='fixed z-50 w-full pt-4 pb-2'>
      <div className='layout'>
        {/* Pill-shaped navbar container */}
        <div className='relative'>
          <div className='absolute inset-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-300/30 dark:border-white/20 shadow-lg'></div>
          <div className='relative flex items-center justify-between h-16 md:h-18 px-6 md:px-8'>
            {/* Logo - Compact for pill */}
            <UnstyledLink href='/' className='flex items-center hover:opacity-80 transition-opacity duration-200'>
              <div className='flex items-center justify-center h-8 md:h-10'>
                <span className='text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent'>
                  LOGO
                </span>
              </div>
            </UnstyledLink>

            {/* Desktop Navigation - Clean Design */}
            <div className='hidden lg:block'>
              <nav className='flex items-center gap-1'>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.label} className='relative'>
                      <UnstyledLink
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-white/10 text-foreground font-semibold shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                        }`}
                      >
                        <span
                          className={`transition-all duration-200 ${
                            isActive ? item.iconColor : 'text-current'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className='hidden xl:inline'>
                          {item.label}
                        </span>
                      </UnstyledLink>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Desktop Actions - Pill Design */}
            <div className='hidden lg:flex items-center space-x-3'>
              {/* Theme Toggle in pill container */}
              <div className='bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-full p-2 border border-slate-300/30 dark:border-white/10'>
                <ThemeToggle />
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className='bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl rounded-full px-6 py-2.5 font-bold transition-all duration-200 text-sm'
              >
                <UnstyledLink
                  href='/contact'
                  className='flex items-center gap-2'
                >
                  <span>GET STARTED</span>
                  <span className='text-xs'>→</span>
                </UnstyledLink>
              </Button>
            </div>

            {/* Mobile Menu Controls - Pill Design */}
            <div className='lg:hidden flex items-center space-x-3'>
              {/* Theme Toggle in pill */}
              <div className='bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-full p-2 border border-slate-300/30 dark:border-white/10'>
                <ThemeToggle />
              </div>

              {/* Menu Button */}
              <div className='bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-full p-2 border border-slate-300/30 dark:border-white/10'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-foreground hover:text-primary-400 rounded-full h-8 w-8 transition-colors duration-200'
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                  {isOpen ? (
                    <X className='h-4 w-4' />
                  ) : (
                    <Menu className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Simplified */}
        {isOpen && (
          <div className='lg:hidden mt-4 overflow-hidden'>
            {/* Simplified mobile menu */}
            <div className='relative'>
              <div className='absolute inset-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-white/20 shadow-lg'></div>
              <div className='relative py-6 px-6 space-y-2'>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.label}>
                      <UnstyledLink
                        href={item.href}
                        className={`flex items-center gap-3 px-5 py-3.5 text-base font-medium rounded-lg transition-colors duration-200 ${
                          isActive
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100 font-semibold'
                            : 'text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span
                          className={`transition-colors duration-200 ${
                            isActive
                              ? item.iconColor
                              : 'text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </UnstyledLink>
                    </div>
                  );
                })}
                <div className='pt-4'>
                  {/* Simple separator */}
                  <div className='mb-4 flex justify-center'>
                    <div className='w-12 h-[1px] bg-gray-300 dark:bg-gray-600'></div>
                  </div>

                  {/* Simplified mobile CTA */}
                  <Button
                    asChild
                    className='w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg py-3 font-semibold transition-colors duration-200'
                  >
                    <UnstyledLink
                      href='/contact'
                      onClick={() => setIsOpen(false)}
                      className='flex items-center justify-center gap-2'
                    >
                      <span>GET STARTED</span>
                      <span className='text-sm'>→</span>
                    </UnstyledLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
