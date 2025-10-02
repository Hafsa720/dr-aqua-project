import {
  CheckCircle,
  Clock,
  Droplets,
  MapPin,
  Phone,
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

const services = [
  {
    id: 'installation',
    icon: Wrench,
    title: 'Professional Installation',
    description:
      'Expert installation by certified technicians with 2-year warranty on installation work.',
    price: 99,
    duration: '2-3 hours',
    features: [
      'Certified technicians',
      'All tools and materials included',
      'System testing and calibration',
      '2-year installation warranty',
      'Free follow-up visit',
    ],
    popular: true,
  },
  {
    id: 'maintenance',
    icon: Shield,
    title: 'Maintenance & Repair',
    description:
      'Regular maintenance and quick repairs to keep your water filtration system running optimally.',
    price: 49,
    duration: '1-2 hours',
    features: [
      'Filter replacement',
      'System inspection',
      'Performance optimization',
      'Parts replacement',
      'Emergency repairs available',
    ],
    popular: false,
  },
  {
    id: 'testing',
    icon: Droplets,
    title: 'Water Quality Testing',
    description:
      'Comprehensive water analysis and quality testing to ensure your water meets safety standards.',
    price: 29,
    duration: '30 minutes',
    features: [
      'Complete water analysis',
      'Contaminant detection',
      'pH level testing',
      'Detailed report',
      'Recommendations included',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    service: 'Professional Installation',
    rating: 5,
    comment:
      'The installation team was professional and efficient. They explained everything clearly and left no mess behind.',
    date: '2 weeks ago',
  },
  {
    name: 'Michael Chen',
    service: 'Maintenance & Repair',
    rating: 5,
    comment:
      'Quick response time and excellent service. My water filter is working better than ever!',
    date: '1 month ago',
  },
  {
    name: 'Emily Rodriguez',
    service: 'Water Quality Testing',
    rating: 5,
    comment:
      'Very thorough testing and detailed report. Helped me understand exactly what was in my water.',
    date: '3 weeks ago',
  },
];

export default function ServicesPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-12'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <Badge
            variant='outline'
            className='w-fit mx-auto border-primary-300 text-primary-700'
          >
            Professional Services
          </Badge>
          <h1 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
            Complete Water Solutions
          </h1>
          <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
            From installation to maintenance, our certified experts ensure your
            water filtration system performs at its best. Book a service today
            and experience the difference.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service) => (
            <Card
              key={service.id}
              className='relative hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
            >
              {service.popular && (
                <Badge
                  className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary-500 hover:bg-secondary-600'
                  variant='default'
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className='text-center'>
                <div className='mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4'>
                  <service.icon className='h-8 w-8 text-primary-600' />
                </div>
                <CardTitle className='text-xl text-primary-900'>
                  {service.title}
                </CardTitle>
                <CardDescription className='text-base text-primary-700'>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary-600 mb-1'>
                    ${service.price}
                    <span className='text-base font-normal text-primary-500'>
                      /service
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-2 text-sm text-primary-600'>
                    <Clock className='h-4 w-4' />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className='space-y-2'>
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-2 text-sm text-primary-800'
                    >
                      <CheckCircle className='h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0' />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className='w-full bg-primary-500 hover:bg-primary-600'
                  size='lg'
                >
                  <Link href='/contact'>Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className='bg-primary-50 rounded-2xl p-8 lg:p-12'>
          <div className='text-center space-y-4 mb-8'>
            <h2 className='text-2xl lg:text-3xl font-bold text-primary-900'>
              Why Choose Our Services?
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              We're committed to providing the highest quality service for all
              your water filtration needs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                <CheckCircle className='h-6 w-6 text-primary-600' />
              </div>
              <h3 className='font-semibold text-primary-900'>
                Certified Experts
              </h3>
              <p className='text-sm text-primary-700'>
                All technicians are certified and trained
              </p>
            </div>
            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                <Clock className='h-6 w-6 text-primary-600' />
              </div>
              <h3 className='font-semibold text-primary-900'>Fast Response</h3>
              <p className='text-sm text-primary-700'>
                Same-day service available
              </p>
            </div>
            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                <Shield className='h-6 w-6 text-primary-600' />
              </div>
              <h3 className='font-semibold text-primary-900'>
                Warranty Included
              </h3>
              <p className='text-sm text-primary-700'>
                All services backed by warranty
              </p>
            </div>
            <div className='text-center space-y-2'>
              <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                <Phone className='h-6 w-6 text-primary-600' />
              </div>
              <h3 className='font-semibold text-primary-900'>24/7 Support</h3>
              <p className='text-sm text-primary-700'>
                Always here when you need us
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-2xl lg:text-3xl font-bold text-primary-900'>
              What Our Customers Say
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className='border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300'
              >
                <CardContent className='pt-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-1'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-4 w-4 fill-yellow-400 text-yellow-400'
                        />
                      ))}
                    </div>
                    <p className='text-sm text-primary-800'>
                      {testimonial.comment}
                    </p>
                    <div className='flex items-center justify-between pt-2 border-t border-primary-200'>
                      <div>
                        <p className='font-semibold text-sm text-primary-900'>
                          {testimonial.name}
                        </p>
                        <p className='text-xs text-primary-600'>
                          {testimonial.service}
                        </p>
                      </div>
                      <p className='text-xs text-primary-500'>
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <Card className='bg-primary-500 text-white'>
          <CardContent className='p-8 lg:p-12'>
            <div className='grid lg:grid-cols-2 gap-8 items-center'>
              <div className='space-y-4'>
                <h2 className='text-2xl lg:text-3xl font-bold'>
                  Service Areas
                </h2>
                <p className='text-primary-100'>
                  We proudly serve customers across the region with fast,
                  reliable service. Check if we service your area or contact us
                  for more information.
                </p>
                <div className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5' />
                  <span>Serving 50+ cities nationwide</span>
                </div>
              </div>
              <div className='space-y-3'>
                <Button
                  asChild
                  size='lg'
                  className='w-full bg-secondary-500 hover:bg-secondary-600 text-white'
                >
                  <Link href='/contact'>Check Service Availability</Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='w-full border-white text-white hover:bg-white hover:text-primary-500 bg-transparent'
                >
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
