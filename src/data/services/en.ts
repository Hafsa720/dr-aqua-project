import type { Service, Testimonial, WhyChooseUs, ServicePageLabels } from '@/types/service';

export const servicesEn: Service[] = [
  {
    id: 'installation',
    slug: 'professional-installation',
    icon: 'Wrench',
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
    slug: 'maintenance-repair',
    icon: 'Shield',
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
    slug: 'water-quality-testing',
    icon: 'Droplets',
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

export const testimonialsEn: Testimonial[] = [
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

export const whyChooseUsEn: WhyChooseUs[] = [
  {
    title: 'Certified Experts',
    description: 'All technicians are certified and trained',
    icon: 'CheckCircle',
  },
  {
    title: 'Fast Response',
    description: 'Same-day service available',
    icon: 'Clock',
  },
  {
    title: 'Warranty Included',
    description: 'All services backed by warranty',
    icon: 'Shield',
  },
  {
    title: '24/7 Support',
    description: 'Always here when you need us',
    icon: 'Phone',
  },
];

export const serviceLabelsEn: ServicePageLabels = {
  pageTitle: 'Professional Services',
  pageSubtitle: 'Complete Water Solutions',
  pageDescription:
    'From installation to maintenance, our certified experts ensure your water filtration system performs at its best. Book a service today and experience the difference.',
  perService: '/service',
  mostPopular: 'Most Popular',
  bookNow: 'Book Now',
  whyChooseTitle: 'Why Choose Our Services?',
  whyChooseDescription:
    "We're committed to providing the highest quality service for all your water filtration needs.",
  testimonialsTitle: 'What Our Customers Say',
  testimonialsDescription:
    "Don't just take our word for it - hear from our satisfied customers.",
  serviceAreasTitle: 'Service Areas',
  serviceAreasDescription:
    'We proudly serve customers across the region with fast, reliable service. Check if we service your area or contact us for more information.',
  serviceAreasSubtext: 'Serving 50+ cities nationwide',
  checkAvailability: 'Check Service Availability',
  contactUs: 'Contact Us',
};
