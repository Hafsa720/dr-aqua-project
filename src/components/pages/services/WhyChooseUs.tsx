'use client';

import React from 'react';

import { motion } from '@/components/MotionWrapper';
import SectionGradient from '@/components/ui/SectionGradient';

interface WhyChooseUsItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsItem[];
}

export default function WhyChooseUs({ whyChooseUs }: WhyChooseUsProps) {
  return (
    <SectionGradient variant='secondary' className='py-32'>
      <div className='layout'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            Why Choose
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              RapidBizz
            </span>
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            We combine expertise, innovation, and dedication to deliver
            exceptional results for every project.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className='bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6'>
                <reason.icon className='w-8 h-8 text-white' />
              </div>

              <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                {reason.title}
              </h3>

              <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionGradient>
  );
}
