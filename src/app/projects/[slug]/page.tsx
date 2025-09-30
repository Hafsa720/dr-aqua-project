/**
 * Dynamic Project Page Component
 *
 * This page displays individual project case studies with hero sections
 * and markdown content rendering. The page loads project data and
 * corresponding case study markdown files.
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

import ProjectDetailClient from '@/components/pages/projects/ProjectDetailClient';
import { loadContentBySlug } from '@/lib/markdown';
import { CaseStudyMetadata } from '@/types/content';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Define valid project slugs based on our case studies
const VALID_PROJECTS = [
  'medconnect',
  'finflow',
  'shopflow',
  'edutech-platform',
  'smartcity-dashboard',
  'logistics-optimizer',
];

export async function generateStaticParams() {
  return VALID_PROJECTS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!VALID_PROJECTS.includes(slug)) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  try {
    // Load the markdown case study for metadata
    const caseStudy = await loadContentBySlug(slug, 'case-studies');
    const metadata = caseStudy.metadata as unknown as CaseStudyMetadata;

    return {
      title: `${metadata.title} | RapidBizz Projects`,
      description: metadata.description || 'Project case study by RapidBizz',
      keywords: [
        'RapidBizz',
        'project',
        'case study',
        metadata.industry,
        ...metadata.technologies,
      ],
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        type: 'article',
        images: [
          {
            url: metadata.images.hero || '/images/projects/default-hero.jpg',
            width: 1200,
            height: 630,
            alt: metadata.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: metadata.title,
        description: metadata.description,
        images: [metadata.images.hero || '/images/projects/default-hero.jpg'],
      },
    };
  } catch (error) {
    return {
      title: 'Project Case Study | RapidBizz',
      description: 'Explore our detailed project case study.',
    };
  }
}

const ProjectDetailPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;

  // Validate project slug
  if (!VALID_PROJECTS.includes(slug)) {
    notFound();
  }

  try {
    // Load case study markdown
    const caseStudy = await loadContentBySlug(slug, 'case-studies');
    const metadata = caseStudy.metadata as unknown as CaseStudyMetadata;

    return (
      <ProjectDetailClient
        slug={slug}
        caseStudy={caseStudy}
        metadata={metadata}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default ProjectDetailPage;
