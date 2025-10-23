// Application constants and enums

// Job types
export const JobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
] as const;
export const SeniorityLevels = [
  'Junior',
  'Mid-level',
  'Mid-Senior',
  'Senior',
  'Lead',
] as const;

// Technology stack
export const Technologies = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Stripe',
  'Redux',
  'Express',
  'Socket.io',
  'JWT',
  'D3.js',
  'FastAPI',
  'React Native',
  'Firebase',
  'Expo',
  'Vue.js',
  'Django',
  'WebRTC',
  'TensorFlow',
  'IoT',
  'ML',
  'VR',
  'AI',
] as const;

// Project categories
export const ProjectCategories = [
  'Web Development',
  'Web Application',
  'Mobile App',
  'Data Analytics',
  'Enterprise Solution',
  'EdTech',
  'E-commerce',
  'Healthcare',
  'FinTech',
  'Enterprise',
] as const;

// Company information
export const CompanyInfo = {
  name: 'Dr. Aqua',
  tagline: 'Premium Water Solutions',
  email: 'info@draqua.com',
  phone: '+971 50 123 4567',
  whatsapp: '+971501234567',
  location: 'Dubai, UAE',
  founded: 2020,
} as const;

// Social media platforms
export const SocialPlatforms = [
  'LinkedIn',
  'GitHub',
  'Behance',
  'Upwork',
  'Freelancer',
  'Facebook',
  'Instagram',
  'Twitter',
  'WhatsApp',
] as const;

// Export types
export type JobType = (typeof JobTypes)[number];
export type SeniorityLevel = (typeof SeniorityLevels)[number];
export type Technology = (typeof Technologies)[number];
export type ProjectCategory = (typeof ProjectCategories)[number];
export type SocialPlatform = (typeof SocialPlatforms)[number];
