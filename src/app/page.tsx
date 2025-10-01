'use client';

import {
  Code2,
  Component,
  Palette,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react';

import ButtonLink from '@/components/links/ButtonLink';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const HomePage = () => {
  const features = [
    {
      icon: Component,
      title: 'Rich Component Library',
      description: 'Pre-built, customizable components with modern design patterns',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
    },
    {
      icon: Palette,
      title: 'Modern Design System',
      description: 'Consistent styling with Tailwind CSS and dark mode support',
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Built with Next.js 15+ for lightning-fast performance',
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow',
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description: 'TypeScript, ESLint, Prettier, and best practices included',
      gradient: 'from-green-500 to-teal-500',
      color: 'green',
    },
  ];

  const stats = [
    { label: 'Components', value: '25+' },
    { label: 'Pages Included', value: '8' },
    { label: 'TypeScript', value: '100%' },
    { label: 'Performance', value: '99' },
  ];

  return (
    <div className='relative'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
        <div className='layout text-center py-20'>
          <div className='space-y-6'>
            {/* Badge */}
            <div className='flex justify-center mb-6'>
              <div className='inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium'>
                <Sparkles className='w-4 h-4 mr-2' />
                Starter Template
              </div>
            </div>

            {/* Main Title */}
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
              <span className='text-slate-900 dark:text-white'>
                Modern Web
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                Starter Template
              </span>
            </h1>

            {/* Subtitle */}
            <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed'>
              A comprehensive Next.js starter with beautiful components, dark mode,
              TypeScript, and everything you need to build modern web applications.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6'>
              <ButtonLink href='/components-demo' variant='primary' size='lg' className='min-w-48'>
                <Code2 className='w-5 h-5 mr-2' />
                View Components
              </ButtonLink>
              <ButtonLink variant='outline' size='lg' className='min-w-48' href='/contact'>
                Get Started
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700'>
        <div className='layout'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              Everything You Need
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Built with modern technologies and best practices for scalable applications.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat) => (
              <div key={stat.label} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className='text-sm md:text-base text-slate-600 dark:text-slate-300'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-slate-50 dark:bg-slate-900'>
        <div className='layout'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              Powerful Features
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Carefully crafted components and features to accelerate your development workflow.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature) => (
              <div key={feature.title} className='group'>
                <div className='bg-white dark:bg-slate-800 rounded-xl p-6 h-full border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300'>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='layout text-center'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Ready to Start Building?
            </h2>
            <p className='text-lg text-blue-100 max-w-2xl mx-auto'>
              Explore our component library and see what you can build with this starter template.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6'>
              <ButtonLink
                variant='light'
                size='lg'
                className='min-w-48 bg-white text-blue-600 hover:bg-blue-50 border-0'
                href='/components-demo'
              >
                <Component className='w-5 h-5 mr-2' />
                Browse Components
              </ButtonLink>
              <ButtonLink
                variant='outline'
                size='lg'
                className='min-w-48 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-200'
                href='/team'
              >
                View Example Pages
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
