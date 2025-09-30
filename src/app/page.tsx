import dynamic from 'next/dynamic';

import HomeHero from '@/components/pages/home/HomeHero';
import homeContent from '@/content/home/en/content.json';
import { createProcessConfig, createStatsConfig } from '@/lib/section-configs';

// Lazy load non-critical sections for better performance
const HomeCTA = dynamic(() => import('@/components/pages/home/HomeCTA'));
const HomeFeaturedProjects = dynamic(
  () => import('@/components/pages/home/HomeFeaturedProjects'),
);
const HomeServices = dynamic(
  () => import('@/components/pages/home/HomeServices'),
);
const HomeTestimonials = dynamic(
  () => import('@/components/pages/home/HomeTestimonials'),
);
const ProcessSection = dynamic(
  () => import('@/components/sections/ProcessSection'),
);
const StatsSection = dynamic(
  () => import('@/components/sections/StatsSection'),
);

const HomePage = () => {
  // Use stats directly with string icons (no conversion needed)
  const statsWithIcons = homeContent.stats.items;

  return (
    <div className='relative overflow-hidden'>
      {/* Hero Section */}
      <HomeHero content={homeContent} />

      {/* Stats Section - Modern Bento Grid */}
      <StatsSection
        {...createStatsConfig({
          stats: statsWithIcons,
          title: homeContent.stats.title,
          subtitle: homeContent.stats.description,
        })}
      />

      {/* Services Section */}
      <HomeServices content={homeContent} />

      {/* Process Section - Interactive Timeline */}
      <ProcessSection
        {...createProcessConfig({
          processSteps: homeContent.process.steps,
          title: homeContent.process.title,
          subtitle: homeContent.process.description,
        })}
      />

      {/* Featured Projects Section */}
      <HomeFeaturedProjects content={homeContent} />

      {/* Testimonials Section */}
      <HomeTestimonials content={homeContent} />

      {/* CTA Section */}
      <HomeCTA content={homeContent} />
    </div>
  );
};

export default HomePage;
