'use client';

import React from 'react';

interface SectionGradientProps {
  children: React.ReactNode;
  variant?: 'hero' | 'primary' | 'secondary' | 'accent' | 'cta' | 'neutral';
  className?: string;
}

const gradientVariants = {
  hero: 'bg-gradient-to-br from-slate-50 via-blue-50/70 to-indigo-50/80',
  primary: 'bg-gradient-to-br from-slate-50 via-blue-50/60 to-blue-100/40',
  secondary:
    'bg-gradient-to-br from-slate-50 via-purple-50/60 to-purple-100/40',
  accent: 'bg-gradient-to-br from-blue-50/60 to-indigo-100/60',
  cta: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
  neutral: 'bg-white',
};

/**
 * SectionGradient Component
 *
 * Provides consistent gradient backgrounds for different sections
 *
 * @param children - Content to render inside the gradient section
 * @param variant - Gradient variant (hero, primary, secondary, accent, cta, neutral)
 * @param className - Additional CSS classes
 */
export default function SectionGradient({
  children,
  variant = 'primary',
  className = '',
}: SectionGradientProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Light mode gradient background - completely hidden in dark mode */}
      <div className={`absolute inset-0 ${gradientVariants[variant]}`} />

      {/* Dark mode - CTA variant only gets background */}
      {variant === 'cta' && (
        <div className='absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0' />
      )}
      {/* Animated Background Elements for Hero variant - light mode only */}
      {variant === 'hero' && (
        <div className='absolute inset-0 overflow-hidden opacity-100'>
          <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/15 rounded-full blur-3xl animate-pulse' />
          <div
            className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/15 to-blue-400/20 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: '1s' }}
          />
        </div>
      )}

      {/* Subtle texture overlay for better depth - light mode only */}
      {variant !== 'neutral' && variant !== 'cta' && (
        <div className='absolute inset-0 opacity-[0.08]'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.2) 0%, transparent 25%), 
                                   radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 25%)`,
            }}
          />
        </div>
      )}

      <div className='relative z-10'>{children}</div>
    </section>
  );
}
