import type {
  Service,
  ServicePageLabels,
  Testimonial,
  WhyChooseUs,
} from '@/types/service';

export const servicesEn: Service[] = [
  {
    id: 'installation',
    slug: 'professional-installation',
    icon: 'Wrench',
    title: 'RO System Installation',
    description:
      'Expert installation of RO systems and water purifiers by certified technicians in Bahawalpur with 1-year warranty.',
    priceRange: '2,000 - 3,500',
    duration: '2-4 hours',
    features: [
      'Professional installation team',
      'All pipes and fittings included',
      'System testing and water quality check',
      '1-year installation warranty',
      'Free consultation and site visit',
      'Same-day installation available',
    ],
    popular: true,
  },
  {
    id: 'maintenance',
    slug: 'maintenance-repair',
    icon: 'Shield',
    title: 'Maintenance & Repair',
    description:
      'Complete maintenance and repair services for all brands of RO systems and water purifiers in Bahawalpur.',
    priceRange: '1,200 - 2,500',
    duration: '1-2 hours',
    features: [
      'Filter replacement (all stages)',
      'Complete system inspection',
      'TDS level checking',
      'Leak detection and repair',
      'Membrane cleaning/replacement',
      'Emergency repair service',
    ],
    popular: false,
  },
  {
    id: 'amc',
    slug: 'annual-maintenance-contract',
    icon: 'CheckCircle',
    title: 'Annual Maintenance Contract',
    description:
      'Yearly maintenance package with regular servicing and priority support for your RO system.',
    priceRange: '7,000 - 12,000',
    duration: '1 year coverage',
    features: [
      '4 free service visits per year',
      'Priority emergency support',
      '20% discount on spare parts',
      'Free filter replacements (2 per year)',
      'TDS monitoring and reports',
      'Extended warranty coverage',
    ],
    popular: false,
  },
];

export const testimonialsEn: Testimonial[] = [
  {
    name: 'Ahmad Khan',
    service: 'RO System Installation',
    rating: 5,
    comment:
      'Excellent service from Dr. Aqua! They installed my 7-stage RO system in Model Town within 3 hours. Very professional team.',
    date: '1 week ago',
  },
  {
    name: 'Fatima Malik',
    service: 'Maintenance & Repair',
    rating: 5,
    comment:
      'Quick response for my RO repair in Satellite Town. They fixed the leakage and replaced filters. Highly recommended!',
    date: '2 weeks ago',
  },
  {
    name: 'Hassan Ali',
    service: 'Annual Maintenance Contract',
    rating: 5,
    comment:
      'AMC service is worth every rupee. Regular maintenance keeps my RO system running perfectly. Great support from Dr. Aqua.',
    date: '3 weeks ago',
  },
];

export const whyChooseUsEn: WhyChooseUs[] = [
  {
    title: 'Local Service',
    description: 'Based in Bahawalpur - Quick response',
    icon: 'CheckCircle',
  },
  {
    title: 'Same-Day Service',
    description: 'Installation & repair within 24 hours',
    icon: 'Clock',
  },
  {
    title: '1-Year Warranty',
    description: 'All installation work guaranteed',
    icon: 'Shield',
  },
  {
    title: 'WhatsApp Support',
    description: 'Instant quotes via 0334 7071759',
    icon: 'Phone',
  },
];

export const serviceLabelsEn: ServicePageLabels = {
  pageTitle: 'Professional Services',
  pageSubtitle: 'Complete RO System Services in Bahawalpur',
  pageDescription:
    'From installation to maintenance, our expert team ensures your RO system performs at its best. Serving Model Town, Satellite Town, DHA, and all areas of Bahawalpur.',
  perService: '',
  mostPopular: 'Most Popular',
  bookNow: 'WhatsApp Quote',
  whyChooseTitle: 'Why Choose Dr. Aqua?',
  whyChooseDescription:
    "Bahawalpur's trusted water purification service provider with expert technicians and quality parts.",
  testimonialsTitle: 'What Our Customers Say',
  testimonialsDescription:
    'Hear from satisfied customers across Bahawalpur who trust Dr. Aqua.',
  serviceAreasTitle: 'Service Areas in Bahawalpur',
  serviceAreasDescription:
    'We serve all areas of Bahawalpur including Model Town, Satellite Town, DHA, Cantt, Baghdad-ul-Jadeed, and surrounding localities with fast, reliable service.',
  serviceAreasSubtext: 'Serving all Bahawalpur areas',
  checkAvailability: 'Check Availability',
  contactUs: 'WhatsApp Us',
};
