'use client';

import { FaCode, FaDesktop, FaMobile } from 'react-icons/fa';
import {
  HiLightBulb,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';

import ArrowLink from '@/components/links/ArrowLink';
import { motion } from '@/components/MotionWrapper';
import Card3D from '@/components/ui/Card3D';

const iconMap = {
  FaDesktop,
  FaMobile,
  FaCode,
  HiSparkles,
  HiLightBulb,
  HiTrendingUp,
  HiShieldCheck,
};

interface HomeServicesProps {
  content: {
    services: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
        icon: string;
        bgColor: string;
        link?: string;
      }>;
    };
  };
}

const HomeServices: React.FC<HomeServicesProps> = ({ content }) => {
  return (
    <section className='py-32 bg-gradient-to-br from-secondary-100 via-primary-100 to-secondary-200 dark:from-secondary-900/40 dark:via-primary-900/50 dark:to-secondary-800/30'>
      <div className='layout'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            {content.services.title.split(' ')[0]}
            <span className='text-primary-600 dark:text-primary-400'>
              {' '}
              {content.services.title.split(' ')[1]}
            </span>
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            {content.services.description}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {content.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='group'
            >
              <Card3D
                intensity={0.6}
                lightColor='primary-400'
                shadowColor='primary-600'
                enableGlow={true}
                className='h-full'
              >
                <div
                  className={`${service.bgColor} backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full`}
                >
                  <div className='w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    {(() => {
                      const IconComponent =
                        iconMap[service.icon as keyof typeof iconMap];
                      return IconComponent ? (
                        <IconComponent className='w-8 h-8 text-white' />
                      ) : null;
                    })()}
                  </div>

                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                    {service.title}
                  </h3>

                  <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                    {service.description}
                  </p>

                  <ArrowLink
                    href={service.link || '#'}
                    className='inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group-hover:gap-4 transition-all duration-300'
                  >
                    Explore {service.title} Services
                  </ArrowLink>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
