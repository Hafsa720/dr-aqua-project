'use client';

import { useState } from 'react';
import { BiInfinite } from 'react-icons/bi';
import {
  FaClock,
  FaDollarSign,
  FaPlay,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

import VideoModal from '@/components/common/VideoModal';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';

interface HomeHeroProps {
  content: {
    hero: {
      title: string;
      titleHighlight: string;
      tagline: string;
      taglineHighlight: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
      watchVideo: string;
      videoUrl?: string;
      badge: {
        text: string;
      };
      stats: {
        projects: string;
        projectsLabel: string;
        rating: string;
        expertise: string;
        expertiseLabel: string;
      };
      process: {
        title: string;
        status: string;
        steps: Array<{
          number: string;
          title: string;
          description: string;
          color: string;
        }>;
        promise: string;
      };
      showcase: {
        image: string;
        alt: string;
        title: string;
        description: string;
      };
    };
  };
}

const HomeHero: React.FC<HomeHeroProps> = ({ content }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { hero } = content;

  return (
    <>
      {/* Hero Section - Bold Modern Design */}
      <section className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-primary-900 dark:to-black overflow-hidden pt-24 sm:pt-28 md:pt-32'>
        {/* Bold Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {/* Large moving gradients */}
          <motion.div
            animate={{
              x: [0, 200, 0],
              y: [0, -150, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute top-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-conic from-primary-500/20 via-secondary-500/15 to-purple-500/20 rounded-full blur-3xl'
          />
          <motion.div
            animate={{
              x: [0, -250, 0],
              y: [0, 200, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-conic from-secondary-500/25 via-primary-500/20 to-cyan-500/15 rounded-full blur-3xl'
          />

          {/* Enhanced Mesh Pattern Background */}
          <div className='absolute inset-0'>
            {/* Base grid pattern */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40'></div>
            {/* Diagonal mesh overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(245,101,101,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-30'></div>
            {/* Dot pattern overlay */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25'></div>
            {/* Large mesh pattern */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_2px,transparent_2px),linear-gradient(90deg,rgba(245,101,101,0.01)_2px,transparent_2px)] bg-[size:200px_200px] opacity-60'></div>
          </div>

          {/* Radial gradient overlay for depth */}
          <div className='absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5 dark:to-black/20'></div>

          {/* Animated mesh lines */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:80px_80px]'
          />
        </div>

        <div className='layout relative z-10 px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='text-center lg:text-left order-1 lg:order-1'
            >
              {/* Bold Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 border border-slate-200/50 dark:border-white/20 shadow-2xl'
              >
                <HiLightningBolt className='w-5 h-5 text-yellow-400' />
                <span>{hero.badge.text}</span>
                <BiInfinite className='w-5 h-5 text-cyan-400' />
              </motion.div>

              {/* Massive Bold Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] mb-6 sm:mb-8 tracking-tight'
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className='block text-slate-900 dark:text-white'
                >
                  {hero.title}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className='block bg-gradient-to-r from-primary-400 via-secondary-400 to-purple-400 bg-clip-text text-transparent'
                >
                  {hero.titleHighlight}
                </motion.span>
              </motion.h1>

              {/* Bold Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className='mb-8 sm:mb-10 lg:mb-12'
              >
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-white/90 mb-3 sm:mb-4'>
                  {hero.tagline}
                </p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent'>
                  {hero.taglineHighlight}
                </p>
                <p className='text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                  {hero.description}
                </p>
              </motion.div>

              {/* Bold Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 justify-center lg:justify-start items-center'
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='group'
                >
                  <ArrowLink
                    href='/contact'
                    as={ButtonLink}
                    variant='primary'
                    size='base'
                    leftIcon={FaRocket}
                    className=' bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl hover:shadow-primary-500/40 border border-white/20 backdrop-blur-sm text-sm sm:text-base md:text-lg whitespace-nowrap group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300'
                  >
                    {hero.ctaPrimary}
                  </ArrowLink>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className='flex items-center gap-4 px-8 py-5 text-slate-800 dark:text-white hover:text-secondary-400 transition-colors group cursor-pointer'
                >
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-200/80 to-slate-100/60 dark:from-white/10 dark:to-white/5 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border border-slate-300/50 dark:border-white/20 group-hover:border-secondary-400/50 transition-all duration-300 flex-shrink-0'>
                    <FaPlay className='w-4 h-4 sm:w-6 sm:h-6 ml-1' />
                  </div>
                  <div className='text-left'>
                    <span className='block font-bold text-lg'>
                      {hero.ctaSecondary}
                    </span>
                    <span className='block text-sm text-slate-500 dark:text-slate-400'>
                      {hero.watchVideo}
                    </span>
                  </div>
                </motion.button>
              </motion.div>

              {/* Bold Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className='grid grid-cols-2 sm:grid-cols-3 gap-6'
              >
                <div className='text-center'>
                  <div className='text-3xl font-black text-slate-900 dark:text-white mb-1'>
                    {hero.stats.projects}
                  </div>
                  <div className='text-sm text-slate-600 dark:text-slate-400 font-medium'>
                    {hero.stats.projectsLabel}
                  </div>
                </div>
                <div className='text-center'>
                  <div className='flex justify-center mb-2'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className='w-5 h-5 text-yellow-400' />
                    ))}
                  </div>
                  <div className='text-sm text-slate-600 dark:text-slate-400 font-medium'>
                    {hero.stats.rating}
                  </div>
                </div>
                <div className='text-center col-span-2 sm:col-span-1'>
                  <div className='text-3xl font-black text-slate-900 dark:text-white mb-1'>
                    {hero.stats.expertise}
                  </div>
                  <div className='text-sm text-slate-600 dark:text-slate-400 font-medium'>
                    {hero.stats.expertiseLabel}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* right visual - Our Process & Promise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative order-2 lg:order-2 mt-8 sm:mt-12 lg:mt-0'
            >
              {/* Main Process Display */}
              <div className='relative z-10'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/10 overflow-hidden'
                >
                  {/* Header */}
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                      <FaRocket className='w-5 h-5 text-orange-400' />
                      <span className='text-white font-bold text-sm'>
                        {hero.process.title}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-orange-400 text-sm font-bold'>
                      <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                      {hero.process.status}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className='space-y-4'>
                    {hero.process.steps.map((step, index) => {
                      const colorMap = {
                        blue: {
                          gradient: 'from-blue-500/10 to-cyan-500/10',
                          border: 'border-blue-500/20',
                          bg: 'bg-blue-500',
                          text: 'text-blue-400',
                        },
                        purple: {
                          gradient: 'from-purple-500/10 to-pink-500/10',
                          border: 'border-purple-500/20',
                          bg: 'bg-purple-500',
                          text: 'text-purple-400',
                        },
                        green: {
                          gradient: 'from-green-500/10 to-emerald-500/10',
                          border: 'border-green-500/20',
                          bg: 'bg-green-500',
                          text: 'text-green-400',
                        },
                        yellow: {
                          gradient: 'from-yellow-500/10 to-orange-500/10',
                          border: 'border-yellow-500/20',
                          bg: 'bg-yellow-500',
                          text: 'text-yellow-400',
                        },
                      };
                      const colors =
                        colorMap[step.color as keyof typeof colorMap];

                      return (
                        <motion.div
                          key={step.number}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7 + index * 0.2,
                          }}
                          className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm rounded-lg p-4 border ${colors.border}`}
                        >
                          <div className='flex items-center gap-3'>
                            <div
                              className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                            >
                              {step.number}
                            </div>
                            <div>
                              <div
                                className={`${colors.text} font-bold text-sm`}
                              >
                                {step.title}
                              </div>
                              <div className='text-slate-300 text-xs'>
                                {step.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Promise */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className='mt-6 pt-4 border-t border-slate-600 text-center'
                  >
                    <div className='text-white font-bold text-lg mb-1'>
                      Our Promise
                    </div>
                    <div className='text-slate-300 text-sm'>
                      {hero.process.promise}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Business Benefits - Client-Focused */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-2xl border border-white/10 z-20'
              >
                <FaDollarSign className='w-5 h-5 lg:w-8 lg:h-8 text-green-400' />
                <div className='text-[10px] lg:text-xs text-white font-bold mt-1 lg:mt-2 hidden sm:block'>
                  PROFIT
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [15, 35, 15],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className='absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-2xl border border-white/10 z-5'
              >
                <FaUsers className='w-5 h-5 lg:w-8 lg:h-8 text-blue-400' />
                <div className='text-[10px] lg:text-xs text-white font-bold mt-1 lg:mt-2 hidden sm:block'>
                  CUSTOMERS
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  x: [-30, -10, -30],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className='absolute top-1/4 -left-4 lg:top-1/3 lg:-left-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-2xl border border-white/10 z-5'
              >
                <FaClock className='w-5 h-5 lg:w-8 lg:h-8 text-purple-400' />
                <div className='text-[10px] lg:text-xs text-white font-bold mt-1 lg:mt-2 hidden sm:block'>
                  SPEED
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className='absolute top-1/2 -right-6 lg:-right-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-2xl border border-white/10 z-20'
              >
                <FaShieldAlt className='w-5 h-5 lg:w-8 lg:h-8 text-orange-400' />
                <div className='text-[10px] lg:text-xs text-white font-bold mt-1 lg:mt-2 hidden sm:block'>
                  TRUST
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title='Our Story'
        description='Discover how RapidBizz is transforming the digital landscape, one project at a time.'
        videoUrl={hero.videoUrl}
      />
    </>
  );
};

export default HomeHero;
