'use client';

import React from 'react';

import { motion } from '@/components/MotionWrapper';
import GradientBadge from '@/components/ui/GradientBadge';
import { useMobile, useReducedMotion } from '@/hooks/useMediaQuery';
import {
  createProcessStepVariants,
  MOTION_VARIANTS,
} from '@/lib/motion-variants';
import type { ProcessStep } from '@/types';

interface ProcessSectionProps {
  processSteps: ProcessStep[];
  title?: string;
  subtitle?: string;
  gradientColors?: {
    primary: string;
    secondary: string;
  };
  showConnectingLine?: boolean;
  className?: string;
}

export default function ProcessSection({
  processSteps,
  title = 'Our Process',
  subtitle = 'A proven methodology that ensures successful project delivery and exceeds client expectations.',
  gradientColors = {
    primary: 'primary-600',
    secondary: 'purple-600',
  },
  showConnectingLine = true,
  className = '',
}: ProcessSectionProps) {
  const isMobile = useMobile();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative py-24 overflow-hidden ${className}`}>
      <div className='layout relative z-10'>
        <motion.div
          variants={MOTION_VARIANTS.fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.h2
            className='text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight'
            variants={MOTION_VARIANTS.fadeInScale}
          >
            {title.includes(' ') ? (
              <>
                {title.split(' ')[0]}
                <motion.span
                  className='bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent'
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                >
                  {' '}
                  {title.split(' ').slice(1).join(' ')}
                </motion.span>
              </>
            ) : (
              <motion.span
                className='bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent'
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                {title}
              </motion.span>
            )}
          </motion.h2>
          <motion.p
            className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'
            variants={MOTION_VARIANTS.fadeInUp}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Decorative SVG Elements */}
        <div className='absolute -top-16 -right-16 opacity-8 text-primary-500 pointer-events-none'>
          <svg
            width='150'
            height='150'
            viewBox='0 0 150 150'
            className='animate-pulse'
            style={{ animationDuration: '4s' }}
          >
            <circle
              cx='75'
              cy='75'
              r='60'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              opacity='0.3'
            />
            <circle
              cx='75'
              cy='75'
              r='40'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              opacity='0.5'
            />
            <circle cx='75' cy='75' r='20' fill='currentColor' opacity='0.2' />
          </svg>
        </div>

        <div className='absolute -bottom-12 -left-12 opacity-6 text-secondary-500 pointer-events-none'>
          <svg
            width='120'
            height='120'
            viewBox='0 0 120 120'
            className='animate-spin'
            style={{ animationDuration: '30s' }}
          >
            <polygon
              points='60,10 90,35 90,85 60,110 30,85 30,35'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              opacity='0.4'
            />
            <polygon
              points='60,30 75,42 75,78 60,90 45,78 45,42'
              fill='currentColor'
              opacity='0.15'
            />
          </svg>
        </div>

        <div className='relative'>
          {showConnectingLine && (
            <>
              {/* Modern connecting line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className='absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-secondary-500/40 to-primary-500/20 rounded-full hidden lg:block origin-left'
              />

              {/* Glow line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: 'easeOut',
                }}
                className='absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary-500/10 via-secondary-500/20 to-primary-500/10 rounded-full hidden lg:block origin-left blur-sm'
              />

              {/* Mobile connecting dots */}
              <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-8 lg:hidden'>
                {processSteps.map((_, index) => (
                  <motion.div
                    key={`dot-${index}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3, // Reduced from 0.5
                      delay: 0.2 + index * 0.1, // Reduced base delay and interval
                      type: 'spring',
                      stiffness: 400, // Increased for faster animation
                    }}
                    className='w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full'
                    style={{
                      position: 'absolute',
                      top: `${index * 25}vh`,
                    }}
                  />
                ))}
              </div>
            </>
          )}

          <motion.div
            variants={MOTION_VARIANTS.staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={
                  shouldReduceMotion
                    ? MOTION_VARIANTS.mobileProcessStep
                    : createProcessStepVariants(index)
                }
                className='text-center group cursor-pointer touch-manipulation'
                whileHover={
                  !isMobile && !shouldReduceMotion
                    ? {
                        y: -8,
                        transition: {
                          type: 'spring',
                          stiffness: 400,
                          damping: 15,
                        },
                      }
                    : undefined
                }
                whileTap={isMobile ? 'tap' : undefined}
              >
                {/* Modern Card Container */}
                <div className='relative p-6 bg-gradient-to-br from-slate-200/60 via-white/80 to-slate-100/60 dark:from-white/5 dark:via-white/8 dark:to-white/5 backdrop-blur-lg rounded-2xl border border-slate-300/30 dark:border-white/10 shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden h-full'>
                  {/* Subtle pattern overlay */}
                  <div className='absolute inset-0 opacity-5'>
                    <svg width='100%' height='100%' viewBox='0 0 60 60'>
                      <defs>
                        <pattern
                          id={`step-pattern-${index}`}
                          x='0'
                          y='0'
                          width='60'
                          height='60'
                          patternUnits='userSpaceOnUse'
                        >
                          <circle
                            cx='30'
                            cy='30'
                            r='1.5'
                            fill='currentColor'
                            opacity='0.3'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width='100%'
                        height='100%'
                        fill={`url(#step-pattern-${index})`}
                      />
                    </svg>
                  </div>

                  {/* Step Badge */}
                  <motion.div
                    whileHover={
                      !isMobile && !shouldReduceMotion
                        ? {
                            y: -3,
                            scale: 1.05,
                            transition: {
                              type: 'spring',
                              stiffness: 500,
                              damping: 20,
                            },
                          }
                        : undefined
                    }
                    className='relative mb-6'
                  >
                    <GradientBadge
                      gradientColors={gradientColors}
                      variant='circle'
                      size={isMobile ? 'md' : 'lg'}
                      showGlow={!shouldReduceMotion}
                      showParticles={!isMobile && !shouldReduceMotion}
                    >
                      {step.step}
                    </GradientBadge>
                  </motion.div>

                  {/* Step Content */}
                  <div className='relative'>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors duration-300'>
                      {step.label}
                    </h3>

                    <p className='text-slate-600 dark:text-slate-300 leading-relaxed text-sm group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300'>
                      {step.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className='absolute top-4 right-4 w-2 h-2 bg-primary-400/50 rounded-full group-hover:bg-primary-400 group-hover:scale-125 transition-all duration-300'></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
