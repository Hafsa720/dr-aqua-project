'use client';

import {
  FaAward,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaPaintBrush,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import {
  HiCode,
  HiCube,
  HiGlobeAlt,
  HiHeart,
  HiLightningBolt,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';

import PersonCard from '@/components/cards/PersonCard';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import teamContent from '@/content/team/en/content.json';
import teamData from '@/content/team/en/data.json';
import { createStatsConfig } from '@/lib/section-configs';
import type { CompanyValue, TeamMember } from '@/types';

const TeamPage = () => {
  // Icon mapping for team member role icons
  const roleIconMap = {
    FaBriefcase,
    FaShieldAlt,
    FaCode,
    FaLaptopCode,
    FaPaintBrush,
    HiCode,
  };

  // Convert team members with icon mapping
  const teamMembersWithIcons = teamData.teamMembers.map((member: any) => ({
    ...member,
    roleIcon:
      roleIconMap[member.roleIcon as keyof typeof roleIconMap] || FaRocket,
  })) as TeamMember[];

  // Icon mapping for values
  const valueIconMap = {
    HiLightningBolt,
    FaRocket,
    FaLightbulb,
    HiShieldCheck,
    HiTrendingUp,
    HiHeart,
  };

  // Convert values with icon mapping
  const valuesWithIcons = teamContent.values.items.map((value: any) => ({
    ...value,
    icon: valueIconMap[value.icon as keyof typeof valueIconMap] || HiSparkles,
  })) as CompanyValue[];

  // Use testimonials from centralized content
  const testimonials = teamData.testimonials;

  // Icon mapping for stats (unused but kept for reference)
  const _statsIconMap = {
    FaUsers,
    HiCube,
    FaStar,
    FaAward,
  };

  // Use stats directly with string icons
  const statsWithIcons = teamData.stats;

  // Icon mapping for benefits
  const benefitsIconMap = {
    HiGlobeAlt,
    FaLightbulb,
    HiHeart,
    HiCode,
  };

  // Convert benefits with icon mapping
  const benefitsWithIcons = teamData.benefits.map((benefit: any) => ({
    ...benefit,
    icon:
      benefitsIconMap[benefit.icon as keyof typeof benefitsIconMap] ||
      HiSparkles,
  }));

  return (
    <div className='relative overflow-hidden bg-white'>
      {/* Hero Section - Modern Team Introduction */}
      <section className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden'>
        <div className='layout relative z-10 page-header-spacing'>
          <div className='text-center mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-8'>
                <HiSparkles className='w-4 h-4' />
                <span>{teamContent.hero.subtitle}</span>
              </div>

              <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-8'>
                <span className='text-slate-900'>Meet the</span>
                <br />
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                  Innovators
                </span>
              </h1>

              <p className='text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto'>
                {teamContent.hero.description}
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className='mb-16'>
            <StatsSection
              {...createStatsConfig({
                stats: statsWithIcons,
                title: 'Our Growing Team',
                subtitle:
                  'Building success through talented professionals and proven expertise',
                className: 'py-16',
              })}
            />
          </div>
        </div>
      </section>

      {/* Team Members Section - Modern Card Design */}
      <section className='py-32 bg-white'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
              Our
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Experts
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Each team member brings unique expertise and passion for creating
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembersWithIcons.map((member, index) => (
              <PersonCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section - Modern Icon Grid */}
      <section className='py-32 bg-white'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
              Our
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Values
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              The core principles that guide our work, shape our culture, and
              define how we build lasting relationships.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {valuesWithIcons.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='group'
              >
                <div
                  className={`${value.bg} p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-200 h-full`}
                >
                  <div
                    className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-200`}
                  >
                    {value.icon && (
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    )}
                  </div>

                  <h3 className='text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                    {value.title}
                  </h3>

                  <p className='text-slate-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className='py-32 bg-gradient-to-br from-slate-50 to-purple-50/30'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
              Why Join
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                RapidBizz
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              We offer more than just a job - we provide a platform for growth,
              innovation, and making a real impact.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {benefitsWithIcons.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='text-center group'
              >
                <div className='w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg'>
                  <benefit.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  {benefit.title}
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team Testimonials */}
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
              Ready to Join
              <br />
              Our Mission?
            </h2>
            <p className='text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
              We're always looking for talented individuals who share our
              passion for innovation and excellence.
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
                  className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-lg'
                >
                  Get In Touch
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
                  Get in Touch
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
