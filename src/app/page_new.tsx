import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Shield,
  Star,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
      <section className='relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <Badge variant='secondary' className='w-fit'>
                  Trusted by 10,000+ Families
                </Badge>
                <h1 className='text-4xl lg:text-6xl font-bold text-balance leading-tight'>
                  Pure Water, <span className='text-primary'>Pure Life</span>
                </h1>
                <p className='text-xl text-muted-foreground text-pretty max-w-lg'>
                  Transform your water quality with our premium filtration
                  systems and professional services. Clean, safe, and refreshing
                  water for your home and business.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='lg' className='text-lg px-8'>
                  <Link href='/shop'>
                    Shop Now <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='text-lg px-8 bg-transparent'
                >
                  <Link href='/services'>Book Service</Link>
                </Button>
              </div>
              <div className='flex items-center gap-8 pt-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>10K+</div>
                  <div className='text-sm text-muted-foreground'>
                    Happy Customers
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>99.9%</div>
                  <div className='text-sm text-muted-foreground'>
                    Purity Rate
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>24/7</div>
                  <div className='text-sm text-muted-foreground'>Support</div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop'
                alt='Premium water filtration system'
                className='rounded-2xl shadow-2xl'
              />
              <div className='absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border'>
                <div className='flex items-center gap-3'>
                  <Droplets className='h-8 w-8 text-primary' />
                  <div>
                    <div className='font-semibold'>Crystal Clear</div>
                    <div className='text-sm text-muted-foreground'>
                      99.9% Pure Water
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center space-y-4 mb-12'>
            <Badge variant='outline' className='w-fit mx-auto'>
              Best Sellers
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance'>
              Featured Water Filter Systems
            </h2>
            <p className='text-lg text-muted-foreground text-pretty max-w-2xl mx-auto'>
              Discover our most popular water filtration solutions, trusted by
              thousands of customers worldwide.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className='group hover:shadow-lg transition-shadow'
              >
                <CardHeader className='p-0'>
                  <div className='relative overflow-hidden rounded-t-lg'>
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <Badge
                      className='absolute top-4 left-4'
                      variant='secondary'
                    >
                      {product.category}
                    </Badge>
                    {product.originalPrice > product.price && (
                      <Badge
                        className='absolute top-4 right-4'
                        style={{ backgroundColor: '#10B981', color: 'white' }}
                      >
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <div>
                      <CardTitle className='text-xl mb-2'>
                        {product.name}
                      </CardTitle>
                      <div className='flex items-center gap-2 mb-3'>
                        <div className='flex items-center'>
                          <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                          <span className='ml-1 text-sm font-medium'>
                            {product.rating}
                          </span>
                        </div>
                        <span className='text-sm text-muted-foreground'>
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-2xl font-bold text-primary'>
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className='text-lg text-muted-foreground line-through'>
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className='space-y-2'>
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-2 text-sm'
                        >
                          <CheckCircle className='h-4 w-4 text-secondary' />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className='w-full'>
                      <Link href={`/shop/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button asChild variant='outline' size='lg'>
              <Link href='/shop'>
                View All Products <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center space-y-4 mb-12'>
            <Badge variant='outline' className='w-fit mx-auto'>
              Professional Services
            </Badge>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance'>
              Complete Water Solutions
            </h2>
            <p className='text-lg text-muted-foreground text-pretty max-w-2xl mx-auto'>
              From installation to maintenance, our certified experts ensure
              your water filtration system performs at its best.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <service.icon className='h-8 w-8 text-primary' />
                  </div>
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                  <CardDescription className='text-base'>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='text-lg font-semibold text-primary'>
                      {service.price}
                    </div>
                    <Button
                      asChild
                      variant='outline'
                      className='w-full bg-transparent'
                    >
                      <Link href='/services'>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-3xl mx-auto space-y-6'>
            <h2 className='text-3xl lg:text-4xl font-bold text-balance'>
              Ready for Pure, Clean Water?
            </h2>
            <p className='text-xl text-primary-foreground/90 text-pretty'>
              Join thousands of satisfied customers who trust AquaShop for their
              water filtration needs. Get started today with a free
              consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Button
                asChild
                size='lg'
                variant='secondary'
                className='text-lg px-8'
              >
                <Link href='/contact'>Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent'
              >
                <Link href='/shop'>Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
