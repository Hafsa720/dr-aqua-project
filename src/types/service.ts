
export interface Service {
  id: string;
  slug: string;
  icon: string; // Will be mapped to actual icon component
  title: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular: boolean;
}

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export interface WhyChooseUs {
  title: string;
  description: string;
  icon: string;
}

export interface ServicePageLabels {
  pageTitle: string;
  pageSubtitle: string;
  pageDescription: string;
  perService: string;
  mostPopular: string;
  bookNow: string;
  whyChooseTitle: string;
  whyChooseDescription: string;
  testimonialsTitle: string;
  testimonialsDescription: string;
  serviceAreasTitle: string;
  serviceAreasDescription: string;
  serviceAreasSubtext: string;
  checkAvailability: string;
  contactUs: string;
}
