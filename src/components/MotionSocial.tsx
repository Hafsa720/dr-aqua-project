import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { getMotionConfig,useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface PropsSocial {
  title: React.ReactNode;
  href: string;
  classes: string;
  background: string;
  iconSize?: number;
  hoverColor?: string;
  ariaLabel?: string;
}

const MotionSocial: FC<PropsSocial> = ({
  title,
  href,
  classes,
  background,
  iconSize = 20,
  hoverColor,
  ariaLabel,
}: PropsSocial) => {
  const prefersReducedMotion = useReducedMotion();

  // Define hover colors directly to ensure Tailwind includes them
  const getHoverColor = () => {
    if (hoverColor?.includes('green'))
      return 'hover:text-green-500 dark:hover:text-green-400';
    if (hoverColor?.includes('blue-8'))
      return 'hover:text-blue-800 dark:hover:text-blue-700';
    if (hoverColor?.includes('blue-6'))
      return 'hover:text-blue-600 dark:hover:text-blue-500';
    if (hoverColor?.includes('blue-5'))
      return 'hover:text-blue-500 dark:hover:text-blue-400';
    if (hoverColor?.includes('pink'))
      return 'hover:text-pink-500 dark:hover:text-pink-400';
    if (hoverColor?.includes('sky'))
      return 'hover:text-sky-400 dark:hover:text-sky-300';
    if (hoverColor?.includes('red'))
      return 'hover:text-red-600 dark:hover:text-red-500';
    if (hoverColor?.includes('gray'))
      return 'hover:text-gray-800 dark:hover:text-gray-600';
    return hoverColor || '';
  };

  const linkMotionProps = getMotionConfig(
    {
      whileHover: 'visible',
      initial: 'hidden',
    },
    prefersReducedMotion
  );

  const underlineMotionProps = getMotionConfig(
    {
      variants: {
        hidden: {
          opacity: 0,
          y: 2,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      },
      transition: {
        damping: 2,
        mass: 3,
      },
    },
    prefersReducedMotion
  );

  return (
    <motion.a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`relative inline-flex items-center justify-center ${classes} ${getHoverColor()}`}
      {...linkMotionProps}
      aria-label={ariaLabel}
    >
      <span className='relative z-10'>{title}</span>
      <motion.span
        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 ${background} h-0.5 rounded`}
        style={{ width: `${iconSize}px` }}
        {...underlineMotionProps}
      />
    </motion.a>
  );
};

export default MotionSocial;
