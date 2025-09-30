'use client';

import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

import { motion } from '@/components/MotionWrapper';
import SectionGradient from '@/components/ui/SectionGradient';
import type { Service } from '@/types';

interface ServicesGridProps {
  detailedServices: Service[];
  onViewDetails: (service: Service, origin: { x: number; y: number }) => void;
  onGetQuote: (service: Service) => void;
}

export default function ServicesGrid({
  detailedServices,
  onViewDetails,
  onGetQuote,
}: ServicesGridProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionGradient
      variant='neutral'
      className='py-32 bg-white dark:bg-slate-900'
    >
      <div className='layout'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            Comprehensive
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              Solutions
            </span>
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Explore our full range of services designed to meet your unique
            business needs and drive exceptional results.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              animate={{
                opacity:
                  hoveredCard !== null && hoveredCard !== index ? 0.4 : 1,
                scale: hoveredCard !== null && hoveredCard !== index ? 0.98 : 1,
                filter:
                  hoveredCard !== null && hoveredCard !== index
                    ? 'blur(2px)'
                    : 'blur(0px)',
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className='group cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                // Capture click coordinates relative to viewport
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                onViewDetails(service, { x: centerX, y: centerY });
              }}
            >
              <motion.div className='bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 h-full flex flex-col'>
                {/* Header */}
                <div className='mb-6'>
                  <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>

                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {service.title}
                  </h3>

                  <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                {/* Key Features */}
                {service.features && (
                  <div className='mb-6'>
                    <div className='grid grid-cols-1 gap-3'>
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className='flex items-center gap-3'>
                          <FaCheck className='w-4 h-4 text-green-500 flex-shrink-0' />
                          <span className='text-slate-700 dark:text-slate-300 text-sm font-medium'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {service.technologies && (
                  <div className='mb-6'>
                    <div className='flex flex-wrap gap-2'>
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing & Timeline */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl'>
                    <div className='text-lg font-bold text-green-600 dark:text-green-400 mb-1'>
                      {service.startingPrice}
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-xs'>
                      Starting at
                    </div>
                  </div>
                  <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl'>
                    <div className='text-lg font-bold text-blue-600 dark:text-blue-400 mb-1'>
                      {service.deliveryTime}
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-xs'>
                      Delivery
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl mb-6'>
                  <div className='flex mb-2'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className='w-3 h-3 text-yellow-400' />
                    ))}
                  </div>
                  <blockquote className='text-slate-700 dark:text-slate-300 text-sm italic mb-2'>
                    "{service.testimonial?.content}"
                  </blockquote>
                  <div className='text-xs font-medium text-slate-900 dark:text-white'>
                    —{' '}
                    {service.testimonial?.author ||
                      `${service.testimonial?.name}, ${service.testimonial?.role}`}
                  </div>
                </div>

                <div className='mt-auto pt-4 flex gap-3'>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Capture click coordinates for smooth animation
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      onViewDetails(service, { x: centerX, y: centerY });
                    }}
                    className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden'
                  >
                    <span className='relative z-10'>View Details</span>
                    <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10' />
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onGetQuote(service);
                    }}
                    className='px-4 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl font-semibold transition-all duration-300'
                  >
                    Quote
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionGradient>
  );
}
