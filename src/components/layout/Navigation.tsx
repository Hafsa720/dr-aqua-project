'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Code,
  Heart,
  Home,
  Mail,
  Menu,
  Users,
  X,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
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
      icon: <Briefcase className='h-4 w-4' />,
      label: 'Services',
      href: '/services',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(22,163,74,0.15) 50%, rgba(21,128,61,0.05) 100%)'
        : 'radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(22,163,74,0.10) 50%, rgba(21,128,61,0.02) 100%)',
      iconColor: 'text-green-500',
    },
    {
      icon: <Code className='h-4 w-4' />,
      label: 'Projects',
      href: '/projects',
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
      icon: <Heart className='h-4 w-4' />,
      label: 'Careers',
      href: '/careers',
      gradient: isDarkTheme
        ? 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(219,39,119,0.15) 50%, rgba(190,24,93,0.05) 100%)'
        : 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(219,39,119,0.10) 50%, rgba(190,24,93,0.02) 100%)',
      iconColor: 'text-pink-500',
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

  // Enhanced v0 animation variants
  const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 },
  };

  const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
    },
  };

  const sharedTransition = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  };

  return (
    <header className='fixed z-50 w-full pt-4 pb-2'>
      <div className='layout'>
        {/* Pill-shaped navbar container */}
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-slate-200/50 via-white/80 to-slate-200/50 dark:from-white/10 dark:via-white/20 dark:to-white/10 backdrop-blur-xl rounded-full border border-slate-300/30 dark:border-white/20 shadow-2xl'></div>
          <div className='relative flex items-center justify-between h-16 md:h-18 px-6 md:px-8'>
            {/* Logo - Compact for pill */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <UnstyledLink href='/' className='flex items-center'>
                <div className='flex items-center justify-center h-12 md:h-14 overflow-hidden'>
                  <NextImage
                    src='/logo.svg'
                    alt='RapidBizz Logo'
                    width={120}
                    height={60}
                    className='object-contain'
                    style={{ width: 'auto' }}
                  />
                </div>
              </UnstyledLink>
            </motion.div>

            {/* Desktop Navigation - Clean Design */}
            <div className='hidden lg:block'>
              <nav className='flex items-center gap-1'>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.label} className='relative'>
                      <motion.div
                        className='block rounded-xl overflow-hidden group relative'
                        whileHover='hover'
                        initial='initial'
                      >
                        {/* Active/Hover Background */}
                        <motion.div
                          className='absolute inset-0 z-0 pointer-events-none rounded-xl'
                          variants={glowVariants}
                          initial={
                            isActive
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          animate={
                            isActive
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          style={{
                            background: item.gradient,
                            borderRadius: '12px',
                          }}
                        />
                        <motion.div className='relative z-10'>
                          <motion.div
                            variants={itemVariants}
                            transition={sharedTransition}
                            style={{
                              transformStyle: 'preserve-3d',
                              transformOrigin: 'center bottom',
                            }}
                          >
                            <UnstyledLink
                              href={item.href}
                              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                                isActive
                                  ? 'text-foreground font-semibold shadow-sm'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              <span
                                className={`transition-all duration-300 ${
                                  isActive
                                    ? item.iconColor
                                    : `group-hover:${item.iconColor}`
                                }`}
                              >
                                {item.icon}
                              </span>
                              <span className='hidden xl:inline'>
                                {item.label}
                              </span>
                            </UnstyledLink>
                          </motion.div>
                          <motion.div
                            variants={backVariants}
                            transition={sharedTransition}
                            style={{
                              transformStyle: 'preserve-3d',
                              transformOrigin: 'center top',
                              rotateX: 90,
                            }}
                            className='absolute inset-0 z-10'
                          >
                            <UnstyledLink
                              href={item.href}
                              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                                isActive
                                  ? 'text-foreground font-semibold shadow-sm'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              <span
                                className={`transition-all duration-300 ${
                                  isActive
                                    ? item.iconColor
                                    : `group-hover:${item.iconColor}`
                                }`}
                              >
                                {item.icon}
                              </span>
                              <span className='hidden xl:inline'>
                                {item.label}
                              </span>
                            </UnstyledLink>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
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

              {/* Pill-shaped CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='relative group'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110'></div>
                <Button
                  asChild
                  className='relative bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-xl hover:shadow-2xl rounded-full px-6 py-2.5 font-bold border border-white/20 backdrop-blur-sm transition-all duration-300 text-sm'
                >
                  <UnstyledLink
                    href='/contact'
                    className='flex items-center gap-2'
                  >
                    <span>GET STARTED</span>
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className='w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs'
                    >
                      →
                    </motion.div>
                  </UnstyledLink>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Controls - Pill Design */}
            <div className='lg:hidden flex items-center space-x-3'>
              {/* Theme Toggle in pill */}
              <div className='bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-full p-2 border border-slate-300/30 dark:border-white/10'>
                <ThemeToggle />
              </div>

              {/* Pill Menu Button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className='bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-full p-2 border border-slate-300/30 dark:border-white/10'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-foreground hover:text-primary-400 rounded-full h-8 w-8'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'backOut' }}
                    >
                      {isOpen ? (
                        <X className='h-4 w-4' />
                      ) : (
                        <Menu className='h-4 w-4' />
                      )}
                    </motion.div>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Pill Style */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='lg:hidden mt-4 overflow-hidden'
            >
              {/* Pill-shaped mobile menu */}
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-white/95 via-white/98 to-white/95 dark:from-white/10 dark:via-white/15 dark:to-white/10 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-white/20 shadow-2xl'></div>
                <div className='relative py-6 px-6 space-y-2'>
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <UnstyledLink
                          href={item.href}
                          className={`flex items-center gap-3 px-5 py-3.5 text-base font-medium rounded-full transition-all duration-200 relative overflow-hidden ${
                            isActive
                              ? 'text-white font-semibold shadow-lg'
                              : 'text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {/* Active background */}
                          {isActive && (
                            <div
                              className='absolute inset-0 rounded-full opacity-80'
                              style={{ background: item.gradient }}
                            />
                          )}
                          <span
                            className={`relative z-10 transition-colors duration-200 ${
                              isActive
                                ? item.iconColor
                                : `text-gray-600 dark:text-gray-300`
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span className='relative z-10'>{item.label}</span>
                        </UnstyledLink>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: navItems.length * 0.05,
                      duration: 0.2,
                    }}
                    className='pt-4'
                  >
                    {/* Pill separator */}
                    <div className='mb-4 flex justify-center'>
                      <div className='w-12 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full'></div>
                    </div>

                    {/* Pill-shaped mobile CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='relative group'
                    >
                      <div className='absolute inset-0 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110'></div>
                      <Button
                        asChild
                        className='relative w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-full py-4 font-bold shadow-2xl hover:shadow-3xl border border-white/20 backdrop-blur-sm transition-all duration-300'
                      >
                        <UnstyledLink
                          href='/contact'
                          onClick={() => setIsOpen(false)}
                          className='flex items-center justify-center gap-3'
                        >
                          <span>GET STARTED</span>
                          <motion.div
                            animate={{ x: [0, 2, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm'
                          >
                            →
                          </motion.div>
                        </UnstyledLink>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
