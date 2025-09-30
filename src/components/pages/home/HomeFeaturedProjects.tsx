'use client';

import { FaArrowRight } from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import { motion } from '@/components/MotionWrapper';
import NextImage from '@/components/NextImage';

interface HomeFeaturedProjectsProps {
  content: {
    featuredProjects: {
      title: string;
      description: string;
      projects: Array<{
        title: string;
        description: string;
        image: string;
        tag: string;
        link: string;
        metrics: string;
      }>;
    };
  };
}

const HomeFeaturedProjects: React.FC<HomeFeaturedProjectsProps> = ({
  content,
}) => {
  return (
    <section className='py-32 bg-gradient-to-br from-slate-50 via-primary-100 to-slate-100 dark:from-slate-800 dark:via-primary-900/40 dark:to-slate-900'>
      <div className='layout'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            {content.featuredProjects.title.split(' ')[0]}
            <span className='text-primary-600 dark:text-primary-400'>
              {' '}
              {content.featuredProjects.title.split(' ')[1]}
            </span>
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            {content.featuredProjects.description}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {content.featuredProjects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className='group cursor-pointer'
            >
              <div className='bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500'>
                <div className='relative overflow-hidden'>
                  <NextImage
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300'>
                      {project.tag}
                    </span>
                  </div>
                  <div className='absolute top-4 right-4'>
                    <div className='w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <FaArrowRight className='w-4 h-4 text-white' />
                    </div>
                  </div>
                </div>

                <div className='p-8'>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex items-center justify-between'>
                    <ArrowLink
                      href={project.link}
                      className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold'
                    >
                      View Project
                    </ArrowLink>
                    <span className='text-sm font-medium text-green-600 dark:text-green-400'>
                      {project.metrics}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
