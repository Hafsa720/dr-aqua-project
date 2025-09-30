// Common types used throughout the application
import type {
  JobType,
  ProjectCategory,
  SeniorityLevel,
  Technology,
} from './constants';

export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: Technology[];
  category: ProjectCategory;
  year: string;
  client?: string;
  duration?: string;
  team?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  liveUrl?: string;
  githubUrl?: string;
  gallery?: string[];
  gradient?: string;
  metrics?: {
    growth?: string;
    users?: string;
    rating?: string;
  };
  features?: string[];
  testimonial?:
    | string
    | {
        name: string;
        role: string;
        content: string;
        avatar?: string;
        author?: string;
      };
}

// Team types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  portfolio?: string;
  social: {
    linkedin?: string;
    github?: string;
    behance?: string;
    upwork?: string;
    freelancer?: string;
  };
  expertise?: string[];
  specialization?: string;
  experience?: string;
  quote?: string;
  projects?: string;
  gradient?: string;
  roleIcon?: React.ComponentType<{ className?: string }>;
}

// Service types
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
  features?: string[];
  color?: string;
  bgColor?: string;
  technologies?: string[];
  startingPrice?: string;
  deliveryTime?: string;
  testimonial?: {
    name?: string;
    role?: string;
    content: string;
    avatar?: string;
    author?: string;
  };
}

// Job types
export interface Job {
  id: string;
  title: string;
  location: string;
  type: JobType;
  seniority: SeniorityLevel;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  salary?: string;
  icon?: React.ComponentType<{ className?: string }>;
  gradient?: string;
}

// Contact types
export interface ContactOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  contact: string;
  link: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
}

// Quote types
export interface QuoteData {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  requirements: string;
  priority: 'standard' | 'urgent';
  service: Service;
  createdAt?: Date;
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
}

// Benefit types
export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description?: string;
  bg?: string;
  color?: string;
}

// Value types
export interface CompanyValue {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  bg?: string;
  color?: string;
}

// Process step types
export interface ProcessStep {
  step?: string;
  title?: string;
  description?: string;
  label?: string;
}

// Generic API response type
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

// Generic pagination type
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: Pagination;
}

// Re-export everything from other type files
export * from './components';
export * from './constants';
