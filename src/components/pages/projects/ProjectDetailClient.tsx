'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaPlay } from 'react-icons/fa';

import VideoModal from '@/components/common/VideoModal';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { MotionDiv } from '@/components/ui/ProjectPageClient';
import { MarkdownContent } from '@/lib/markdown';
import { CaseStudyMetadata } from '@/types/content';

interface ProjectDetailClientProps {
  slug: string;
  caseStudy: MarkdownContent;
  metadata: CaseStudyMetadata;
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({
  slug,
  caseStudy,
  metadata,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const {
    title,
    client,
    industry,
    year,
    duration,
    budget,
    team,
    technologies = [],
    features = [],
    results = {},
    testimonial = { text: '', author: '', position: '' },
    images = { hero: '' },
    videoUrl,
  } = metadata;

  // Create project object from case study metadata
  const project = {
    id: slug,
    title,
    description: metadata.description,
    image: images.hero || 'https://placehold.co/800x600.webp',
    tech: technologies,
    category: industry,
    year,
    client,
    duration,
    team,
    results: Object.values(results).map(String),
    gallery: Object.values(images).slice(0, 3),
    videoUrl,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary-900 to-primary-700 dark:from-gray-900 dark:to-gray-800 text-white py-20'>
        <div className='layout'>
          <UnstyledLink
            href='/projects'
            className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors'
          >
            <FaArrowLeft /> Back to Projects
          </UnstyledLink>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='text-5xl font-bold mb-4'>{project.title}</h1>
            <p className='text-xl max-w-3xl mb-8'>{project.description}</p>

            <div className='flex flex-wrap gap-6 text-sm'>
              <div>
                <span className='text-white/60'>Category:</span>
                <span className='ml-2 font-semibold'>{project.category}</span>
              </div>
              <div>
                <span className='text-white/60'>Year:</span>
                <span className='ml-2 font-semibold'>{project.year}</span>
              </div>
              <div>
                <span className='text-white/60'>Client:</span>
                <span className='ml-2 font-semibold'>{project.client}</span>
              </div>
              <div>
                <span className='text-white/60'>Duration:</span>
                <span className='ml-2 font-semibold'>{project.duration}</span>
              </div>
              <div>
                <span className='text-white/60'>Team Size:</span>
                <span className='ml-2 font-semibold'>{project.team}</span>
              </div>
              {budget && (
                <div>
                  <span className='text-white/60'>Budget:</span>
                  <span className='ml-2 font-semibold'>{budget}</span>
                </div>
              )}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Project Image with Video Demo */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='layout'>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <Image
              src={project.image || ''}
              alt={project.title || 'Project image'}
              width={800}
              height={600}
              className='w-full h-96 object-cover rounded-xl shadow-2xl'
            />

            {/* Video Play Button Overlay */}
            {project.videoUrl && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className='absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-xl group'
                aria-label='Play project demo video'
              >
                <div className='w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300'>
                  <FaPlay className='w-8 h-8 text-primary-600 ml-1' />
                </div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <span className='block font-bold text-lg'>Watch Demo</span>
                  <span className='block text-sm opacity-80'>
                    See it in action
                  </span>
                </div>
              </button>
            )}
          </MotionDiv>
        </div>
      </section>

      {/* Technology Stack */}
      <section className='py-20 bg-primary-50 dark:bg-gray-800'>
        <div className='layout'>
          <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
            Technology Stack
          </h2>
          <div className='flex flex-wrap gap-4'>
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className='bg-white dark:bg-gray-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg font-semibold shadow-sm'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      {features.length > 0 && (
        <section className='py-20 bg-white dark:bg-gray-900'>
          <div className='layout'>
            <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
              Key Features
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {features.slice(0, 6).map((feature: string, index: number) => (
                <div
                  key={index}
                  className='flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'
                >
                  <svg
                    className='mr-3 h-5 w-5 text-green-500 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {Object.keys(results).length > 0 && (
        <section className='py-20 bg-primary-50 dark:bg-gray-800'>
          <div className='layout'>
            <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
              Key Results
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {Object.entries(results).map(([key, value]) => (
                <div
                  key={key}
                  className='text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg'
                >
                  <div className='text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2'>
                    {value as string}
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {testimonial.text && (
        <section className='py-20 bg-white dark:bg-gray-900'>
          <div className='layout text-center'>
            <blockquote className='text-2xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8'>
              "{testimonial.text}"
            </blockquote>
            {testimonial.author && (
              <cite className='text-lg font-medium text-primary-900 dark:text-white'>
                — {testimonial.author}
                {testimonial.position && (
                  <span className='block text-sm text-gray-500 dark:text-gray-400 mt-1'>
                    {testimonial.position}
                  </span>
                )}
              </cite>
            )}
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <section className='py-20 bg-gray-50 dark:bg-gray-800'>
        <div className='layout max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
            Detailed Case Study
          </h2>
          <div className='bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg'>
            <MarkdownRenderer
              content={caseStudy}
              showMetadata={false}
              className='prose-lg'
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className='py-20 bg-primary-50 dark:bg-gray-800'>
          <div className='layout'>
            <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
              Project Gallery
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {(project.gallery as string[]).map(
                (image: string, index: number) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className='w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow'
                    />
                  </MotionDiv>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='layout text-center'>
          <h2 className='text-3xl font-bold text-primary-900 dark:text-white mb-8'>
            Ready to Start Your Project?
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8'>
            Let's discuss how we can help transform your business with
            innovative technology solutions like this one.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonLink href='/contact' variant='primary' size='base'>
                Start Your Project
              </ButtonLink>
            </MotionDiv>
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonLink href='/projects' variant='outline' size='base'>
                View All Projects
              </ButtonLink>
            </MotionDiv>
          </div>

          <div className='mt-12'>
            <ArrowLink href='/contact' className='text-lg' as={UnderlineLink}>
              Interested in a similar project? Let's talk
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={`${project.title} Demo`}
        description='See the project in action with our detailed walkthrough'
        videoUrl={project.videoUrl}
      />
    </div>
  );
};

export default ProjectDetailClient;
