'use client';

import { motion } from '@/components/MotionWrapper';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';

interface HomeTestimonialsProps {
  content: {
    testimonials: {
      title: string;
      description: string;
      items: Array<{
        name: string;
        role: string;
        content: string;
        rating: number;
        avatar: string;
      }>;
    };
  };
}

const HomeTestimonials: React.FC<HomeTestimonialsProps> = ({ content }) => {
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
            {content.testimonials.title.split(' ')[0]}
            <span className='text-primary-600 dark:text-primary-400'>
              {' '}
              {content.testimonials.title.split(' ')[1]}
            </span>
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            {content.testimonials.description}
          </p>
        </motion.div>

        <TestimonialsCarousel
          testimonials={content.testimonials.items.map((testimonial) => ({
            ...testimonial,
            name: testimonial.name,
          }))}
          colorScheme='primary'
        />
      </div>
    </section>
  );
};

export default HomeTestimonials;
