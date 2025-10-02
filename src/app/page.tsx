import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Shield,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

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

const featuredProducts = [
  {
    id: '1',
    name: 'AquaPure Pro 5-Stage Filter',
    price: 299,
    originalPrice: 399,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124,
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
    reviews: 87,
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
    reviews: 203,
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
                  Trusted by 10,000+ Families
                </Badge>
                <h1 className='text-4xl lg:text-6xl font-bold text-balance leading-tight text-primary-900'>
                  Pure Water,{' '}
                  <span className='text-primary-500'>Pure Life</span>
                </h1>
                <p className='text-xl text-primary-700 text-pretty max-w-lg'>
                  Transform your water quality with our premium filtration
                  systems and professional services. Clean, safe, and refreshing
                  water for your home and business.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='text-lg px-8 bg-secondary-600 hover:bg-secondary-700 text-white'
                >
                  <Link href='/shop'>
                    Shop Now <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='text-lg px-8 border-primary-600 text-primary-600 hover:bg-primary-50'
                >
                  <Link href='/services'>Book Service</Link>
                </Button>
              </div>
              <div className='flex items-center gap-8 pt-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary-600'>
                    10K+
                  </div>
                  <div className='text-sm text-primary-600'>
                    Happy Customers
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary-600'>
                    99.9%
                  </div>
                  <div className='text-sm text-primary-600'>Purity Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary-600'>
                    24/7
                  </div>
                  <div className='text-sm text-primary-600'>Support</div>
                </div>
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
                      Crystal Clear
                    </div>
                    <div className='text-sm text-primary-600'>
                      99.9% Pure Water
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
              Best Sellers
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
              Featured Water Filter Systems
            </h2>
            <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
              Discover our most popular water filtration solutions, trusted by
              thousands of customers worldwide.
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
                View All Products <ArrowRight className='ml-2 h-4 w-4' />
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
              Professional Services
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
              Complete Water Solutions
            </h2>
            <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
              From installation to maintenance, our certified experts ensure
              your water filtration system performs at its best.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                interactive
                className='text-center border-primary-200 hover:border-primary-300'
              >
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4'>
                    <service.icon className='h-8 w-8 text-primary-500' />
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
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary-900 text-white'>
        <Container layout='narrow' className='text-center'>
          <div className='space-y-6'>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance'>
              Ready for Pure, Clean Water?
            </h2>
            <p className='text-xl text-primary-100 text-pretty'>
              Join thousands of satisfied customers who trust Dr. Aqua for their
              water filtration needs. Get started today with a free
              consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Button
                asChild
                size='lg'
                className='text-lg px-8 bg-secondary-600 hover:bg-secondary-700 text-white'
              >
                <Link href='/contact'>Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='text-lg px-8 border-white text-white hover:bg-white hover:text-primary-500'
              >
                <Link href='/shop'>Browse Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
