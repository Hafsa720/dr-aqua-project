'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { useLanguage } from '@/contexts/LanguageContext';

import footerContentEn from '@/content/common/en/footer.json';
import footerContentUr from '@/content/common/ur/footer.json';

const iconMap = {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
};

const Footer = () => {
  const { language } = useLanguage();
  const [footerContent, setFooterContent] = useState(footerContentEn);

  // Update content when language changes
  useEffect(() => {
    if (language === 'ur') {
      setFooterContent(footerContentUr);
    } else {
      setFooterContent(footerContentEn);
    }
  }, [language]);

  // Convert social links with string icons to React component icons
  const socialLinksWithIcons = footerContent.socialLinks.map((social) => ({
    ...social,
    icon: iconMap[social.icon as keyof typeof iconMap],
  }));

  return (
    <footer className='bg-gradient-to-br from-primary-900 via-primary-950 to-gray-950 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl -translate-x-48 -translate-y-48' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl translate-x-48 translate-y-48' />
      </div>

      <div className='layout py-16 relative z-10'>
        {/* Main Footer Content */}
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2 sm:col-span-2'>
            <div className='flex justify-start mb-6'>
              <NextImage
                src='/logo.svg'
                alt='Starter Template Logo'
                width={120}
                height={48}
                className='object-contain'
              />
            </div>

            {/* Social Links */}
            <div>
              <h3 className='font-semibold mb-4 text-white'>Follow Us</h3>
              <div className='flex flex-wrap gap-3'>
                {socialLinksWithIcons.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className='text-primary-300 p-3 bg-primary-800/50 hover:bg-primary-800 hover:text-secondary-400 rounded-xl transition-all duration-200 focus-ring touch-feedback'
                    aria-label={`Follow us on ${social.name}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-6 text-white'>Quick Links</h3>
            <ul className='space-y-3'>
              {footerContent.quickLinks.map((link) => (
                <li key={link.name}>
                  <ArrowLink
                    href={link.href}
                    className='text-primary-200 hover:text-secondary-400 transition-all duration-200 text-sm focus-ring'
                  >
                    {link.name}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='font-semibold mb-6 text-white'>Resources</h3>
            <ul className='space-y-3'>
              {footerContent.resources.map((resource) => (
                <li key={resource.name}>
                  <ArrowLink
                    href={resource.href}
                    className='text-gray-300 hover:text-white transition-smooth text-sm focus-ring'
                  >
                    {resource.name}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-semibold mb-6 text-white'>Legal</h3>
            <ul className='space-y-3'>
              {footerContent.legal.map((item) => (
                <li key={item.name}>
                  <ArrowLink
                    href={item.href}
                    className='text-gray-300 hover:text-white transition-smooth text-sm focus-ring'
                  >
                    {item.name}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-semibold mb-6 text-white'>Get in Touch</h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 bg-secondary-500/20 rounded-lg mt-0.5 flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-secondary-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-gray-300 text-sm'>Email</p>
                  <UnstyledLink
                    href={footerContent.contact.email.href}
                    className='text-white font-medium break-words hover:text-secondary-300 transition-smooth focus-ring touch-feedback text-sm'
                  >
                    {footerContent.contact.email.label}
                  </UnstyledLink>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 bg-secondary-500/20 rounded-lg mt-0.5 flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-secondary-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-gray-300 text-sm'>Phone</p>
                  <UnstyledLink
                    href={footerContent.contact.phone.href}
                    className='text-white font-medium hover:text-secondary-300 transition-smooth focus-ring touch-feedback text-sm whitespace-nowrap'
                  >
                    {footerContent.contact.phone.label}
                  </UnstyledLink>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex items-center justify-center w-8 h-8 bg-secondary-500/20 rounded-lg mt-0.5 flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-secondary-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-gray-300 text-sm'>Location</p>
                  <UnstyledLink
                    href={footerContent.contact.location.href}
                    className='text-white font-medium hover:text-secondary-300 transition-smooth focus-ring touch-feedback text-sm break-words'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {footerContent.contact.location.label}
                  </UnstyledLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Starter Template. All rights
              reserved.
            </p>
            <div className='hidden md:flex items-center gap-1 text-xs text-gray-500'>
              <span>Built with</span>
              <FaHeart className='text-red-400 text-xs animate-pulse' />
              <span>and modern technologies</span>
              <span className='text-gray-600'>•</span>
              <UnstyledLink
                href='/changelog'
                className='text-gray-500 hover:text-white transition-smooth underline-offset-2 hover:underline font-medium focus-ring touch-feedback'
                title='View changelog and version history'
              >
                v1.0.0
              </UnstyledLink>
            </div>
            {/* Mobile version - show just version */}
            <div className='md:hidden'>
              <UnstyledLink
                href='/changelog'
                className='text-gray-500 hover:text-white transition-smooth underline-offset-2 hover:underline font-medium text-xs focus-ring touch-feedback'
                title='View changelog and version history'
              >
                v1.0.0
              </UnstyledLink>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-gray-400 hover:text-white transition-smooth text-sm cursor-pointer focus-ring touch-feedback'
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
