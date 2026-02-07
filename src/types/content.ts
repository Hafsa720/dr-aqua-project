/**
 * Content Management Type Definitions
 *
 * These types provide TypeScript support for the content management system,
 * ensuring type safety when accessing content from JSON files.
 */

// Common content structures
export interface ButtonContent {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export interface HeroSection {
  title: string;
  titleHighlight?: string;
  titleEnd?: string;
  description: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  subtitle?: string;
}

export interface StatsContent {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceContent {
  title: string;
  shortDescription: string;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  deliveryTime?: string;
  startingPrice?: string;
}

export interface TestimonialContent {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Page-specific content types
export interface HomeContent extends Record<string, unknown> {
  hero: HeroSection & {
    watchVideo?: string;
    stats: {
      projects: string;
      projectsLabel: string;
      clients: string;
      clientsLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
      experience: string;
      experienceLabel: string;
    };
  };
  services: {
    title: string;
    description: string;
    webDevelopment: ServiceContent;
    mobileApps: ServiceContent;
    uiuxDesign: ServiceContent;
    ecommerce: ServiceContent;
    digitalMarketing: ServiceContent;
    consulting: ServiceContent;
  };
  process: {
    title: string;
    description: string;
    steps: {
      discovery: FeatureItem;
      design: FeatureItem;
      development: FeatureItem;
      launch: FeatureItem;
    };
  };
  featuredProjects: {
    title: string;
    description: string;
    viewAllProjects: string;
  };
  testimonials: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
    features: string[];
  };
}

export interface ServicesContent {
  hero: HeroSection;
  services: Record<string, ServiceContent>;
  process: {
    title: string;
    description: string;
    steps: Record<string, FeatureItem & { duration?: string }>;
  };
  whyChooseUs: {
    title: string;
    description: string;
    reasons: FeatureItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export interface ProjectsContent {
  hero: HeroSection;
  filters: {
    all: string;
    categories: Record<string, string>;
    technologies: Record<string, string>;
    searchPlaceholder: string;
    resultsCount: string;
    clearFilters: string;
    noResults: string;
  };
  projectCard: {
    viewProject: string;
    technologies: string;
    category: string;
    year: string;
    client: string;
    duration: string;
  };
  projectDetails: {
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    technologies: string;
    features: string;
    testimonial: string;
    nextProject: string;
    previousProject: string;
    backToProjects: string;
    metrics: {
      performance: string;
      userGrowth: string;
      revenue: string;
      efficiency: string;
    };
  };
  categories: Record<
    string,
    {
      title: string;
      description: string;
    }
  >;
  stats: {
    title: string;
    totalProjects: string;
    totalProjectsLabel: string;
    satisfiedClients: string;
    satisfiedClientsLabel: string;
    onTimeDelivery: string;
    onTimeDeliveryLabel: string;
    avgRating: string;
    avgRatingLabel: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
    features: string[];
  };
}

export interface TeamContent {
  hero: HeroSection;
  teamStats: {
    members: string;
    membersLabel: string;
    experience: string;
    experienceLabel: string;
    projects: string;
    projectsLabel: string;
    satisfaction: string;
    satisfactionLabel: string;
  };
  departments: Record<string, string>;
  memberCard: {
    experience: string;
    projects: string;
    expertise: string;
    contact: string;
    viewProfile: string;
  };
  values: {
    title: string;
    description: string;
    items: (FeatureItem & { icon: string })[];
  };
  benefits: {
    title: string;
    description: string;
    items: (FeatureItem & { icon: string })[];
  };
  joinUs: {
    title: string;
    description: string;
    button: string;
    alternatively: string;
    sendResume: string;
  };
}

export interface CareersContent {
  hero: HeroSection;
  whyJoinUs: {
    title: string;
    description: string;
    benefits: (FeatureItem & { icon: string })[];
  };
  openPositions: {
    title: string;
    description: string;
    noPositions: string;
    applyAnyway: string;
    filters: {
      all: string;
      departments: Record<string, string>;
      levels: Record<string, string>;
      types: Record<string, string>;
    };
  };
  jobCard: {
    department: string;
    level: string;
    type: string;
    location: string;
    salary: string;
    posted: string;
    apply: string;
    viewDetails: string;
    remote: string;
    hybrid: string;
    onsite: string;
  };
  applicationProcess: {
    title: string;
    description: string;
    steps: (FeatureItem & { duration: string })[];
  };
  benefits: {
    title: string;
    description: string;
    categories: Record<
      string,
      {
        title: string;
        items: string[];
      }
    >;
  };
  testimonials: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
    email: string;
  };
}

export interface ContactContent {
  hero: HeroSection;
  contactInfo: {
    title: string;
    description: string;
    methods: Array<{
      type: string;
      title: string;
      value: string;
      description: string;
      icon: string;
    }>;
  };
  contactForm: {
    title: string;
    description: string;
    fields: Record<
      string,
      {
        label: string;
        placeholder: string;
        required: boolean;
        options?: string[];
        minLength?: number;
      }
    >;
    submitButton: string;
    submittingButton: string;
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
  officeHours: {
    title: string;
    timezone: string;
    hours: Record<string, string>;
    note: string;
  };
  socialLinks: {
    title: string;
    description: string;
    platforms: Array<{
      name: string;
      url: string;
      icon: string;
    }>;
  };
}

// Case study content types
export interface CaseStudyMetadata {
  title: string;
  description: string;
  client: string;
  industry: string;
  year: string;
  duration: string;
  team: string;
  budget: string;
  status: string;
  technologies: string[];
  features: string[];
  results: Record<string, string>;
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
  images: {
    hero: string;
    dashboard?: string;
    mobile?: string;
    [key: string]: string | undefined;
  };
  videoUrl?: string;
}

export interface CommonContent extends Record<string, unknown> {
  navigation: {
    home: string;
    services: string;
    projects: string;
    team: string;
    careers: string;
    contact: string;
    toggleTheme: string;
    toggleMobileMenu: string;
  };
  buttons: {
    getStarted: string;
    learnMore: string;
    viewMore: string;
    viewProject: string;
    viewAll: string;
    contactUs: string;
    sendMessage: string;
    apply: string;
    download: string;
    close: string;
    next: string;
    previous: string;
    submit: string;
    cancel: string;
  };
  footer: {
    companyDescription: string;
    quickLinks: string;
    services: string;
    company: string;
    legal: string;
    followUs: string;
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
  forms: {
    labels: Record<string, string>;
    placeholders: Record<string, string>;
    validation: {
      required: string;
      invalidEmail: string;
      minLength: string;
      maxLength: string;
    };
    success: {
      messageSent: string;
      applicationSubmitted: string;
    };
    errors: {
      general: string;
      network: string;
    };
  };
  loading: {
    default: string;
    projects: string;
    team: string;
    sending: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string;
  };
}
