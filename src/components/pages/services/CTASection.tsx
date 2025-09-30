'use client';

import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';
import SectionGradient from '@/components/ui/SectionGradient';

export default function CTASection() {
  return (
    <>
      <SectionGradient variant='cta' className='py-32'>
        {/* Secondary overlay with pattern */}
        <div className='absolute inset-0 bg-gradient-to-br  via-transparent '></div>
        <div className='layout relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center text-white'
          >
            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              Ready to Transform
              <br />
              Your Business?
            </h2>
            <p className='text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
              Let's discuss your project and create a custom solution that
              drives results and exceeds expectations.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLink
                  href='/contact'
                  as={ButtonLink}
                  size='lg'
                  className='bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-colors duration-200'
                >
                  Start Your Project
                </ArrowLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonLink
                  href='/projects'
                  variant='outline'
                  size='lg'
                  className='border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold'
                >
                  View Portfolio
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionGradient>
    </>
  );
}
