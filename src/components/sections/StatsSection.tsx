'use client';

import React from 'react';
import { FaAward, FaGlobe, FaHeart, FaStar, FaUsers } from 'react-icons/fa';
import {
  HiCube,
  HiLightBulb,
  HiLightningBolt,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';

import { motion } from '@/components/MotionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientBadge from '@/components/ui/GradientBadge';
import { MOTION_VARIANTS } from '@/lib/motion-variants';
import { SECTION_GRADIENT_COLORS } from '@/lib/section-configs';

// Icon resolver to fix hydration errors
const iconMap = {
  HiSparkles,
  HiLightBulb,
  HiTrendingUp,
  HiShieldCheck,
  HiCube,
  HiLightningBolt,
  FaStar,
  FaHeart,
  FaUsers,
  FaGlobe,
  FaAward,
} as const;

const IconComponent = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const IconElement = iconMap[name as keyof typeof iconMap];
  return IconElement ? <IconElement className={className} /> : null;
};

interface Stat {
  number: string;
  label: string;
  icon: string; // Changed to string to fix hydration errors
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  gradientColors?: {
    primary: string;
    secondary: string;
  };
  className?: string;
}

export default function StatsSection({
  stats,
  title,
  subtitle,
  gradientColors = {
    primary: SECTION_GRADIENT_COLORS.primary.primary,
    secondary: SECTION_GRADIENT_COLORS.primary.secondary,
  },
  className = '',
}: StatsSectionProps) {
  return (
    <div className={`relative py-24 overflow-hidden ${className}`}>
      <div className='layout relative z-10'>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center mb-20'
          >
            {title && (
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className='text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight'
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Compact Stats Grid with SVG Character */}
        <div className='relative'>
          {/* Decorative SVG Elements */}
          <div className='absolute -top-12 -left-12 opacity-10 text-primary-500'>
            <svg
              width='120'
              height='120'
              viewBox='0 0 120 120'
              className='animate-spin'
              style={{ animationDuration: '20s' }}
            >
              <defs>
                <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop
                    offset='0%'
                    stopColor='currentColor'
                    stopOpacity='0.6'
                  />
                  <stop
                    offset='100%'
                    stopColor='currentColor'
                    stopOpacity='0.1'
                  />
                </linearGradient>
              </defs>
              <circle
                cx='60'
                cy='60'
                r='50'
                fill='none'
                stroke='url(#grad1)'
                strokeWidth='2'
              />
              <circle
                cx='60'
                cy='60'
                r='30'
                fill='none'
                stroke='url(#grad1)'
                strokeWidth='1'
              />
              <circle cx='60' cy='60' r='10' fill='url(#grad1)' />
            </svg>
          </div>

          <div className='absolute -bottom-8 -right-8 opacity-10 text-secondary-500'>
            <svg
              width='80'
              height='80'
              viewBox='0 0 80 80'
              className='animate-bounce'
              style={{ animationDuration: '3s' }}
            >
              <polygon
                points='40,10 60,30 40,50 20,30'
                fill='currentColor'
                opacity='0.3'
              />
              <polygon
                points='40,30 50,40 40,50 30,40'
                fill='currentColor'
                opacity='0.6'
              />
              <circle cx='40' cy='40' r='3' fill='currentColor' />
            </svg>
          </div>

          <motion.div
            variants={MOTION_VARIANTS.staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={MOTION_VARIANTS.statsBadge}
                whileHover='hover'
                className='group cursor-pointer'
              >
                {/* Compact Card Design */}
                <div className='relative p-6 bg-gradient-to-br from-slate-200/60 via-white/80 to-slate-100/60 dark:from-white/8 dark:via-white/12 dark:to-white/8 backdrop-blur-lg rounded-2xl border border-slate-300/30 dark:border-white/15 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] transition-all duration-400 overflow-hidden'>
                  {/* Subtle background pattern */}
                  <div className='absolute inset-0 opacity-5'>
                    <svg width='100%' height='100%' viewBox='0 0 40 40'>
                      <defs>
                        <pattern
                          id={`pattern-${index}`}
                          x='0'
                          y='0'
                          width='40'
                          height='40'
                          patternUnits='userSpaceOnUse'
                        >
                          <circle cx='20' cy='20' r='1' fill='currentColor' />
                        </pattern>
                      </defs>
                      <rect
                        width='100%'
                        height='100%'
                        fill={`url(#pattern-${index})`}
                      />
                    </svg>
                  </div>

                  {/* Icon Badge */}
                  <div className='relative mb-4 flex justify-center'>
                    <GradientBadge
                      gradientColors={gradientColors}
                      variant='rounded'
                      size='lg'
                      showGlow={true}
                      showParticles={true}
                      className='transform group-hover:scale-105 transition-transform duration-400'
                    >
                      <IconComponent
                        name={stat.icon}
                        className='w-7 h-7 text-white'
                      />
                    </GradientBadge>
                  </div>

                  {/* Counter */}
                  <div className='text-center'>
                    <motion.div
                      className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors duration-300'
                      whileHover={{
                        scale: 1.02,
                        textShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
                      }}
                    >
                      <AnimatedCounter value={stat.number} duration={2.5} />
                    </motion.div>

                    {/* Label */}
                    <div className='text-slate-600 dark:text-slate-400 font-medium text-sm group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300'>
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className='absolute top-3 right-3 w-1.5 h-1.5 bg-primary-400/60 rounded-full group-hover:bg-primary-400 group-hover:scale-125 transition-all duration-300'></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating SVG Elements */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          {/* Top right floating hexagon */}
          <motion.div
            className='absolute top-1/4 right-16 opacity-8 text-cyan-400'
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width='60' height='60' viewBox='0 0 60 60'>
              <polygon
                points='30,5 50,18 50,42 30,55 10,42 10,18'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                opacity='0.6'
              />
              <polygon
                points='30,15 40,22 40,38 30,45 20,38 20,22'
                fill='currentColor'
                opacity='0.2'
              />
            </svg>
          </motion.div>

          {/* Bottom left floating triangle */}
          <motion.div
            className='absolute bottom-1/3 left-20 opacity-8 text-purple-400'
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width='50' height='50' viewBox='0 0 50 50'>
              <polygon
                points='25,8 42,38 8,38'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                opacity='0.5'
              />
              <circle cx='25' cy='28' r='6' fill='currentColor' opacity='0.3' />
            </svg>
          </motion.div>

          {/* Center floating wave */}
          <motion.div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-6 text-indigo-400'
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width='100' height='100' viewBox='0 0 100 100'>
              <path
                d='M20,50 Q35,25 50,50 T80,50'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                opacity='0.4'
              />
              <path
                d='M20,40 Q35,15 50,40 T80,40'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
                opacity='0.3'
              />
              <path
                d='M20,60 Q35,35 50,60 T80,60'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
                opacity='0.3'
              />
            </svg>
          </motion.div>
        </div>

        {/* Bottom accent line with SVG */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className='flex justify-center items-center mt-16 gap-4'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='text-primary-400 opacity-60'
          >
            <circle cx='12' cy='12' r='3' fill='currentColor' />
            <path
              d='M12 1v6m0 8v6m11-7h-6m-8 0H1'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
          <div className='w-24 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-60'></div>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='text-secondary-400 opacity-60'
          >
            <polygon points='12,2 22,20 2,20' fill='currentColor' />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
