'use client';

import { useState } from 'react';
import {
  FaArrowRight,
  FaBrain,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCode,
  FaDollarSign,
  FaDumbbell,
  FaGlobe,
  FaGraduationCap,
  FaHeart,
  FaLaptop,
  FaMapMarkerAlt,
  FaPlane,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import {
  HiColorSwatch,
  HiDesktopComputer,
  HiLightningBolt,
  HiShieldCheck,
  HiSparkles,
} from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { AnimatePresence, motion } from '@/components/MotionWrapper';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import careersContent from '@/content/careers/en/content.json';
import careersData from '@/content/careers/en/data.json';
import { createStatsConfig } from '@/lib/section-configs';
import type { Benefit, Job } from '@/types';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // Icon mapping for benefits
  const benefitsIconMap = {
    FaLaptop,
    FaGraduationCap,
    FaDumbbell,
    FaRocket,
    FaShieldAlt,
    FaPlane,
    FaUsers,
    FaHeart,
  };

  // Icon mapping for stats (unused but kept for reference)
  const _statsIconMap = {
    FaStar,
    FaHeart,
    FaUsers,
    FaGlobe,
  };

  // Icon mapping for perks
  const perksIconMap = {
    FaClock,
    FaGlobe,
    FaBrain,
    FaCode,
  };

  // Convert data with icon mapping
  const benefits = careersData.benefits.map((benefit: any) => ({
    ...benefit,
    icon:
      benefitsIconMap[benefit.icon as keyof typeof benefitsIconMap] || FaLaptop,
  })) as Benefit[];

  const stats = careersData.stats;

  const perks = careersData.perks.map((perk: any) => ({
    ...perk,
    icon: perksIconMap[perk.icon as keyof typeof perksIconMap] || FaClock,
  }));

  const testimonials = careersData.testimonials;
  const jobs: Job[] = careersData.openPositions.map((job: any) => ({
    id: job.id,
    title: job.title,
    location: job.location,
    type: job.type,
    seniority: job.level,
    salary: `${job.salary.currency} ${job.salary.min}k - ${job.salary.max}k`,
    icon: getJobIcon(job.department),
    gradient: getJobGradient(job.department),
    overview: job.summary,
    responsibilities: job.responsibilities,
    requirements: job.requirements.essential,
    niceToHave: job.requirements.preferred,
  }));

  function getJobIcon(department: string) {
    const iconMap = {
      Engineering: HiDesktopComputer,
      Design: HiColorSwatch,
      Marketing: HiSparkles,
    };
    return iconMap[department as keyof typeof iconMap] || HiDesktopComputer;
  }

  function getJobGradient(department: string) {
    const gradientMap = {
      Engineering: 'from-blue-500 to-indigo-600',
      Design: 'from-purple-500 to-pink-600',
      Marketing: 'from-green-500 to-teal-600',
    };
    return (
      gradientMap[department as keyof typeof gradientMap] ||
      'from-blue-500 to-indigo-600'
    );
  }

  return (
    <div className='relative overflow-hidden bg-white dark:bg-slate-900'>
      {/* Hero Section - Modern Career Landing */}
      <section className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 overflow-hidden'>
        {/* Static Background Elements */}
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl' />
        </div>

        <div className='layout relative z-10 page-header-spacing mb-16'>
          <div className='text-center mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-8'>
                <FaRocket className='w-4 h-4' />
                <span>{careersContent.hero.subtitle}</span>
              </div>

              <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-8'>
                <span className='text-slate-900 dark:text-white'>Join Our</span>
                <br />
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                  Dream Team
                </span>
              </h1>

              <p className='text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto'>
                {careersContent.hero.description}
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className='mb-16'>
            <StatsSection
              {...createStatsConfig({
                stats,
                title: careersContent.whyJoinUs.title,
                subtitle: careersContent.whyJoinUs.description,
                className: 'py-16',
              })}
            />
          </div>

          {/* Quick Perks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='grid md:grid-cols-4 gap-6 max-w-4xl mx-auto'
          >
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className='bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:shadow-xl transition-all duration-300'
              >
                <div className='w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <perk.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  {perk.title}
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section - Modern Job Cards */}
      <section className='py-32 bg-white dark:bg-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              {careersContent.openPositions.title.split(' ')[0]}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                {careersContent.openPositions.title
                  .split(' ')
                  .slice(1)
                  .join(' ')}
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              {careersContent.openPositions.description}
            </p>
          </motion.div>

          <div className='space-y-8'>
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden'
              >
                {/* Job Header */}
                <div className='p-8'>
                  <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
                    <div className='flex items-center gap-6'>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${job.gradient} flex items-center justify-center shadow-lg`}
                      >
                        {job.icon && (
                          <job.icon className='w-8 h-8 text-white' />
                        )}
                      </div>
                      <div>
                        <h3 className='text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2'>
                          {job.title}
                        </h3>
                        <div className='flex flex-wrap gap-4 text-sm'>
                          <span className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
                            <FaMapMarkerAlt className='w-4 h-4' />{' '}
                            {job.location}
                          </span>
                          <span className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
                            <FaClock className='w-4 h-4' /> {job.type}
                          </span>
                          <span className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
                            <FaDollarSign className='w-4 h-4' /> {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3'>
                      <span
                        className={`px-4 py-2 bg-gradient-to-r ${job.gradient} text-white rounded-full text-sm font-medium shadow-lg`}
                      >
                        {job.seniority}
                      </span>
                      <Button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        variant='outline'
                        size='base'
                        className='flex items-center gap-2'
                      >
                        {selectedJob === job.id ? (
                          <>
                            Hide Details <FaChevronUp className='w-4 h-4' />
                          </>
                        ) : (
                          <>
                            View Details <FaChevronDown className='w-4 h-4' />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <p className='text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed'>
                    {job.overview}
                  </p>
                </div>

                {/* Job Details - Expandable */}
                <AnimatePresence>
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className='border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50'
                    >
                      <div className='p-8'>
                        <div className='grid lg:grid-cols-2 gap-12'>
                          {/* Left Column */}
                          <div className='space-y-8'>
                            {/* Responsibilities */}
                            <div>
                              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2'>
                                <FaRocket className='w-5 h-5 text-blue-500' />
                                Key Responsibilities
                              </h4>
                              <ul className='space-y-3'>
                                {job.responsibilities.map((resp, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className='flex items-start gap-3'
                                  >
                                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                                    <span className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                                      {resp}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Nice to Have */}
                            <div>
                              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2'>
                                <FaRocket className='w-5 h-5 text-green-500' />
                                Nice to Have
                              </h4>
                              <ul className='space-y-3'>
                                {job.niceToHave.map((nice, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className='flex items-start gap-3'
                                  >
                                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                                    <span className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                                      {nice}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className='space-y-8'>
                            {/* Requirements */}
                            <div>
                              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2'>
                                <HiShieldCheck className='w-5 h-5 text-orange-500' />
                                Requirements
                              </h4>
                              <ul className='space-y-3'>
                                {job.requirements.map((req, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className='flex items-start gap-3'
                                  >
                                    <div className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
                                    <span className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                                      {req}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Application Process */}
                            <div className='bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg'>
                              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2'>
                                <HiLightningBolt className='w-5 h-5 text-purple-500' />
                                Application Process
                              </h4>
                              <ol className='space-y-3'>
                                {[
                                  'Submit your application and portfolio',
                                  'Initial screening call (30 minutes)',
                                  'Technical interview (1 hour)',
                                  'Team fit interview (45 minutes)',
                                  'Final decision within 1 week',
                                ].map((step, idx) => (
                                  <li
                                    key={idx}
                                    className='flex items-center gap-3'
                                  >
                                    <div className='w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                                      {idx + 1}
                                    </div>
                                    <span className='text-slate-700 dark:text-slate-300'>
                                      {step}
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ArrowLink
                              href='/contact'
                              as={ButtonLink}
                              className={`bg-gradient-to-r ${job.gradient} text-white px-8 py-4 rounded-2xl font-semibold shadow-lg inline-flex items-center gap-2`}
                            >
                              Apply Now
                              <FaArrowRight className='w-4 h-4' />
                            </ArrowLink>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ButtonLink
                              href='/contact'
                              variant='outline'
                              className='px-8 py-4 rounded-2xl font-semibold'
                            >
                              Ask Questions
                            </ButtonLink>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className='py-32 bg-white dark:bg-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              {careersContent.benefits.title.split(' ')[0]}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                {careersContent.benefits.title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              {careersContent.benefits.description}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='group'
              >
                <div
                  className={`${benefit.bg} backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 h-full text-center`}
                >
                  <div
                    className={`w-16 h-16 mx-auto ${benefit.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-200 dark:border-slate-600`}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>

                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {benefit.label}
                  </h3>

                  <p className='text-slate-600 dark:text-slate-300 leading-relaxed text-sm'>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className='py-32 bg-white dark:bg-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              What Our Team
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Says
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              {careersContent.testimonials.description}
            </p>
          </motion.div>

          <TestimonialsCarousel
            testimonials={testimonials}
            colorScheme='blue'
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='layout relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center text-white'
          >
            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              {careersContent.cta.title}
            </h2>
            <p className='text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
              {careersContent.cta.description}
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
                  className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-2xl'
                >
                  {careersContent.cta.button}
                </ArrowLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonLink
                  href='/contact'
                  variant='outline'
                  size='lg'
                  className='border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold'
                >
                  Contact HR
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
