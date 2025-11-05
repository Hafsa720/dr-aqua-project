'use client';

import {
  Award,
  CheckCircle,
  Droplets,
  Heart,
  Target,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import aboutContentEn from '@/content/common/en/about.json';
import aboutContentUr from '@/content/common/ur/about.json';
import { useLanguage } from '@/contexts/LanguageContext';

const valueIcons = [Target, Heart, Award, Users];

export default function AboutPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState(aboutContentEn);

  useEffect(() => {
    if (language === 'ur') {
      setContent(aboutContentUr);
    } else {
      setContent(aboutContentEn);
    }
  }, [language]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-16'>
        {/* Hero Section */}
        <div className='text-center space-y-6'>
          <Badge
            variant='outline'
            className='w-fit mx-auto border-primary-500 text-primary-500'
          >
            {content.hero.badge}
          </Badge>
          <h1 className='text-3xl lg:text-5xl font-bold text-balance text-primary-900'>
            {content.hero.title}{' '}
            <span className='text-primary-500'>
              {content.hero.titleHighlight}
            </span>
          </h1>
          <p className='text-lg text-primary-700 text-pretty max-w-3xl mx-auto'>
            {content.hero.description}
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {content.stats.map((stat, index) => (
            <Card
              key={index}
              className='border-primary-200 hover:border-primary-300 transition-colors'
            >
              <CardContent className='pt-6 text-center'>
                <div className='text-3xl lg:text-4xl font-bold text-primary-600 mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-primary-700'>{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold text-primary-900'>
                {content.story.title}
              </h2>
              {content.story.paragraphs.map((paragraph, index) => (
                <p key={index} className='text-primary-700'>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className='space-y-3'>
              {content.story.features.map((feature, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-secondary-500' />
                  <span className='text-primary-700'>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='relative'>
            <Image
              src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop'
              alt='Dr. Aqua facility'
              width={800}
              height={600}
              className='rounded-2xl shadow-xl'
            />
            <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary-200'>
              <div className='flex items-center gap-3'>
                <Droplets className='h-8 w-8 text-primary-500' />
                <div>
                  <div className='font-semibold text-primary-900'>
                    15+ Years
                  </div>
                  <div className='text-sm text-primary-600'>Of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold text-primary-900'>
              {content.values.title}
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              {content.values.description}
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {content.values.items.map((value, index) => {
              const IconComponent = valueIcons[index] || Target;
              return (
                <Card
                  key={index}
                  className='text-center hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
                >
                  <CardContent className='pt-6 space-y-4'>
                    <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                      <IconComponent className='h-6 w-6 text-primary-500' />
                    </div>
                    <h3 className='font-semibold text-lg text-primary-900'>
                      {value.title}
                    </h3>
                    <p className='text-sm text-primary-700'>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold text-primary-900'>
              {content.timeline.title}
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              {content.timeline.description}
            </p>
          </div>
          <div className='max-w-3xl mx-auto space-y-6'>
            {content.timeline.milestones.map((milestone, index) => (
              <div key={index} className='flex gap-6'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0'>
                    {milestone.year.slice(-2)}
                  </div>
                  {index < content.timeline.milestones.length - 1 && (
                    <div className='w-0.5 h-full bg-primary-200 mt-2' />
                  )}
                </div>
                <div className='pb-8'>
                  <div className='font-semibold text-lg mb-1 text-primary-900'>
                    {milestone.year}
                  </div>
                  <p className='text-primary-700'>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold text-primary-900'>
              {content.team.title}
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              {content.team.description}
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {content.team.members.map((member, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
              >
                <CardContent className='pt-6'>
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    width={128}
                    height={128}
                    className='w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100'
                  />
                  <h3 className='font-semibold text-lg text-primary-900'>
                    {member.name}
                  </h3>
                  <p className='text-sm text-primary-600'>{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className='bg-primary-500 text-white'>
          <CardContent className='p-8 lg:p-12 text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold mb-4'>
              {content.cta.title}
            </h2>
            <p className='text-primary-100 mb-6 max-w-2xl mx-auto'>
              {content.cta.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                size='lg'
                className='bg-secondary-500 hover:bg-secondary-600 text-white'
              >
                <Link href='/products'>{content.cta.buttons.primary}</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border text-blue-700 hover:bg-white hover:text-primary-500 cursor-pointer'
              >
                <Link href='/contact'>{content.cta.buttons.secondary}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
