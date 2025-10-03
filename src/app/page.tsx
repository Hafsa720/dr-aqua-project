'use client';

import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Shield,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ProductCard } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';

import homeContentEn from '@/content/home/en/content.json';
import homeContentUr from '@/content/home/ur/content.json';

const featuredProducts = [
  {
    id: '1',
    name: 'AquaPure Pro 5-Stage Filter',
    price: 299,
    originalPrice: 399,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop',
    rating: 4.8,
    category: 'Residential',
    features: ['5-Stage Filtration', 'UV Sterilization', 'Smart Monitoring'],
  },
  {
    id: '2',
    name: 'CrystalFlow Commercial Unit',
    price: 899,
    originalPrice: 1199,
    image:
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&auto=format&fit=crop',
    rating: 4.9,
    category: 'Commercial',
    features: ['High Capacity', 'Auto-Cleaning', 'Remote Control'],
  },
  {
    id: '3',
    name: 'EcoFilter Compact Home',
    price: 149,
    originalPrice: 199,
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop',
    rating: 4.7,
    category: 'Residential',
    features: ['Space Saving', 'Easy Install', 'Long Lasting'],
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Professional Installation',
    description:
      'Expert installation by certified technicians with 2-year warranty',
    price: 'Starting at $99',
  },
  {
    icon: Shield,
    title: 'Maintenance & Repair',
    description:
      'Regular maintenance and quick repairs to keep your system running',
    price: 'Starting at $49',
  },
  {
    icon: CheckCircle,
    title: 'Water Quality Testing',
    description: 'Comprehensive water analysis and quality testing services',
    price: 'Starting at $29',
  },
];

export default function HomePage() {
  const { language } = useLanguage();
  const [content, setContent] = useState(homeContentEn);

  useEffect(() => {
    if (language === 'ur') {
      setContent(homeContentUr);
    } else {
      setContent(homeContentEn);
    }
  }, [language]);

  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 py-20 lg:py-32'>
        <Container layout='default'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <Badge
                  variant='secondary'
                  className='w-fit bg-secondary-500 text-white hover:bg-secondary-600'
                >
                  {content.hero.badge}
                </Badge>
                <h1 className='text-4xl lg:text-6xl font-bold text-balance leading-tight text-primary-900'>
                  {content.hero.title}{' '}
                  <span className='text-primary-500'>{content.hero.titleHighlight}</span>
                </h1>
                <p className='text-xl text-primary-700 text-pretty max-w-lg'>
                  {content.hero.description}
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='text-lg px-8 bg-secondary-600 hover:bg-secondary-700 text-white'
                >
                  <Link href='/shop'>
                    {content.hero.primaryButton} <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='text-lg px-8 border-primary-600 text-primary-600 hover:bg-primary-50'
                >
                  <Link href='/services'>{content.hero.secondaryButton}</Link>
                </Button>
              </div>
              <div className='flex items-center gap-8 pt-4'>
                {content.hero.stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-2xl font-bold text-primary-600'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-primary-600'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop'
                alt='Premium water filtration system'
                className='rounded-2xl shadow-2xl'
              />
              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary-200'>
                <div className='flex items-center gap-3'>
                  <Droplets className='h-8 w-8 text-primary-500' />
                  <div>
                    <div className='font-semibold text-primary-900'>
                      {content.hero.floatingCard.title}
                    </div>
                    <div className='text-sm text-primary-600'>
                      {content.hero.floatingCard.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className='py-20 bg-primary-50'>
        <Container layout='default'>
          <div className='text-center space-y-4 mb-12'>
            <Badge
              variant='outline'
              className='w-fit mx-auto border-primary-500 text-primary-500'
            >
              {content.featuredProducts.badge}
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
              {content.featuredProducts.title}
            </h2>
            <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
              {content.featuredProducts.description}
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-primary-600 text-primary-600 hover:bg-primary-50'
            >
              <Link href='/shop'>
                {content.featuredProducts.viewAllButton} <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className='py-20'>
        <Container layout='default'>
          <div className='text-center space-y-4 mb-12'>
            <Badge
              variant='outline'
              className='w-fit mx-auto border-primary-500 text-primary-500'
            >
              {content.services.badge}
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
              {content.services.title}
            </h2>
            <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
              {content.services.description}
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {content.services.items.map((service, index) => {
              const icons = [Wrench, Shield, CheckCircle];
              const ServiceIcon = icons[index];
              return (
                <Card
                  key={index}
                  interactive
                  className='text-center border-primary-200 hover:border-primary-300'
                >
                  <CardHeader>
                    <div className='mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4'>
                      <ServiceIcon className='h-8 w-8 text-primary-500' />
                    </div>
                    <CardTitle className='text-xl text-primary-900'>
                      {service.title}
                    </CardTitle>
                    <CardDescription className='text-base text-primary-700'>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      <div className='text-lg font-semibold text-primary-600'>
                        {service.price}
                      </div>
                      <Button
                        asChild
                        variant='outline'
                        className='w-full border-primary-500 text-primary-500 hover:bg-primary-50'
                      >
                        <Link href='/services'>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary-900 text-white'>
        <Container layout='narrow' className='text-center'>
          <div className='space-y-6'>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance'>
              {content.cta.title}
            </h2>
            <p className='text-xl text-primary-100 text-pretty'>
              {content.cta.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Button
                asChild
                size='lg'
                className='text-lg px-8 bg-secondary-600 hover:bg-secondary-700 text-white'
              >
                <Link href='/contact'>{content.cta.primaryButton}</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='text-lg px-8 border-white text-white hover:bg-white hover:text-primary-500'
              >
                <Link href='/shop'>{content.cta.secondaryButton}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
