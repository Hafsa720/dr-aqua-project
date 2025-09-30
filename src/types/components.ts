// Component-specific types for better type safety

import { type LucideIcon } from 'lucide-react';
import { type IconType } from 'react-icons';

// Button variant types
export const ButtonVariants = [
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
] as const;
export const ButtonSizes = ['sm', 'base', 'lg'] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonSize = (typeof ButtonSizes)[number];

// Icon types
export type IconComponent = IconType | LucideIcon;

// Link variant types
export const LinkVariants = ['primary', 'basic'] as const;
export type LinkVariant = (typeof LinkVariants)[number];

// Image props
export interface NextImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  className?: string;
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
  };
}

// Animation variants for framer-motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const slideDown = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
} as const;

// Common component props
export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}

// Framer motion variant types
export interface MotionVariant {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  whileHover?: Record<string, unknown>;
  whileTap?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

export type WithMotion = MotionVariant & {
  // Add specific motion properties if needed
};
