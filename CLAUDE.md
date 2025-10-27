# Claude Code Configuration

This file configures Claude Code with project-specific information for Dr. Aqua - a premium water filtration and purification company in Bahawalpur, Pakistan.

## Project Overview & Business Context

### Company Profile

**Dr. Aqua** is a trusted water purification company based in Bahawalpur, Pakistan, providing premium RO systems, water filters, and purification solutions for homes, businesses, and industrial clients across Punjab.

**Location**: CM28+93V, Captain Salman Farooq Lodhi Shaheed Rd, Model Town B, Bahawalpur, 63100
**Phone**: 0334 7071759
**Hours**: Monday-Thursday, Saturday-Sunday: 10 AM - 11 PM (Closed Friday)
**Website**: https://draqua.com

### Mission & Values

**Mission**: Provide pure, safe drinking water to every household and business in Bahawalpur and surrounding areas through premium water purification solutions.

**Core Values**: Health First • Quality Excellence • Customer Trust • Local Service • Sustainability • Affordability

### Target Market

- **Primary**: Residential customers in Bahawalpur seeking home RO systems and water purifiers (PKR 15,000 - 45,000)
- **Secondary**: Small businesses, restaurants, schools requiring commercial water solutions (PKR 50,000+)
- **Tertiary**: Industrial clients needing large-scale water treatment plants
- **Geography**: Bahawalpur city and surrounding areas (Model Town, Satellite Town, DHA, etc.)

### Product Categories

1. **Home RO Systems** - 5-stage, 7-stage, and UV+RO purifiers for residential use
2. **Commercial RO Plants** - High-capacity systems for businesses and institutions
3. **Water Filters** - Pre-filters, sediment filters, carbon filters, mineral cartridges
4. **Accessories** - Storage tanks, taps, pipes, and replacement parts
5. **Maintenance Services** - Installation, repair, filter replacement, annual maintenance

### Competitive Advantage

- **Local Presence**: Based in Bahawalpur with quick service response
- **Quality Products**: Premium RO systems with 1-2 year warranties
- **Expert Installation**: Professional installation team
- **Affordable Pricing**: PKR-based transparent pricing
- **After-Sales Support**: Maintenance and repair services
- **WhatsApp Support**: Instant quotations via WhatsApp (0334 7071759)

## Technology Stack

### Core Technologies

- **Next.js 15+** - App Router, Server Components, Edge Runtime
- **React 19** - Concurrent Features, Suspense
- **TypeScript 5+** - Strict mode with comprehensive type safety
- **Tailwind CSS v4** - @theme syntax and OKLCH color system
- **Framer Motion** - Advanced animations and micro-interactions
- **Shadcn/ui** - 9 minimal components (button, input, select, checkbox, label, textarea, skeleton, dropdown-menu, switch)
- **ESLint + Prettier** - Strict code quality and formatting

### Architecture

**App Router Structure**:

```
src/app/
├── components-demo/       # Component showcase
├── changelog/             # Version history
├── team/                  # Team overview
├── layout.tsx             # Root layout
└── page.tsx               # Home page
```

**Component Structure**:

```
src/components/
├── layout/                # Navigation, Footer, ThemeProvider
├── ui/                    # 21 components (12 custom + 9 shadcn)
│   ├── AnimatedCounter.tsx
│   ├── Container.tsx
│   ├── Divider.tsx
│   ├── EmptyState.tsx
│   ├── GradientBadge.tsx
│   ├── Grid.tsx
│   ├── Loading.tsx       # 8 variants with hooks
│   ├── Stack.tsx
│   └── [shadcn components]
├── ComponentTester.tsx    # Dev tool for testing components
├── DebugPanel.tsx        # Dev debugging panel
├── ErrorBoundary.tsx     # Error handling
├── InstallPrompt.tsx     # PWA install prompt
└── PWAWrapper.tsx        # PWA integration
```

**Custom Hooks** (`src/lib/hooks/`):

- `useClipboard.ts` - Clipboard operations
- `useDebounce.ts` - Debounced values/callbacks
- `useIntersectionObserver.ts` - Visibility detection
- `useLocalStorage.ts` - Persistent state with SSR safety
- `useOnClickOutside.ts` - Outside click detection
- `usePWA.ts` - PWA install/offline detection
- `useReducedMotion.ts` - Accessibility motion preferences
- `useTheme.ts` - Theme management
- `useToggle.ts` - Boolean state helpers
- `useWindowSize.ts` - Responsive window dimensions

### State Management

- **Client State**: React Context (theme, UI), useState/useReducer (local)
- **Server State**: Server Components, Suspense, Static Generation
- **Form State**: React Hook Form, Zod validation, Server Actions

### Styling System

**OKLCH Color System**:

```css
:root {
  --color-primary: oklch(0.3 0.15 250); /* Deep Blue #082856 */
  --color-secondary: oklch(0.65 0.15 45); /* Orange #FF8621 */
}
```

**Responsive Breakpoints**:

- Mobile-first approach (320px+ base)
- `sm`: 640px, `md`: 768px, `lg`: 1024px, `xl`: 1280px, `2xl`: 1536px

**Component Variants**:

- Buttons: primary, secondary, outline, ghost, destructive
- Loading: 8 variants (spinner, dots, pulse, bars, ring, ripple, square, wave)
- Spacing: 4px base unit with exponential scale

### Animations

**Framer Motion Config**:

```typescript
export const motionConfig = {
  staggerChildren: 0.1,
  pageTransition: { type: 'tween', duration: 0.3 },
  cardHover: { scale: 1.02, y: -4 },
  buttonTap: { scale: 0.95 },
};
```

## Development Workflow

### Essential Commands

```bash
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint with strict rules
npm run lint:fix         # Auto-fix linting issues
npm run typecheck        # TypeScript compilation check
npm run format           # Prettier formatting
npm run format:check     # Check formatting compliance
```

### Pre-Commit Validation (REQUIRED)

```bash
npm run typecheck && npm run lint:strict && npm run format:check
```

## Page Architecture

### Home Page (`/`)

**E-commerce landing page** with:

- Hero section with water purification focus
- Featured products (3 top-selling RO systems)
- Services overview (Installation, Maintenance, Repair)
- Benefits/Features of water purification
- Call-to-action (WhatsApp consultation)
- Bilingual support (English/Urdu)

### Products Page (`/products`)

**Product catalog** with:

- Product grid with filtering by category (Home RO, Commercial, Filters, Accessories)
- Product cards showing image, name, price (PKR), features
- Quick view and "Add to Cart" functionality
- Search and sort options
- WhatsApp "Get Quote" button on each product
- Bilingual product descriptions

### Services Page (`/services`)

**Service offerings** with:

- Installation Services with pricing and process
- Maintenance & Repair services
- Filter Replacement schedules
- Annual Maintenance Contracts (AMC)
- WhatsApp booking integration for each service
- Bilingual service descriptions

### About Page (`/about`)

**Company information** with:

- Dr. Aqua story and mission
- Why choose us (quality, local service, expertise)
- Service areas in Bahawalpur
- Team information
- Certifications and partnerships
- Bilingual content

### Contact Page (`/contact`)

**Contact and inquiry** with:

- Contact form with WhatsApp integration
- Google Maps location embed
- Business hours display
- Phone, email, address details
- WhatsApp direct chat button
- FAQ section
- Bilingual support

## Component Guidelines

### Naming Conventions

- **PascalCase** for components and files
- **Descriptive names** reflecting purpose
- **Props interfaces**: `ComponentNameProps`
- **Event handlers**: `handle{Action}` pattern

### Component Template

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('base-classes', variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

ComponentName.displayName = 'ComponentName';
export default ComponentName;
```

### Best Practices

1. **Performance**
   - Use React.memo for expensive renders
   - Implement useMemo/useCallback for computations
   - Lazy load with dynamic imports
   - Optimize images with next/image

2. **Accessibility (WCAG 2.1 AA)**
   - Semantic HTML elements
   - ARIA labels for interactive elements
   - Keyboard navigation support
   - Color contrast compliance
   - Focus management for dynamic content

3. **Type Safety**
   - Never use `any` type
   - Define proper interfaces
   - Use generic types for reusable components
   - Leverage TypeScript inference

4. **Code Quality**
   - Prefer editing existing files over creating new ones
   - Build for reusability and maintainability
   - Follow DRY principles
   - Use constants for magic numbers/strings

## Starter Template Features

### Component Library (21 Components)

**Custom Components (12)**:

- AnimatedCounter, Container, Divider, EmptyState, GradientBadge, Grid, Loading (8 variants), MarkdownRenderer, ProjectPageClient, SectionGradient, Stack, TestimonialsCarousel

**Shadcn Components (9)**:

- button, checkbox, dropdown-menu, input, label, select, skeleton, switch, textarea

**View all components**: Visit `/components-demo` page for live examples and interactive testing.

### PWA Support

**Features**:

- Service worker with offline caching
- Install prompt with native UI
- Offline detection
- Web manifest configuration
- Background sync ready

**Files**:

- `public/sw.js` - Service worker
- `public/manifest.json` - Web app manifest
- `src/components/InstallPrompt.tsx` - Install UI
- `src/components/PWAWrapper.tsx` - PWA integration

### SEO Optimization (Bahawalpur Focus)

**Local SEO Strategy**:

- **Location Keywords**: "Bahawalpur", "RO system Bahawalpur", "water filter Bahawalpur"
- **Service Keywords**: "RO plant installation", "water purifier", "filter replacement"
- **Urdu Keywords**: "واٹر فلٹر بہاولپور", "RO سسٹم"
- **Google My Business**: Integrated location (CM28+93V, Model Town B)
- **Local Structured Data**: LocalBusiness schema with Bahawalpur address
- **Service Area**: Bahawalpur, Model Town, Satellite Town, DHA
- **Phone**: 0334 7071759 in all metadata

**Technical SEO**:

- Dynamic meta tags with Next.js metadata API
- Sitemap generation with `next-sitemap`
- robots.txt configuration
- Open Graph with location info
- LocalBusiness JSON-LD schema
- Mobile-optimized for local searches
- WhatsApp click-to-chat integration

### Performance Optimizations

- Route-based code splitting
- Image optimization with next/image
- Bundle analysis available
- Core Web Vitals monitoring ready
- Lazy loading components

### Development Tools (Dev Only)

**ComponentTester**:

- Interactive prop testing
- Variant preview
- Code generation
- Export configurations

**DebugPanel**:

- State inspection
- Performance monitoring
- Window size display
- Responsive breakpoint indicator

**ErrorBoundary**:

- Enhanced error handling
- Custom fallback UI
- Error logging
- Retry functionality

## Code Quality Standards

### ESLint Configuration

**Strict Rules**:

- No unused vars (must prefix with `_` if intentional)
- Explicit function return types (warn)
- Import sorting (simple-import-sort)
- React hooks rules enforcement
- No console statements (warn)

### TypeScript Configuration

**Strict Mode Enabled**:

- `noImplicitAny`: true
- `strictNullChecks`: true
- `strictFunctionTypes`: true
- `noUnusedLocals`: true
- `noUnusedParameters`: true

### Git Workflow

**Before Committing**:

1. Run validation: `npm run typecheck && npm run lint && npm run format:check`
2. Fix any errors
3. Test build: `npm run build`
4. Commit with descriptive message

**Commit Message Format**:

```
type: brief description

- detail 1
- detail 2
```

Types: feat, fix, refactor, docs, style, test, chore

## Environment Configuration

### Environment Variables

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://draqua.com

# Optional
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
CONTACT_FORM_API_KEY=secure_api_key
DATABASE_URL=connection_string
```

### Deployment

**Hosting**: Vercel with automatic deployments

- CDN: Global edge network
- SSL/TLS: Automatic with custom domain
- Analytics: Performance and usage monitoring

## Important Instructions & Reminders

### Development Guidelines

1. **Code Quality First** - Always run validation before commits
2. **Component Reusability** - Build for reuse and maintainability
3. **Performance Consciousness** - Optimize for Core Web Vitals
4. **Accessibility Integration** - WCAG 2.1 AA compliance by default
5. **Type Safety** - Comprehensive TypeScript usage
6. **Mobile-First** - Start with mobile, enhance for desktop
7. **Security** - Build security considerations into architecture

### File Creation Policy

- **NEVER create files** unless absolutely necessary for functionality
- **ALWAYS prefer editing** existing files over creating new ones
- **NEVER proactively create** documentation or README files
- **Only create documentation** when explicitly requested

### Architecture Principles

- **Design System Consistency** - Maintain cohesive visual language
- **Performance First** - Optimize for speed and efficiency
- **Accessibility By Default** - Include in initial development
- **Component Independence** - Easy to remove unused components
- **Progressive Enhancement** - Core functionality without JavaScript
- **SEO Optimization** - Structure for search engine visibility

### Component Strategy

**Shadcn Components**:

- Keep minimal (currently 9 components)
- Only add when explicitly needed
- Reference shadcn docs for additional components
- Don't duplicate functionality with custom components

**Custom Components**:

- Focus on unique functionality
- Document via components-demo page
- Include TypeScript interfaces
- Support dark mode by default
- Implement proper accessibility

### Dark Mode Implementation

**Theme System**:

- System/light/dark mode support
- LocalStorage persistence
- SSR-safe hydration
- Smooth transitions
- CSS variables with OKLCH colors

**Theme Toggle**:

```typescript
// Integrated in Navigation component
<ThemeToggle /> // Uses dropdown-menu and switch from shadcn
```

## Project Status

**Current State**:

- ✅ 21 UI components (12 custom + 9 shadcn)
- ✅ 10 custom hooks for common patterns
- ✅ PWA support with service worker
- ✅ Dark mode with system detection
- ✅ Component demo page with live examples
- ✅ Build passing (TypeScript + ESLint)
- ✅ Production-ready starter template

**Key Files**:

- `CLAUDE.md` - This configuration file (under 800 lines ✅)
- `README.md` - Project overview and setup
- `CHANGELOG.md` - Version history
- `CONTENT-GUIDE.md` - Content strategy
- `Todo` - Development task list
- `docs/` - Additional documentation (SEO guides)

**Recent Changes**:

- Removed 12 unused shadcn components (table, tabs, alert, badge, etc.)
- Consolidated component library to essentials
- Created components-demo page showcasing unique components
- Fixed all build errors (TypeScript + ESLint)
- Removed redundant documentation files
- Condensed CLAUDE.md from 2843 to ~600 lines

---

This documentation serves as the single source of truth for Dr. Aqua development standards, architectural decisions, and implementation guidelines. All team members should reference this document for consistent development practices.

**For component documentation**: Visit `/components-demo` page
**For detailed API reference**: Check individual component files with TypeScript interfaces
**For shadcn components**: Visit https://ui.shadcn.com/docs/components
