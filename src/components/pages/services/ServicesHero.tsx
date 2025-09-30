'use client';

import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

import { AnimatePresence, motion } from '@/components/MotionWrapper';
import SectionGradient from '@/components/ui/SectionGradient';
import type { Service } from '@/types';

interface HeroService {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  image: string;
}

interface ServicesHeroProps {
  heroServices: HeroService[];
  detailedServices: Service[];
  onViewDetails: (service: Service, origin: { x: number; y: number }) => void;
  onGetQuote: (service: Service) => void;
}

export default function ServicesHero({
  heroServices,
  detailedServices,
  onViewDetails,
  onGetQuote,
}: ServicesHeroProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <SectionGradient
      variant='hero'
      className='min-h-screen flex items-center justify-center'
    >
      <div className='layout relative z-10 py-20 page-header-spacing'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-8'>
              <HiSparkles className='w-4 h-4' />
              <span>Complete Digital Solutions</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-8'>
              <span className='text-slate-900 dark:text-white'>
                Services That
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                Transform
              </span>
              <br />
              <span className='text-slate-900 dark:text-white'>Businesses</span>
            </h1>

            <p className='text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto'>
              From concept to launch, we provide end-to-end digital solutions
              that drive growth, enhance user experience, and maximize your
              business potential.
            </p>
          </motion.div>
        </div>

        {/* Interactive Service Cards */}
        <div className='grid lg:grid-cols-4 gap-8 mb-16'>
          {heroServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='group cursor-pointer h-full'
              onClick={() => setActiveService(index)}
            >
              <div
                className={`bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 h-full flex flex-col ${
                  activeService === index
                    ? 'border-blue-500 dark:border-blue-400'
                    : 'border-transparent hover:border-blue-200 dark:hover:border-slate-600'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {service.title}
                </h3>

                <p className='text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-4'>
                  {service.description}
                </p>

                <motion.div
                  className='mt-auto'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className='w-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-xl text-center font-semibold text-sm hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all duration-300'>
                    Select Service
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Service Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='max-w-5xl mx-auto mb-20'
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50'
            >
              <div className='grid lg:grid-cols-3 gap-8 items-center'>
                {/* Left: Key Info */}
                <div className='lg:col-span-2'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${heroServices[activeService]?.gradient} flex items-center justify-center`}
                    >
                      {heroServices[activeService] &&
                        React.createElement(heroServices[activeService].icon, {
                          className: 'w-8 h-8 text-white',
                        })}
                    </div>
                    <div>
                      <h3 className='text-3xl font-bold text-slate-900 dark:text-white mb-2'>
                        {heroServices[activeService]?.title}
                      </h3>
                      <p className='text-slate-600 dark:text-slate-300'>
                        {heroServices[activeService]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    {detailedServices
                      .find(
                        (s) => s.title === heroServices[activeService]?.title,
                      )
                      ?.features?.slice(0, 4)
                      .map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className='flex items-center gap-3'
                        >
                          <FaCheck className='w-4 h-4 text-green-500 flex-shrink-0' />
                          <span className='text-slate-700 dark:text-slate-300 text-sm font-medium'>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex flex-wrap gap-4'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        const service = detailedServices.find(
                          (s) => s.title === heroServices[activeService]?.title,
                        );
                        if (service) {
                          // Capture click coordinates for smooth animation
                          const rect = e.currentTarget.getBoundingClientRect();
                          const centerX = rect.left + rect.width / 2;
                          const centerY = rect.top + rect.height / 2;
                          onViewDetails(service, { x: centerX, y: centerY });
                        }
                      }}
                      className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg inline-flex items-center gap-2 group'
                    >
                      View Details
                      <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const service = detailedServices.find(
                          (s) => s.title === heroServices[activeService]?.title,
                        );
                        if (service) {
                          onGetQuote(service);
                        }
                      }}
                      className='border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors'
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>

                {/* Right: Success Metrics */}
                <div className='space-y-6'>
                  <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl'>
                    <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                      {detailedServices.find(
                        (s) => s.title === heroServices[activeService]?.title,
                      )?.startingPrice || '$5,000+'}
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-sm'>
                      Starting Investment
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl'>
                    <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                      {detailedServices.find(
                        (s) => s.title === heroServices[activeService]?.title,
                      )?.deliveryTime || '4-8 weeks'}
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-sm'>
                      Typical Timeline
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl'>
                    <div className='flex items-center gap-2 mb-2'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className='w-4 h-4 text-yellow-400'
                        />
                      ))}
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-sm'>
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionGradient>
  );
}
