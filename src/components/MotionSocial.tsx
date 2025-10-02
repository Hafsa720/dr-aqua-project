'use client';

import React, { FC } from 'react';

import { cn } from '@/lib/utils';

interface PropsSocial {
  title: React.ReactNode;
  href: string;
  classes?: string;
  background?: string;
  iconSize?: number;
  hoverColor?: string;
  ariaLabel?: string;
}

const MotionSocial: FC<PropsSocial> = ({
  title,
  href,
  classes = '',
  background = 'bg-primary-500',
  iconSize = 20,
  hoverColor,
  ariaLabel,
}: PropsSocial) => {
  // Define hover colors with Tailwind classes
  const getHoverColor = () => {
    if (hoverColor?.includes('green'))
      return 'hover:text-green-500';
    if (hoverColor?.includes('blue-8'))
      return 'hover:text-blue-800';
    if (hoverColor?.includes('blue-6'))
      return 'hover:text-blue-600';
    if (hoverColor?.includes('blue-5'))
      return 'hover:text-blue-500';
    if (hoverColor?.includes('pink'))
      return 'hover:text-pink-500';
    if (hoverColor?.includes('sky'))
      return 'hover:text-sky-400';
    if (hoverColor?.includes('red'))
      return 'hover:text-red-600';
    if (hoverColor?.includes('gray'))
      return 'hover:text-gray-800';
    return hoverColor || 'hover:text-primary-400';
  };

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'group relative inline-flex items-center justify-center',
        'transition-all duration-300 ease-out',
        'hover:scale-110 hover:-translate-y-0.5',
        'active:scale-95',
        'focus-ring touch-feedback',
        classes,
        getHoverColor(),
      )}
      aria-label={ariaLabel}
    >
      <span className='relative z-10 transition-transform duration-300 group-hover:scale-105'>
        {title}
      </span>

      {/* Animated underline */}
      <span
        className={cn(
          'absolute bottom-1 left-1/2 -translate-x-1/2',
          background,
          'h-0.5 rounded-full',
          'transition-all duration-300 ease-out',
          'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100',
          'origin-center',
        )}
        style={{ width: `${iconSize}px` }}
        aria-hidden='true'
      />

      {/* Glow effect on hover */}
      <span
        className={cn(
          'absolute inset-0 rounded-xl blur-sm',
          background,
          'opacity-0 group-hover:opacity-20',
          'transition-opacity duration-300',
          'pointer-events-none',
        )}
        aria-hidden='true'
      />
    </a>
  );
};

export default MotionSocial;
