import type {
  Service,
  ServicePageLabels,
  Testimonial,
  WhyChooseUs,
} from '@/types/service';

import {
  serviceLabelsEn,
  servicesEn,
  testimonialsEn,
  whyChooseUsEn,
} from './en';
import {
  serviceLabelsUr,
  servicesUr,
  testimonialsUr,
  whyChooseUsUr,
} from './ur';

export const getServices = (language: string): Service[] => {
  return language === 'ur' ? servicesUr : servicesEn;
};

export const getTestimonials = (language: string): Testimonial[] => {
  return language === 'ur' ? testimonialsUr : testimonialsEn;
};

export const getWhyChooseUs = (language: string): WhyChooseUs[] => {
  return language === 'ur' ? whyChooseUsUr : whyChooseUsEn;
};

export const getServiceLabels = (language: string): ServicePageLabels => {
  return language === 'ur' ? serviceLabelsUr : serviceLabelsEn;
};

export const getServiceById = (
  id: string,
  language: string,
): Service | undefined => {
  const services = getServices(language);
  return services.find((s) => s.id === id);
};

export const getServiceBySlug = (
  slug: string,
  language: string,
): Service | undefined => {
  const services = getServices(language);
  return services.find((s) => s.slug === slug);
};
