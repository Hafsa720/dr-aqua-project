import {
  Award,
  CheckCircle,
  Droplets,
  Heart,
  Target,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Years in Business', value: '15+' },
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Products Sold', value: '25,000+' },
  { label: 'Service Calls', value: '50,000+' },
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description:
      'We never compromise on the quality of our products and services.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our top priority, always.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
  },
  {
    icon: Users,
    title: 'Community',
    description: "We're committed to serving and supporting our community.",
  },
];

const team = [
  {
    name: 'John Anderson',
    role: 'Founder & CEO',
    image: '/professional-man-suit.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Operations',
    image: '/professional-businesswoman.png',
  },
  {
    name: 'David Chen',
    role: 'Chief Technical Officer',
    image: '/professional-asian-man-in-casual-business.jpg',
  },
];

const milestones = [
  {
    year: '2009',
    event: 'AquaShop founded with a mission to provide clean water solutions',
  },
  {
    year: '2012',
    event:
      'Expanded to 10 cities and launched professional installation services',
  },
  {
    year: '2016',
    event:
      'Reached 5,000 satisfied customers and introduced commercial solutions',
  },
  { year: '2020', event: 'Launched online store and expanded nationwide' },
  {
    year: '2024',
    event: 'Celebrating 15 years of excellence with 10,000+ happy customers',
  },
];

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-16'>
        {/* Hero Section */}
        <div className='text-center space-y-6'>
          <Badge
            variant='outline'
            className='w-fit mx-auto border-primary-500 text-primary-500'
          >
            About Dr. Aqua
          </Badge>
          <h1 className='text-3xl lg:text-5xl font-bold text-balance text-primary-900'>
            Providing Pure Water Solutions{' '}
            <span className='text-primary-500'>Since 2009</span>
          </h1>
          <p className='text-lg text-primary-700 text-pretty max-w-3xl mx-auto'>
            We're on a mission to make clean, safe water accessible to everyone.
            With over 15 years of experience, we've helped thousands of families
            and businesses enjoy the benefits of pure, filtered water.
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
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
              <h2 className='text-3xl font-bold text-primary-900'>Our Story</h2>
              <p className='text-primary-700'>
                Dr. Aqua was founded in 2009 with a simple yet powerful vision:
                to provide every home and business with access to clean, safe,
                and great-tasting water. What started as a small local operation
                has grown into a trusted nationwide provider of water filtration
                solutions.
              </p>
              <p className='text-primary-700'>
                Our founder, John Anderson, experienced firsthand the impact of
                poor water quality on his family's health. This personal
                experience drove him to create a company that would help others
                avoid the same struggles. Today, we're proud to have served over
                10,000 customers and installed more than 25,000 water filtration
                systems.
              </p>
            </div>
            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary-500' />
                <span className='text-primary-700'>
                  Certified and trained technicians
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary-500' />
                <span className='text-primary-700'>
                  Premium quality products
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary-500' />
                <span className='text-primary-700'>
                  Exceptional customer service
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary-500' />
                <span className='text-primary-700'>Nationwide coverage</span>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img
              src='/modern-water-filtration-facility.jpg'
              alt='Dr. Aqua facility'
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
              Our Core Values
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              These principles guide everything we do and shape how we serve our
              customers.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
              >
                <CardContent className='pt-6 space-y-4'>
                  <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                    <value.icon className='h-6 w-6 text-primary-500' />
                  </div>
                  <h3 className='font-semibold text-lg text-primary-900'>
                    {value.title}
                  </h3>
                  <p className='text-sm text-primary-700'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold text-primary-900'>Our Journey</h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              Key milestones that have shaped Dr. Aqua into what it is today.
            </p>
          </div>
          <div className='max-w-3xl mx-auto space-y-6'>
            {milestones.map((milestone, index) => (
              <div key={index} className='flex gap-6'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0'>
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
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
              Meet Our Leadership Team
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              Dedicated professionals committed to delivering the best water
              solutions.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
              >
                <CardContent className='pt-6'>
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
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
              Ready to Experience Pure Water?
            </h2>
            <p className='text-primary-100 mb-6 max-w-2xl mx-auto'>
              Join thousands of satisfied customers who trust Dr. Aqua for their
              water filtration needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                size='lg'
                className='bg-secondary-500 hover:bg-secondary-600 text-white'
              >
                <Link href='/shop'>Browse Products</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-primary-500'
              >
                <Link href='/contact'>Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
