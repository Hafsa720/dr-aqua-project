'use client';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';

interface HomeCTAProps {
  content: {
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
}

const HomeCTA: React.FC<HomeCTAProps> = ({ content }) => {
  return (
    <section className='py-32 bg-gradient-to-br from-primary-600/95 to-secondary-600/90 relative overflow-hidden'>
      <div className='absolute inset-0 bg-black/10'></div>
      <div className='layout relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center text-white'
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-6'>
            {content.cta.title}
          </h2>
          <p className='text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
            {content.cta.description}
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLink
                href='/contact'
                as={ButtonLink}
                size='base'
                className='bg-white text-primary-600 hover:bg-gray-50 hover:text-primary-700 px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-colors duration-200'
              >
                {content.cta.button}
              </ArrowLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonLink
                href='/projects'
                variant='outline'
                size='base'
                className='border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-2xl font-semibold'
              >
                View Our Work
              </ButtonLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
