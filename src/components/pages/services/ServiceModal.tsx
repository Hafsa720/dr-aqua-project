'use client';

import React from 'react';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

import { AnimatePresence, motion } from '@/components/MotionWrapper';
import type { Service } from '@/types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  modalOrigin: { x: number; y: number };
  onGetQuote: (service: Service) => void;
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
  modalOrigin,
  onGetQuote,
}: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4'
          onClick={onClose}
        >
          {/* Animated Modal with Click-Position Animation */}
          <motion.div
            initial={{
              scale: 0.3,
              opacity: 0,
              x:
                modalOrigin.x -
                (typeof window !== 'undefined' ? window.innerWidth / 2 : 0),
              y:
                modalOrigin.y -
                (typeof window !== 'undefined' ? window.innerHeight / 2 : 0),
              rotate: -2,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              x:
                modalOrigin.x -
                (typeof window !== 'undefined' ? window.innerWidth / 2 : 0),
              y:
                modalOrigin.y -
                (typeof window !== 'undefined' ? window.innerHeight / 2 : 0),
              rotate: 2,
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              mass: 0.8,
              duration: 0.4,
            }}
            className='bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl w-full max-w-4xl shadow-2xl relative'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable Content Container */}
            <div
              className='modal-scrollbar overflow-y-auto'
              style={{
                maxHeight: '95vh',
              }}
            >
              {/* Decorative particles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm z-10'
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm z-10'
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm z-10'
              />

              <motion.div
                className='relative'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Header */}
                <motion.div
                  className='p-4 sm:p-8 border-b border-slate-200 dark:border-slate-700'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <motion.button
                    onClick={onClose}
                    className='absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors group z-10'
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <span className='text-slate-600 dark:text-slate-400 text-xl transition-transform'>
                      ×
                    </span>
                  </motion.button>

                  <motion.div
                    className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.div
                      className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5,
                        type: 'spring',
                        stiffness: 200,
                      }}
                    >
                      {React.createElement(service.icon, {
                        className: 'w-8 h-8 sm:w-10 sm:h-10 text-white',
                      })}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <h2 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2'>
                        {service.title}
                      </h2>
                      <p className='text-base sm:text-lg text-slate-600 dark:text-slate-300'>
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {[
                      {
                        color: 'green',
                        label: 'Starting Price',
                        value: service.startingPrice,
                        bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
                      },
                      {
                        color: 'blue',
                        label: 'Timeline',
                        value: service.deliveryTime,
                        bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
                      },
                      {
                        color: 'purple',
                        label: 'Client Rating',
                        value: null,
                        bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className={`text-center p-4 bg-gradient-to-r ${stat.bg} rounded-xl`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{ y: -2, scale: 1.02 }}
                      >
                        {stat.value ? (
                          <div
                            className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1`}
                          >
                            {stat.value}
                          </div>
                        ) : (
                          <motion.div
                            className='flex justify-center mb-1'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                          >
                            {[1, 2, 3, 4, 5].map((star, starIndex) => (
                              <motion.div
                                key={star}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 1.2 + starIndex * 0.1,
                                  type: 'spring',
                                }}
                              >
                                <FaStar className='w-4 h-4 text-yellow-400' />
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        <div className='text-slate-600 dark:text-slate-400 text-sm'>
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className='p-4 sm:p-8 space-y-6 sm:space-y-8'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {/* Full Features List */}
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                      Complete Feature Set
                    </h3>
                    <div className='grid md:grid-cols-2 gap-4'>
                      {service.features?.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className='flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-xl'
                        >
                          <FaCheck className='w-4 h-4 text-green-500 flex-shrink-0' />
                          <span className='text-slate-700 dark:text-slate-300 font-medium'>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                      Technology Stack
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                      {service.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className='px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl'>
                    <div className='flex mb-4'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className='w-5 h-5 text-yellow-400'
                        />
                      ))}
                    </div>
                    <blockquote className='text-slate-700 dark:text-slate-300 italic text-lg mb-4'>
                      "{service.testimonial?.content}"
                    </blockquote>
                    <div className='font-medium text-slate-900 dark:text-white'>
                      —{' '}
                      {service.testimonial?.author ||
                        `${service.testimonial?.name}, ${service.testimonial?.role}`}
                    </div>
                  </div>

                  {/* Related Projects */}
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                      Recent Projects
                    </h3>
                    <div className='grid md:grid-cols-2 gap-4'>
                      <div className='bg-slate-50 dark:bg-slate-700 p-4 rounded-xl'>
                        <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                          E-commerce Platform
                        </h4>
                        <p className='text-slate-600 dark:text-slate-300 text-sm mb-3'>
                          AI-powered platform with 340% sales increase
                        </p>
                        <button className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1'>
                          View Case Study
                        </button>
                      </div>
                      <div className='bg-slate-50 dark:bg-slate-700 p-4 rounded-xl'>
                        <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                          Healthcare System
                        </h4>
                        <p className='text-slate-600 dark:text-slate-300 text-sm mb-3'>
                          Telemedicine platform serving 50k+ patients
                        </p>
                        <button className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1'>
                          View Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Footer Actions */}
                <motion.div
                  className='p-4 sm:p-8 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <motion.div
                    className='flex flex-col sm:flex-row gap-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    {[
                      {
                        label: 'Start Project',
                        primary: true,
                        action: () => (window.location.href = '/contact'),
                      },
                      {
                        label: 'Request Quote',
                        primary: false,
                        action: () => {
                          onClose();
                          onGetQuote(service);
                        },
                      },
                      {
                        label: 'Schedule Call',
                        primary: false,
                        action: () => (window.location.href = '/contact'),
                      },
                    ].map((button, index) => (
                      <motion.button
                        key={button.label}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 1.5 + index * 0.1,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={button.action}
                        className={`${
                          button.primary
                            ? 'flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2 relative overflow-hidden group'
                            : index === 1
                              ? 'flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 px-8 py-4 rounded-xl font-semibold transition-colors'
                              : 'px-6 py-4 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium transition-colors'
                        }`}
                      >
                        <span className={button.primary ? 'relative z-10' : ''}>
                          {button.label}
                        </span>
                        {button.primary && (
                          <>
                            <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10' />
                            <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                          </>
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
