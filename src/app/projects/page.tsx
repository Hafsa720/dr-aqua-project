'use client';

import { useState } from 'react';
import { FaCheck, FaPlay, FaSearch, FaStar } from 'react-icons/fa';
import {
  HiCube,
  HiLightningBolt,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';

import VideoModal from '@/components/common/VideoModal';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';
import NextImage from '@/components/NextImage';
import StatsSection from '@/components/sections/StatsSection';
import projectsContent from '@/content/projects/en/content.json';
import projectsData from '@/content/projects/en/data.json';
import { createStatsConfig } from '@/lib/section-configs';
import type { Project } from '@/types';

const _iconMap = {
  HiCube,
  HiTrendingUp,
  FaStar,
  HiLightningBolt,
  HiSparkles,
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Use stats directly with string icons
  const stats = projectsContent.stats.items;

  // Use projects data from centralized content
  const projects = projectsData.projects as Project[];
  const categories = projectsContent.filter.categories;

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='relative overflow-hidden bg-white dark:bg-slate-900'>
      {/* Hero Section - Modern Portfolio Landing */}
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
                <HiSparkles className='w-4 h-4' />
                <span>{projectsContent.hero.badge}</span>
              </div>

              <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-8'>
                <span className='text-slate-900 dark:text-white'>
                  Portfolio of
                </span>
                <br />
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                  Excellence
                </span>
              </h1>

              <p className='text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto'>
                {projectsContent.hero.description}
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className='mb-16'>
            <StatsSection
              {...createStatsConfig({
                stats,
                title: projectsContent.stats.title,
                subtitle: projectsContent.stats.description,
                className: 'py-16 ',
              })}
            />
          </div>

          {/* Enhanced Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='max-w-6xl mx-auto'
          >
            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden'>
              {/* Background Pattern */}
              <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl transform -translate-x-16 -translate-y-16'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl transform translate-x-16 translate-y-16'></div>
              </div>

              <div className='relative z-10'>
                {/* Search Section */}
                <div className='mb-8'>
                  <motion.h3
                    className='text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <FaSearch className='w-4 h-4 text-blue-500' />
                    Find Your Perfect Project
                  </motion.h3>

                  <motion.div
                    className='relative group'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all duration-300'></div>
                    <div className='relative bg-slate-50 dark:bg-slate-700/50 rounded-2xl border-2 border-slate-200 dark:border-slate-600 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:bg-white dark:focus-within:bg-slate-600/50 transition-all duration-300'>
                      <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300' />
                      <input
                        type='text'
                        placeholder={projectsContent.filter.searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-full pl-12 pr-4 py-4 bg-transparent focus:outline-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 text-lg'
                      />
                      {searchTerm && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => setSearchTerm('')}
                          className='absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors duration-200'
                        >
                          <span className='text-slate-600 dark:text-slate-300 text-sm'>
                            ×
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Filter Section */}
                <div>
                  <motion.h3
                    className='text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <HiCube className='w-4 h-4 text-purple-500' />
                    {projectsContent.filter.categoryTitle}
                  </motion.h3>

                  <div className='flex flex-wrap gap-3'>
                    {categories.map((category, index) => (
                      <motion.button
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveFilter(category)}
                        className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                          activeFilter === category
                            ? 'text-white shadow-lg'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:shadow-md'
                        }`}
                      >
                        {activeFilter === category && (
                          <motion.div
                            layoutId='activeFilter'
                            className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600'
                            initial={false}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className='relative z-10 flex items-center gap-2'>
                          {category}
                          {activeFilter === category && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className='w-2 h-2 bg-white rounded-full'
                            />
                          )}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Results Summary */}
                <motion.div
                  className='mt-6 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span>
                      {filteredProjects.length} project
                      {filteredProjects.length !== 1 ? 's' : ''} found
                      {activeFilter !== 'All' && ` in ${activeFilter}`}
                      {searchTerm && ` matching "${searchTerm}"`}
                    </span>
                  </div>

                  {(activeFilter !== 'All' || searchTerm) && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveFilter('All');
                        setSearchTerm('');
                      }}
                      className='flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200'
                    >
                      <span>Clear all</span>
                      <span className='text-xs'>×</span>
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Modern Bento Grid */}
      <section className='py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              Featured
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Projects
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              {projectsContent.projectsSection.description}
            </p>
          </motion.div>

          <div className='space-y-32'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className='mb-6'>
                    <div className='flex items-center gap-3 mb-4'>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}
                      >
                        {project.category}
                      </span>
                      <span className='text-sm text-slate-500 dark:text-slate-400'>
                        {project.year} • {project.duration}
                      </span>
                    </div>

                    <h3 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
                      {project.title}
                    </h3>

                    <p className='text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className='grid grid-cols-3 gap-4 mb-8'>
                      {project.metrics.growth && (
                        <div className='text-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg'>
                          <div className='text-lg font-bold text-green-600 dark:text-green-400'>
                            {project.metrics.growth}
                          </div>
                          <div className='text-xs text-slate-600 dark:text-slate-400'>
                            Growth
                          </div>
                        </div>
                      )}
                      {project.metrics.users && (
                        <div className='text-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg'>
                          <div className='text-lg font-bold text-blue-600 dark:text-blue-400'>
                            {project.metrics.users}
                          </div>
                          <div className='text-xs text-slate-600 dark:text-slate-400'>
                            Users
                          </div>
                        </div>
                      )}
                      {project.metrics.rating && (
                        <div className='text-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg'>
                          <div className='text-lg font-bold text-yellow-600 dark:text-yellow-400'>
                            {project.metrics.rating}
                          </div>
                          <div className='text-xs text-slate-600 dark:text-slate-400'>
                            Rating
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  {project.features && (
                    <div className='mb-8'>
                      <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-3'>
                        {project.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className='flex items-center gap-3'
                            >
                              <FaCheck className='w-4 h-4 text-green-500 flex-shrink-0' />
                              <span className='text-slate-700 dark:text-slate-300 text-sm font-medium'>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className='mb-8'>
                    <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
                      Technologies:
                    </h4>
                    <div className='flex flex-wrap gap-3'>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl mb-8'>
                      <div className='flex mb-3'>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className='w-4 h-4 text-yellow-400'
                          />
                        ))}
                      </div>
                      <blockquote className='text-slate-700 dark:text-slate-300 italic mb-3'>
                        "
                        {typeof project.testimonial === 'string'
                          ? project.testimonial
                          : project.testimonial.content}
                        "
                      </blockquote>
                      <div className='text-sm font-medium text-slate-900 dark:text-white'>
                        — {project.client}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLink
                        href={`/projects/${project.id}`}
                        as={ButtonLink}
                        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg inline-flex items-center gap-2'
                      >
                        View Case Study
                      </ArrowLink>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setIsVideoModalOpen(true);
                      }}
                      className='flex items-center gap-2 px-6 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl font-semibold transition-colors'
                    >
                      <FaPlay className='w-4 h-4' />
                      Watch Demo
                    </motion.button>
                  </div>
                </div>

                {/* Visual/Mockup */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{
                      scale: hoveredProject === project.id ? 1.02 : 1,
                      rotateY: hoveredProject === project.id ? 5 : 0,
                    }}
                    className='relative group perspective-1000'
                  >
                    <div
                      className={`bg-gradient-to-r ${project.gradient} rounded-3xl p-8 shadow-2xl transform-gpu`}
                    >
                      <div className='bg-white dark:bg-slate-800 rounded-2xl overflow-hidden'>
                        {/* Main Project Image Only */}
                        <div className='relative'>
                          <NextImage
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700'
                          />

                          {/* Image Overlay */}
                          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300'>
                            <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                              <span className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300'>
                                View Live Project
                              </span>
                            </div>
                          </div>

                          {/* Project Category Badge */}
                          <div className='absolute top-4 left-4'>
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium`}
                            >
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Metric Badge */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className='absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700'
                    >
                      <div className='flex items-center gap-2'>
                        <HiTrendingUp className='w-4 h-4 text-green-500' />
                        <span className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                          {project.metrics?.growth}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show message when no projects match */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-center py-20'
            >
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                No projects found
              </h3>
              <p className='text-slate-600 dark:text-slate-400'>
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
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
              {projectsContent.cta.title}
            </h2>
            <p className='text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
              {projectsContent.cta.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLink
                  href={projectsContent.cta.primaryButtonHref}
                  as={ButtonLink}
                  size='lg'
                  className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-2xl'
                >
                  {projectsContent.cta.primaryButton}
                </ArrowLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonLink
                  href={projectsContent.cta.secondaryButtonHref}
                  variant='outline'
                  size='lg'
                  className='border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold'
                >
                  {projectsContent.cta.secondaryButton}
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setSelectedProject(null);
        }}
        title={
          selectedProject ? `${selectedProject.title} Demo` : 'Project Demo'
        }
        description={
          selectedProject
            ? `Watch the demo of ${selectedProject.title} showcasing its key features and functionality.`
            : 'Watch our project demo showcasing key features and functionality.'
        }
      />
    </div>
  );
};

export default ProjectsPage;
