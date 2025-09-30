'use client';

import React from 'react';

import { AnimatePresence, motion } from '@/components/MotionWrapper';
import { createGlowVariants, MOTION_VARIANTS } from '@/lib/motion-variants';

interface GradientBadgeProps {
  children: React.ReactNode;
  gradientColors: {
    primary: string;
    secondary: string;
  };
  variant?: 'circle' | 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showGlow?: boolean;
  showParticles?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function GradientBadge({
  children,
  gradientColors,
  variant = 'circle',
  size = 'md',
  showGlow = true,
  showParticles = false,
  className = '',
  onClick,
}: GradientBadgeProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-20 h-20 text-lg',
    xl: 'w-24 h-24 text-xl',
  };

  const variantClasses = {
    circle: 'rounded-full',
    rounded: 'rounded-2xl',
    square: 'rounded-lg',
  };

  const iconGradient = `from-${gradientColors.primary} to-${gradientColors.secondary}`;

  // Use a stable seed-based approach to avoid hydration mismatch
  const [particlesData, setParticlesData] = React.useState<Array<{
    id: number;
    top: number;
    left: number;
    delay: number;
    duration: number;
    scale: number;
  }> | null>(null);

  // Generate random positions only on client-side to avoid hydration mismatch
  React.useEffect(() => {
    const generateRandomParticles = () => {
      return [...Array(8)].map((_, i) => ({
        id: i,
        top: Math.random() * 60 + 15, // Random between 15% and 75%
        left: Math.random() * 60 + 15, // Random between 15% and 75%
        delay: Math.random() * 0.5, // Random delay up to 0.5s
        duration: 1.5 + Math.random() * 1, // Random duration between 1.5s and 2.5s
        scale: 0.5 + Math.random() * 0.5, // Random scale between 0.5 and 1
      }));
    };

    setParticlesData(generateRandomParticles());
  }, []);

  return (
    <div className={`relative perspective-1000 ${className}`}>
      {showGlow && (
        <>
          {/* Outer glow - subtle */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${iconGradient} ${variantClasses[variant]} opacity-4 blur-xl scale-125 group-hover:opacity-20 transition-opacity duration-300`}
            variants={createGlowVariants(`${gradientColors.primary}`, 0.08)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          />

          {/* Medium glow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${iconGradient} ${variantClasses[variant]} opacity-8 blur-lg scale-115 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300`}
            variants={createGlowVariants(`${gradientColors.primary}`, 0.15)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          />

          {/* Inner glow - more pronounced */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${iconGradient} ${variantClasses[variant]} opacity-12 blur-md scale-105 group-hover:opacity-55 group-hover:scale-108 transition-all duration-300`}
            variants={createGlowVariants(`${gradientColors.primary}`, 0.25)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          />
        </>
      )}

      {/* Main badge */}
      <motion.div
        className={`
          relative ${sizeClasses[size]} mx-auto bg-gradient-to-br ${iconGradient} 
          ${variantClasses[variant]} flex items-center justify-center 
          shadow-2xl z-10 border border-white/10 font-bold text-white
          opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-3xl 
          group-hover:saturate-250 group-hover:brightness-130 group-hover:contrast-130 transition-all duration-300
          ${onClick ? 'cursor-pointer' : ''}
        `}
        variants={MOTION_VARIANTS.processBadge}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        onClick={onClick}
      >
        <div className='group-hover:scale-105 group-hover:drop-shadow-lg transition-all duration-300'>
          {children}
        </div>

        {/* Inner glow ring */}
        <div
          className={`absolute inset-1 ${variantClasses[variant]} border border-white/20 group-hover:border-white/30 group-hover:shadow-inner transition-all duration-300`}
        />
      </motion.div>

      {/* Floating particles effect */}
      {showParticles && (
        <AnimatePresence>
          <div className='absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            {particlesData?.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute w-1.5 h-1.5 bg-${gradientColors.secondary} rounded-full shadow-md border border-white/20`}
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.sin(particle.id) * 5, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [
                    particle.scale * 0.5,
                    particle.scale,
                    particle.scale * 0.5,
                  ],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
