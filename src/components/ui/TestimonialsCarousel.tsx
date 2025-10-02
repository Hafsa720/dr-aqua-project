'use client';

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { AnimatePresence, motion } from '@/components/MotionWrapper';
import NextImage from '@/components/NextImage';

interface Testimonial {
  content: string;
  name?: string;
  author?: string;
  role: string;
  avatar: string;
  rating?: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
  colorScheme?: 'primary' | 'blue' | 'custom';
  className?: string;
}

export default function TestimonialsCarousel({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000,
  colorScheme = 'primary',
  className = '',
}: TestimonialsCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Color scheme configurations
  const colorSchemes = {
    primary: {
      glow: 'from-primary-500/20 via-secondary-500/10 to-primary-500/20',
      decorative1: 'from-primary-500/10 to-secondary-500/10',
      decorative2: 'from-secondary-500/10 to-primary-500/10',
      quotes: 'text-primary-300',
      underline: 'from-primary-500 to-secondary-500',
      activeDot: 'from-primary-500 to-secondary-500',
      dotAnimation: 'from-primary-400 to-secondary-400',
      inactiveDot: 'bg-primary-300/60 group-hover:bg-primary-400/80',
    },
    blue: {
      glow: 'from-blue-500/20 via-purple-500/10 to-blue-500/20',
      decorative1: 'from-blue-500/10 to-purple-500/10',
      decorative2: 'from-purple-500/10 to-blue-500/10',
      quotes: 'text-blue-300',
      underline: 'from-blue-500 to-purple-500',
      activeDot: 'from-blue-500 to-purple-500',
      dotAnimation: 'from-blue-400 to-purple-400',
      inactiveDot: 'bg-blue-300/60 group-hover:bg-blue-400/80',
    },
    custom: {
      glow: 'from-slate-500/20 via-gray-500/10 to-slate-500/20',
      decorative1: 'from-slate-500/10 to-gray-500/10',
      decorative2: 'from-gray-500/10 to-slate-500/10',
      quotes: 'text-slate-300',
      underline: 'from-slate-500 to-gray-500',
      activeDot: 'from-slate-500 to-gray-500',
      dotAnimation: 'from-slate-400 to-gray-400',
      inactiveDot: 'bg-slate-300/60 group-hover:bg-slate-400/80',
    },
  };

  const colors = colorSchemes[colorScheme];

  // Timer management functions
  const startTimer = () => {
    if (!autoRotate || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      handleAutoRotation();
    }, rotateInterval);

    setIntervalId(timer);
    return timer;
  };

  const clearTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    clearTimer();
    startTimer();
  };

  // Handle manual testimonial change
  const handleTestimonialChange = (index: number) => {
    if (index === currentTestimonial) return;

    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    resetTimer(); // Reset the timer when user manually changes testimonial
  };

  // Handle auto rotation
  const handleAutoRotation = () => {
    setDirection(1); // Always forward for auto rotation
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) {
      clearTimer();
      return;
    }

    startTimer();

    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials.length, autoRotate, rotateInterval]);

  if (testimonials.length === 0) {
    return null;
  }

  const displayName =
    testimonials[currentTestimonial]?.name ||
    testimonials[currentTestimonial]?.author;

  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentTestimonial}
          initial={{
            opacity: 0,
            x: direction > 0 ? 100 : -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction > 0 ? -100 : 100,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            mass: 0.6,
          }}
          className='text-center relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col justify-center'
        >
          <div className='bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200 relative overflow-hidden flex-1 flex flex-col justify-center'>
            {/* Stars - simplified */}
            <div className='flex justify-center mb-8'>
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star}>
                  <FaStar className='w-7 h-7 text-yellow-400 mx-1' />
                </div>
              ))}
            </div>

            <motion.blockquote
              className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 mb-8 sm:mb-10 leading-relaxed relative z-10 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className='relative'>
                <span
                  className={`text-4xl sm:text-5xl md:text-6xl ${colors.quotes} absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 font-serif leading-none`}
                >
                  "
                </span>
                <span className='block px-4 sm:px-6 md:px-8'>
                  {testimonials[currentTestimonial]?.content}
                </span>
                <span
                  className={`text-4xl sm:text-5xl md:text-6xl ${colors.quotes} absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-1 sm:-right-2 font-serif leading-none`}
                >
                  "
                </span>
              </div>
            </motion.blockquote>

            <motion.div
              className='flex items-center justify-center gap-4 sm:gap-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                className='relative'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className='w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-white/50 shadow-xl'>
                  <NextImage
                    src={testimonials[currentTestimonial]?.avatar || ''}
                    alt={displayName || ''}
                    width={80}
                    height={80}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white'></div>
              </motion.div>
              <div className='text-left'>
                <motion.div
                  className='font-bold text-slate-900 text-lg sm:text-xl mb-1'
                  whileHover={{ color: '#3b82f6' }}
                  transition={{ duration: 0.2 }}
                >
                  {displayName}
                </motion.div>
                <div className='text-slate-600 text-sm sm:text-base font-medium'>
                  {testimonials[currentTestimonial]?.role}
                </div>
                <motion.div
                  className={`w-12 h-0.5 bg-gradient-to-r ${colors.underline} mt-2 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Navigation Dots */}
          {testimonials.length > 1 && (
            <motion.div
              className='flex justify-center gap-4 mt-12'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`group relative transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-12 h-4'
                      : 'w-4 h-4 hover:w-8'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? `bg-gradient-to-r ${colors.activeDot}`
                        : colors.inactiveDot
                    }`}
                  />
                  {index === currentTestimonial && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${colors.dotAnimation} rounded-full`}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
