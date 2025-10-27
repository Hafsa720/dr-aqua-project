'use client';

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
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getServiceLabels,
  getServices,
  getTestimonials,
  getWhyChooseUs,
} from '@/data/services';
import { CompanyInfo } from '@/types/constants';

// Icon mapping
const iconMap: Record<string, any> = {
  Wrench,
  Shield,
  Droplets,
  CheckCircle,
  Clock,
  Phone,
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const [services, setServices] = useState(getServices('en'));
  const [testimonials, setTestimonials] = useState(getTestimonials('en'));
  const [whyChooseUs, setWhyChooseUs] = useState(getWhyChooseUs('en'));
  const [labels, setLabels] = useState(getServiceLabels('en'));

  useEffect(() => {
    setServices(getServices(language));
    setTestimonials(getTestimonials(language));
    setWhyChooseUs(getWhyChooseUs(language));
    setLabels(getServiceLabels(language));
  }, [language]);

  const handleWhatsAppService = (service: (typeof services)[0]) => {
    const message =
      language === 'ur'
        ? `سلام ڈاکٹر ایکوا! میں ${service.title} میں دلچسپی رکھتا ہوں۔\n\nقیمت کی حد: PKR ${service.priceRange}\nمدت: ${service.duration}\n\nبراہ کرم مزید تفصیلات اور درست قیمت فراہم کریں۔`
        : `Hi Dr. Aqua! I'm interested in ${service.title}.\n\nPrice Range: PKR ${service.priceRange}\nDuration: ${service.duration}\n\nPlease provide more details and exact pricing.`;

    const phone = CompanyInfo.whatsapp.replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-12'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <Badge
            variant='outline'
            className='w-fit mx-auto border-primary-300 text-primary-700'
          >
            {labels.pageTitle}
          </Badge>
          <h1 className='text-3xl lg:text-4xl font-bold text-balance text-primary-900'>
            {labels.pageSubtitle}
          </h1>
          <p className='text-lg text-primary-700 text-pretty max-w-2xl mx-auto'>
            {labels.pageDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service) => {
            const ServiceIcon = iconMap[service.icon] || Wrench;
            return (
              <Card
                key={service.id}
                className='relative hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
              >
                {service.popular && (
                  <Badge
                    className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary-500 hover:bg-secondary-600'
                    variant='default'
                  >
                    {labels.mostPopular}
                  </Badge>
                )}
                <CardHeader className='text-center'>
                  <div className='mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4'>
                    <ServiceIcon className='h-8 w-8 text-primary-600' />
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
                    <div className='mb-2'>
                      <div className='text-xs font-semibold text-primary-500 uppercase tracking-wide mb-1'>
                        Price Range
                      </div>
                      <div className='text-3xl font-bold text-primary-600'>
                        PKR {service.priceRange}
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-sm text-primary-600 bg-primary-50 py-2 px-4 rounded-lg'>
                      <Clock className='h-4 w-4' />
                      <span>{service.duration}</span>
                    </div>
                    <p className='text-xs text-primary-500 mt-2 italic'>
                      *Final price depends on system type & requirements
                    </p>
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
                    onClick={() => handleWhatsAppService(service)}
                    className='w-full bg-green-600 hover:bg-green-700 text-white'
                    size='lg'
                  >
                    <FaWhatsapp className='mr-2 h-5 w-5' />
                    {labels.bookNow}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className='bg-primary-50 rounded-2xl p-8 lg:p-12'>
          <div className='text-center space-y-4 mb-8'>
            <h2 className='text-2xl lg:text-3xl font-bold text-primary-900'>
              {labels.whyChooseTitle}
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              {labels.whyChooseDescription}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {whyChooseUs.map((item, index) => {
              const WhyIcon = iconMap[item.icon] || CheckCircle;
              return (
                <div key={index} className='text-center space-y-2'>
                  <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto'>
                    <WhyIcon className='h-6 w-6 text-primary-600' />
                  </div>
                  <h3 className='font-semibold text-primary-900'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-primary-700'>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-2xl lg:text-3xl font-bold text-primary-900'>
              {labels.testimonialsTitle}
            </h2>
            <p className='text-primary-700 max-w-2xl mx-auto'>
              {labels.testimonialsDescription}
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
                  {labels.serviceAreasTitle}
                </h2>
                <p className='text-primary-100'>
                  {labels.serviceAreasDescription}
                </p>
                <div className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5' />
                  <span>{labels.serviceAreasSubtext}</span>
                </div>
              </div>
              <div className='space-y-3'>
                <Button
                  onClick={() => {
                    const message =
                      language === 'ur'
                        ? `سلام ڈاکٹر ایکوا! میں ${labels.serviceAreasSubtext} میں سروس کی دستیابی چیک کرنا چاہتا ہوں۔`
                        : `Hi Dr. Aqua! I'd like to check service availability in my area: ${labels.serviceAreasSubtext}`;
                    const phone = CompanyInfo.whatsapp.replace(/\D/g, '');
                    window.open(
                      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                      '_blank',
                    );
                  }}
                  size='lg'
                  className='w-full bg-secondary-500 hover:bg-secondary-600 text-white'
                >
                  {labels.checkAvailability}
                </Button>
                <Button
                  onClick={() => {
                    const message =
                      language === 'ur'
                        ? `سلام ڈاکٹر ایکوا! میں آپ کی خدمات کے بارے میں بات کرنا چاہتا ہوں۔`
                        : `Hi Dr. Aqua! I'd like to discuss your services.`;
                    const phone = CompanyInfo.whatsapp.replace(/\D/g, '');
                    window.open(
                      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                      '_blank',
                    );
                  }}
                  variant='outline'
                  size='lg'
                  className='w-full border-white text-white hover:bg-white hover:text-primary-500 bg-transparent'
                >
                  <FaWhatsapp className='mr-2 h-4 w-4' />
                  {labels.contactUs}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
