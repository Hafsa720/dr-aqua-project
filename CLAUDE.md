# Claude Code Configuration

This file configures Claude Code with project-specific information and comprehensive architectural documentation for RapidBizz - a modern digital agency platform.

## Project Overview & Business Context

### Company Profile

**RapidBizz** is a cutting-edge digital agency specializing in transformative web development, mobile applications, and digital solutions. Founded with a vision to bridge the gap between innovative technology and business growth, we serve clients across multiple industries including healthcare, fintech, e-commerce, and enterprise solutions.

### Mission Statement

To empower businesses through innovative digital solutions that drive measurable results, enhance user experiences, and accelerate growth in the digital age.

### Core Values

- **Innovation First**: Embracing cutting-edge technologies and creative problem-solving
- **Client Success**: Going above and beyond to deliver exceptional value
- **Quality Excellence**: Creating products that stand the test of time
- **Agile Mindset**: Adapting quickly with iterative value delivery
- **Open Communication**: Fostering transparency and honest collaboration
- **Continuous Learning**: Investing in growth and staying ahead of industry trends

### Target Market

- **Primary**: Small to medium enterprises (SMEs) seeking digital transformation
- **Secondary**: Startups requiring MVP development and scaling solutions
- **Tertiary**: Large enterprises needing specialized development teams

### Competitive Advantage

- Rapid development cycles with 2-4 week MVP delivery
- Full-stack expertise across modern tech stacks
- Design-first approach with UX/UI excellence
- Transparent pricing with AED-based competitive rates
- Remote-first culture enabling global talent access

## Project Structure Access Patterns

Include all relevant files for full project analysis:

- **Configuration files**: `*.config.{js,ts,json}`, `package.json`, `tsconfig.json`, `.env*`
- **Source code**: `src/**/*.{ts,tsx,js,jsx,css,scss}`
- **Components**: `src/components/**/*.{ts,tsx}`
- **Pages/App**: `src/app/**/*.{ts,tsx}`, `src/pages/**/*.{ts,tsx}`
- **Styles**: `src/styles/**/*.{css,scss}`, `tailwind.config.*`
- **Public assets**: `public/**/*`, `public/logo.svg`
- **Documentation**: `*.md`, `docs/**/*.md`
- **GitHub workflows**: `.github/**/*.{yml,yaml}`
- **VSCode settings**: `.vscode/**/*`
- **Type definitions**: `src/types/**/*.ts`
- **Utilities**: `src/lib/**/*.ts`, `src/utils/**/*.ts`
- **Hooks**: `src/hooks/**/*.ts`

## Technology Stack & Architecture

### Core Framework Architecture

This is a Next.js 15+ project leveraging the latest App Router architecture with:

- **Next.js 15+** - React framework with App Router, Server Components, and Edge Runtime
- **React 18+** - With Concurrent Features, Suspense, and Server Components
- **TypeScript 5+** - Strict mode enabled with comprehensive type safety
- **Tailwind CSS v4** - Using @theme syntax and OKLCH color system
- **Framer Motion** - Advanced animations and micro-interactions
- **ESLint + Prettier** - Code quality and formatting with strict rules

### Frontend Architecture Patterns

#### 1. App Router Structure

```
src/app/
├── (root)/                 # Route group for main pages
│   ├── page.tsx           # Home page
│   ├── services/page.tsx  # Services listing
│   ├── projects/page.tsx  # Project portfolio
│   ├── team/page.tsx      # Team overview
│   ├── careers/page.tsx   # Career opportunities
│   └── contact/page.tsx   # Contact form & info
├── projects/
│   └── [slug]/page.tsx    # Dynamic project details
├── layout.tsx             # Root layout with providers
├── loading.tsx            # Global loading UI
├── not-found.tsx          # 404 page
└── globals.css            # Global styles
```

#### 2. Component Architecture

```
src/components/
├── layout/                # Layout components
│   ├── Navigation.tsx     # Header navigation with responsive menu
│   ├── Footer.tsx         # Site footer with links and social
│   └── ThemeProvider.tsx  # Theme context provider
├── ui/                    # Atomic UI components
│   ├── Button.tsx         # Reusable button variants
│   ├── Card3D.tsx         # 3D hover effect cards
│   ├── Modal.tsx          # Modal dialog system
│   └── Input.tsx          # Form input components
├── pages/                 # Page-specific components
│   ├── home/              # Home page sections
│   ├── services/          # Service-related components
│   └── projects/          # Project showcase components
├── features/              # Business logic components
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── ProjectFilter.tsx  # Project filtering system
│   └── CareerApplication.tsx # Job application flow
└── common/                # Shared utility components
    ├── MotionWrapper.tsx  # Framer Motion wrapper
    ├── NextImage.tsx      # Optimized image component
    └── SEO.tsx            # SEO meta management
```

### State Management Strategy

#### 1. Client State

- **React Context** - Theme management and global UI state
- **useState/useReducer** - Local component state
- **URL State** - Search parameters and routing state

#### 2. Server State

- **Next.js App Router** - Server Components for data fetching
- **React Suspense** - Loading states and error boundaries
- **Static Generation** - ISG for dynamic content when possible

#### 3. Form State

- **React Hook Form** - Form validation and submission
- **Zod** - Runtime schema validation
- **Server Actions** - Form submission handling

### Styling Architecture

#### 1. Design System

```css
/* OKLCH Color System */
:root {
  --color-primary: oklch(0.3 0.15 250); /* #082856 - Deep Blue */
  --color-secondary: oklch(0.65 0.15 45); /* #FF8621 - Orange */
  --color-accent: oklch(0.5 0.12 280); /* Purple accent */
  --color-neutral: oklch(0.5 0 0); /* Neutral grays */
}
```

#### 2. Responsive Design Strategy

- **Mobile-First**: Base styles target mobile (320px+)
- **Breakpoints**:
  - `sm`: 640px (tablet portrait)
  - `md`: 768px (tablet landscape)
  - `lg`: 1024px (desktop)
  - `xl`: 1280px (large desktop)
  - `2xl`: 1536px (ultra-wide)

#### 3. Component Variants

- **Button Variants**: primary, secondary, outline, ghost, destructive
- **Card Types**: default, elevated, bordered, glass
- **Typography Scale**: 6 heading levels + body variants
- **Spacing System**: 4px base unit with exponential scale

### Animation & Interaction Framework

#### 1. Framer Motion Integration

```typescript
// Motion Configuration
export const motionConfig = {
  staggerChildren: 0.1,
  pageTransition: { type: 'tween', duration: 0.3 },
  cardHover: { scale: 1.02, y: -4 },
  buttonTap: { scale: 0.95 },
} as const;
```

#### 2. Interaction Patterns

- **Hover States**: Scale, shadow, and color transitions
- **Loading States**: Skeleton loaders and progress indicators
- **Page Transitions**: Smooth route transitions
- **Scroll Animations**: IntersectionObserver-based reveals
- **Form Feedback**: Real-time validation and success states

## Development Commands & Workflow

### Essential Commands

- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build with optimizations
- `npm run start` - Production server
- `npm run lint` - ESLint with strict rules
- `npm run lint:fix` - Auto-fix linting issues
- `npm run typecheck` - TypeScript compilation check
- `npm run format` - Prettier formatting
- `npm run format:check` - Check formatting compliance

### Advanced Commands

- `npm run analyze` - Bundle size analysis
- `npm run lighthouse` - Performance audit
- `npm run test` - Jest test runner
- `npm run test:e2e` - Playwright end-to-end tests
- `npm run storybook` - Component development environment

## Page Architecture & Features

### 1. Home Page (`/`)

**Purpose**: Primary landing page showcasing company overview and services

**Sections**:

- **Hero Section**: Animated headline with CTA, stats overlay
- **Services Overview**: Interactive service cards with hover effects
- **Process Timeline**: Step-by-step development process
- **Featured Projects**: Curated project showcase with metrics
- **Testimonials**: Client feedback with rotating carousel
- **CTA Section**: Contact form integration

**Key Features**:

- Parallax scrolling effects
- Intersection Observer animations
- Performance metrics integration
- Social proof elements

### 2. Services Page (`/services`)

**Purpose**: Comprehensive service offerings with detailed process explanation

**Sections**:

- **Services Hero**: Dynamic service introduction
- **Services Grid**: Interactive service cards with modal details
- **Process Overview**: Visual workflow representation
- **Why Choose Us**: Competitive advantages
- **Stats Section**: Animated counter displays
- **Pricing Tiers**: Service package comparison

**Key Features**:

- Service filtering and search
- Modal-based detail views
- Animated statistics counters
- Process visualization

### 3. Projects Page (`/projects`)

**Purpose**: Portfolio showcase with advanced filtering and detailed case studies

**Sections**:

- **Portfolio Hero**: Project overview with statistics
- **Advanced Filter System**: Category, technology, and text search
- **Project Grid**: Masonry layout with hover interactions
- **Case Study Layout**: Detailed project breakdowns
- **Results Metrics**: ROI and success measurements

**Key Features**:

- **Multi-dimensional Filtering**:
  - Category-based (E-commerce, Healthcare, FinTech, Mobile, Enterprise, EdTech)
  - Technology stack filtering
  - Full-text search across titles and descriptions
  - Results counter with clear-all functionality
- **Interactive Project Cards**: 3D hover effects with gradient overlays
- **Dynamic Content**: Server-side filtering with URL state persistence
- **Performance Metrics**: Load time optimization for image-heavy content

### 4. Team Page (`/team`)

**Purpose**: Team showcase with comprehensive member profiles

**Sections**:

- **Team Hero**: Company culture and values introduction
- **Team Grid**: Compact member cards with essential information
- **Values Section**: Core company principles
- **Benefits Overview**: Employee value proposition
- **Join Us CTA**: Recruitment call-to-action

**Key Features**:

- **Streamlined Member Cards**:
  - Circular profile images (80x80px)
  - Essential info only (name, role, experience)
  - Social media integration
  - Interactive hover states
- **Social Links Management**: Support for multiple platforms
- **Culture Showcase**: Values-driven content
- **Responsive Grid**: 2-4 columns based on screen size

### 5. Careers Page (`/careers`)

**Purpose**: Job opportunities with comprehensive benefits and application process

**Sections**:

- **Careers Hero**: Company culture introduction
- **Open Positions**: Interactive job listings with detailed descriptions
- **Benefits Grid**: Comprehensive employee benefits
- **Application Process**: Step-by-step hiring workflow
- **Employee Testimonials**: Team member experiences

**Key Features**:

- **Job Filtering**: By department, experience level, location
- **Detailed Job Descriptions**: Requirements, responsibilities, benefits
- **Application Integration**: Direct application flow
- **Salary Ranges**: Competitive AED-based compensation
  - Senior Frontend Developer: AED 120k - AED 180k
  - Backend Engineer: AED 100k - AED 150k
  - UI/UX Designer: AED 80k - AED 120k
  - DevOps Engineer: AED 130k - AED 200k

**Benefits Package**:

- Equity sharing (overall and project-based)
- Learning course reimbursement
- Gym/wellness reimbursement
- Passport/visa support for international opportunities
- Mentorship from senior professionals
- Recreational activities and team trips
- Remote-first culture

### 6. Contact Page (`/contact`)

**Purpose**: Multiple contact options with interactive form and FAQ section

**Sections**:

- **Contact Hero**: Engaging introduction with animated elements
- **Contact Options**: Multiple communication channels
- **Contact Form**: Comprehensive inquiry form with validation
- **FAQ Section**: Common questions with smooth animations
- **Social Links**: Professional social media presence

**Key Features**:

- **Enhanced Contact Form**:
  - Multi-field validation with real-time feedback
  - File upload capability for project briefs
  - GDPR-compliant consent management
  - Success/error state handling
- **Interactive FAQ**:
  - Advanced Framer Motion animations
  - Spring-based transitions with stagger effects
  - Smooth expand/collapse with custom easing
  - Search functionality within questions
- **Multiple Contact Methods**: Email, phone, WhatsApp, office visits

## Component Organization & Architecture

### Component Hierarchy Standards

#### 1. Layout Components (`src/components/layout/`)

**Purpose**: App-wide layout and navigation structures

- **Navigation.tsx**:
  - Responsive header with mobile menu
  - Logo integration (SVG-based, no text)
  - Theme toggle integration
  - Smooth scroll navigation
  - Mobile hamburger menu with overlay

- **Footer.tsx**:
  - Multi-column link organization
  - Social media integration
  - Newsletter signup
  - Company information
  - Legal links and compliance

- **ThemeProvider.tsx**:
  - System/light/dark theme management
  - LocalStorage persistence
  - SSR-safe hydration
  - Theme transition animations

#### 2. UI Components (`src/components/ui/`)

**Purpose**: Atomic, reusable interface elements

- **Button.tsx**:
  - Multiple variants (primary, secondary, outline, ghost)
  - Size variants (sm, md, lg, xl)
  - Loading states with spinners
  - Disabled states
  - Icon integration

- **Card3D.tsx**:
  - Mouse-following 3D transformations
  - Customizable intensity settings
  - Theme-aware lighting effects
  - Performance optimized with transform-gpu
  - Reduced motion support

- **Modal.tsx**:
  - Overlay with backdrop blur
  - Focus management and keyboard navigation
  - Animation enter/exit states
  - Portal-based rendering
  - Scroll lock when open

#### 3. Feature Components (`src/components/features/`)

**Purpose**: Business logic and complex interactions

- **ContactForm.tsx**:
  - React Hook Form integration
  - Zod schema validation
  - Server action submission
  - Multi-step form progression
  - Success/error handling

- **ProjectFilter.tsx**:
  - Multi-dimensional filtering logic
  - URL state synchronization
  - Debounced search input
  - Filter count management
  - Clear all functionality

### Component Naming Conventions

1. **PascalCase** for all component files and exports
2. **Descriptive naming** reflecting component purpose
3. **Consistent prefixing** for component types:
   - UI components: direct names (Button, Card, Modal)
   - Feature components: business logic names (ContactForm, ProjectFilter)
   - Page components: page-specific names (HomeHero, ServicesGrid)
4. **Interface naming**: ComponentNameProps for props interfaces
5. **Event handler naming**: handle{Action} pattern (handleSubmit, handleClick)

### Component Best Practices

#### 1. Component Structure

```typescript
// Component template structure
interface ComponentNameProps {
  // Props definition
}

const ComponentName: React.FC<ComponentNameProps> = ({
  // Destructured props
}) => {
  // Hooks and state
  // Event handlers
  // Computed values

  return (
    // JSX with proper semantic HTML
  );
};

export default ComponentName;
export type { ComponentNameProps };
```

#### 2. Performance Optimizations

- **React.memo** for expensive renders
- **useMemo/useCallback** for expensive computations
- **Lazy loading** for code splitting
- **Image optimization** with Next.js Image component
- **Bundle analysis** to identify optimization opportunities

#### 3. Accessibility Standards

- **Semantic HTML** elements for proper screen reader support
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Color contrast** meeting WCAG 2.1 AA standards
- **Focus management** for dynamic content

## Constants & Configuration Management

### Centralized Configuration Files

#### 1. Site Configuration (`src/config/site.ts`)

```typescript
export const SITE_CONFIG = {
  name: 'RapidBizz',
  url: 'https://rapidbizz.com',
  description:
    'Digital agency specializing in innovative web development and digital solutions',
  ogImage: '/og-image-default.png',
  keywords: ['web development', 'digital agency', 'UAE', 'React', 'Next.js'],
  social: {
    twitter: '@rapidbizz',
    linkedin: 'company/rapidbizz',
    github: 'rapidbizz',
  },
  contact: {
    email: 'info@rapidbizz.com',
    phone: '+971 50 123 4567',
    address: 'Business Bay, Dubai, UAE',
  },
} as const;
```

#### 2. Theme Configuration (`src/config/theme.ts`)

```typescript
export const THEME_CONFIG = {
  colors: {
    primary: {
      50: 'oklch(0.97 0.01 250)',
      500: 'oklch(0.3 0.15 250)',
      900: 'oklch(0.15 0.2 250)',
    },
    secondary: {
      50: 'oklch(0.95 0.02 45)',
      500: 'oklch(0.65 0.15 45)',
      900: 'oklch(0.35 0.18 45)',
    },
  },
  spacing: {
    section: '8rem',
    container: '1280px',
  },
  animation: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
  },
} as const;
```

#### 3. API Configuration (`src/config/api.ts`)

```typescript
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.rapidbizz.com',
  timeout: 10000,
  retries: 3,
  endpoints: {
    contact: '/contact',
    newsletter: '/newsletter',
    careers: '/careers/apply',
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;
```

### DRY Principles Implementation

#### 1. Shared Utilities (`src/lib/utils.ts`)

```typescript
// Utility functions for common operations
export const cn = (...classes: string[]) => clsx(classes);
export const formatCurrency = (amount: number, currency = 'AED') =>
  new Intl.NumberFormat('en-AE', { style: 'currency', currency }).format(
    amount,
  );
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
```

#### 2. Custom Hooks (`src/hooks/`)

- **useTheme.ts**: Theme management with system detection
- **useLocalStorage.ts**: Persistent state management
- **useIntersectionObserver.ts**: Scroll-based animations
- **useDebounce.ts**: Input debouncing for search
- **useMediaQuery.ts**: Responsive behavior hooks

#### 3. Type Definitions (`src/types/`)

```typescript
// Global type definitions
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: ProjectCategory;
  year: string;
  metrics?: ProjectMetrics;
  features?: string[];
  testimonial?: string | ClientTestimonial;
  client: string;
  duration: string;
  gradient: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  expertise?: string[];
  experience: string;
  projects: string;
  specialization: string;
  social: SocialLinks;
  gradient: string;
}
```

## Dark Mode Implementation

### Theme System Architecture

#### 1. Theme Provider Implementation

```typescript
// ThemeProvider with system detection
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### 2. CSS Variable Integration

```css
/* Dynamic theme variables */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.15 0 0);
  --muted: oklch(0.95 0 0);
  --border: oklch(0.9 0 0);
}

.dark {
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.95 0 0);
  --muted: oklch(0.1 0 0);
  --border: oklch(0.15 0 0);
}
```

#### 3. Tailwind Integration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
    },
  },
};
```

## Advanced Animation Framework

### Framer Motion Integration

#### 1. Global Animation Configuration

```typescript
// Motion variants for consistent animations
export const MOTION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  staggerChildren: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
  scaleOnHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  },
} as const;
```

#### 2. Page Transition System

```typescript
// Page transitions with App Router
export const PageTransition: React.FC = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);
```

#### 3. Scroll-Based Animations

```typescript
// IntersectionObserver integration
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};
```

## Code Quality & Validation Standards

### MANDATORY: Development Workflow

#### 1. Pre-Commit Validation

```bash
# Essential validation sequence (REQUIRED before any commit)
npm run typecheck    # TypeScript compilation check
npm run lint:strict  # ESLint with strict rules
npm run format:check # Prettier formatting validation
npm run test         # Unit tests
```

#### 2. ESLint Configuration

```javascript
// .eslintrc.js - Strict quality standards
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'prefer-const': 'error',
    'no-console': 'warn',
  },
};
```

#### 3. CI/CD Pipeline Integration

```yaml
# .github/workflows/quality-check.yml
name: Quality Check
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint:strict
      - run: npm run format:check
      - run: npm run build
```

## Performance Optimization Strategy

### 1. Bundle Optimization

- **Code Splitting**: Route-based and component-based splitting
- **Tree Shaking**: Elimination of unused code
- **Bundle Analysis**: Regular monitoring of bundle sizes
- **Dynamic Imports**: Lazy loading for non-critical components

### 2. Image Optimization

- **Next.js Image Component**: Automatic optimization and lazy loading
- **WebP Format**: Modern image formats with fallbacks
- **Responsive Images**: Multiple sizes for different viewports
- **Priority Loading**: Above-fold image prioritization

### 3. Core Web Vitals

- **LCP Target**: < 2.5s (Largest Contentful Paint)
- **FID Target**: < 100ms (First Input Delay)
- **CLS Target**: < 0.1 (Cumulative Layout Shift)
- **Performance Monitoring**: Lighthouse CI integration

## Security Implementation

### 1. Content Security Policy

```typescript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; img-src 'self' https:; script-src 'self'",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
```

### 2. Form Security

- **CSRF Protection**: Token-based request validation
- **Input Sanitization**: XSS prevention measures
- **Rate Limiting**: API endpoint protection
- **Data Validation**: Server-side validation with Zod

### 3. Environment Security

- **Environment Variables**: Secure configuration management
- **API Key Protection**: Server-side only sensitive keys
- **HTTPS Enforcement**: Secure connection requirements

## Testing Strategy

### 1. Unit Testing (Jest)

```typescript
// Component testing example
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  it('renders with correct variant classes', () => {
    render(<Button variant="primary">Test Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-600');
  });
});
```

### 2. Integration Testing (Playwright)

```typescript
// E2E testing for critical user flows
import { test, expect } from '@playwright/test';

test('contact form submission', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="email"]', 'test@example.com');
  await page.click('[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### 3. Visual Regression Testing

- **Storybook Integration**: Component visual testing
- **Chromatic**: Automated visual testing in CI
- **Cross-browser Testing**: Multi-browser compatibility

## Accessibility Standards (WCAG 2.1 AA)

### 1. Semantic HTML Structure

```typescript
// Proper semantic structure
const Navigation = () => (
  <nav role="navigation" aria-label="Main navigation">
    <ul>
      <li><a href="/" aria-current="page">Home</a></li>
      <li><a href="/services">Services</a></li>
    </ul>
  </nav>
);
```

### 2. Keyboard Navigation

- **Tab Order**: Logical keyboard navigation flow
- **Focus Management**: Visible focus indicators
- **Skip Links**: Content accessibility shortcuts
- **Modal Focus Trapping**: Contained keyboard navigation

### 3. Screen Reader Support

- **ARIA Labels**: Descriptive element labeling
- **Alt Text**: Comprehensive image descriptions
- **Form Labels**: Associated form field labels
- **Status Announcements**: Dynamic content updates

## Deployment & Infrastructure

### 1. Hosting Strategy

- **Primary**: Vercel with automatic deployments
- **CDN**: Global edge network distribution
- **Domain**: Custom domain with SSL/TLS
- **Analytics**: Performance and usage monitoring

### 2. Environment Configuration

```bash
# Environment variables structure
NEXT_PUBLIC_SITE_URL=https://rapidbizz.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
CONTACT_FORM_API_KEY=secure_api_key
DATABASE_URL=connection_string
```

### 3. Monitoring & Analytics

- **Google Analytics 4**: User behavior tracking
- **Core Web Vitals**: Performance monitoring
- **Error Tracking**: Sentry integration
- **Uptime Monitoring**: Site availability checks

# important-instruction-reminders

## Development Guidelines

1. **Code Quality First**: Always run validation before commits
2. **Component Reusability**: Build for reuse and maintainability
3. **Performance Consciousness**: Optimize for Core Web Vitals
4. **Accessibility Integration**: WCAG 2.1 AA compliance
5. **Type Safety**: Comprehensive TypeScript usage
6. **Testing Coverage**: Unit and integration testing requirements
7. **Documentation**: Update docs with architectural changes

## File Creation Policy

- **NEVER create files** unless absolutely necessary for functionality
- **ALWAYS prefer editing** existing files over creating new ones
- **NEVER proactively create** documentation or README files
- **Only create documentation** when explicitly requested

## Architecture Principles

- **Design System Consistency**: Maintain cohesive visual language
- **Performance First**: Optimize for speed and efficiency
- **Accessibility By Default**: Include accessibility in initial development
- **Mobile-First Responsive**: Start with mobile, enhance for desktop
- **SEO Optimization**: Structure for search engine visibility
- **Security Integration**: Build security considerations into architecture

This comprehensive documentation serves as the single source of truth for RapidBizz development standards, architectural decisions, and implementation guidelines. All team members should reference this document for consistent development practices.
