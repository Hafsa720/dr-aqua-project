# GitHub Copilot Instructions for RapidBizz

## Project Overview

RapidBizz is a modern digital agency website built with **Next.js 15 App Router**, featuring a production-ready starter template with 21 custom UI components, PWA support, and comprehensive development tools.

## Tech Stack

- **Next.js 15+** - App Router, Server Components, Edge Runtime
- **React 19** - Concurrent Features, Suspense
- **TypeScript 5+** - Strict mode with comprehensive type safety
- **Tailwind CSS v4** - @theme syntax and OKLCH color system
- **Framer Motion** - Advanced animations and micro-interactions
- **Shadcn/ui** - 9 minimal components (button, input, select, checkbox, label, textarea, skeleton, dropdown-menu, switch)
- **ESLint + Prettier** - Strict code quality and formatting

## Project Structure

```
src/
├── app/
│   ├── components-demo/    # Component showcase page
│   ├── changelog/          # Version history
│   ├── team/               # Team overview
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Navigation, Footer, ThemeProvider
│   ├── ui/                 # 21 components (12 custom + 9 shadcn)
│   │   ├── AnimatedCounter.tsx
│   │   ├── Container.tsx
│   │   ├── Divider.tsx
│   │   ├── EmptyState.tsx
│   │   ├── GradientBadge.tsx
│   │   ├── Grid.tsx
│   │   ├── Loading.tsx     # 8 variants with hooks
│   │   ├── Stack.tsx
│   │   └── [shadcn components]
│   ├── ComponentTester.tsx # Dev tool for testing
│   ├── DebugPanel.tsx      # Dev debugging panel
│   ├── ErrorBoundary.tsx   # Error handling
│   ├── InstallPrompt.tsx   # PWA install prompt
│   └── PWAWrapper.tsx      # PWA integration
├── lib/
│   ├── hooks/              # 10 custom hooks
│   ├── utils.ts            # cn() utility
│   └── serviceWorker.ts    # PWA service worker
├── types/                  # TypeScript interfaces
└── styles/
    └── globals.css         # Global styles with OKLCH colors
```

## Component Library (21 Components)

### Custom Components (12)

**Layout Components**:

- `Container.tsx` - Content container with size presets (sm, md, lg, xl, 2xl)
- `Grid.tsx` - Responsive CSS Grid wrapper
- `Stack.tsx` - Vertical/horizontal flex stack (HStack, VStack)
- `Divider.tsx` - Visual separator with label support

**Display Components**:

- `AnimatedCounter.tsx` - Animated number counter with IntersectionObserver
- `GradientBadge.tsx` - Badge with gradient background
- `EmptyState.tsx` - Empty state display with action buttons

**Feedback Components**:

- `Loading.tsx` - 8 variants (spinner, dots, pulse, bars, ring, ripple, square, wave)
  - Includes: LoadingButton, PageLoading, SuspenseLoading, LoadingOverlay
  - Hook: `useLoading()` for state management

**Utility Components**:

- `MarkdownRenderer.tsx` - Markdown to React component
- `ProjectPageClient.tsx` - Client-side project page wrapper
- `SectionGradient.tsx` - Section background gradients
- `TestimonialsCarousel.tsx` - Testimonial slider

### Shadcn Components (9)

Essential form and UI components from shadcn/ui:

- `button.tsx` - Button with variants
- `checkbox.tsx` - Checkbox with label
- `dropdown-menu.tsx` - Dropdown menu system
- `input.tsx` - Text input with validation
- `label.tsx` - Form label
- `select.tsx` - Select dropdown
- `skeleton.tsx` - Loading placeholder
- `switch.tsx` - Toggle switch
- `textarea.tsx` - Multi-line text input

**Adding More**: Visit https://ui.shadcn.com/docs/components

## Custom Hooks (10)

Located in `src/lib/hooks/`:

**State Management**:

```typescript
// Persistent localStorage with SSR safety
const [value, setValue, remove] = useLocalStorage('key', initialValue);

// Debounced values
const debouncedValue = useDebounce(searchTerm, 500);

// Toggle state with helpers
const [isOpen, { toggle, on, off, setTrue, setFalse }] = useToggle(false);

// Clipboard operations
const { copy, copied, error } = useClipboard();
```

**UI Hooks**:

```typescript
// Intersection observer for scroll animations
const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

// Window dimensions with breakpoints
const { width, height } = useWindowSize();

// Click outside detection
useOnClickOutside(ref, () => setIsOpen(false));

// Reduced motion preference
const prefersReducedMotion = useReducedMotion();
```

**PWA Hooks**:

```typescript
// PWA install and offline detection
const {
  isInstallable,
  isInstalled,
  isOffline,
  isSupported,
  install,
  promptInstall,
  canInstall,
} = usePWA();
```

**Theme Hook**:

```typescript
// Theme management
const { theme, setTheme } = useTheme(); // 'light' | 'dark' | 'system'
```

## Key Patterns

### Component Template

Always use this pattern for new components:

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('base-classes', variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
export default ComponentName;
```

### Animation Pattern

Using Framer Motion with reduced motion support:

```typescript
import { motion } from 'framer-motion';
import { useReducedMotion, getMotionConfig } from '@/lib/hooks/useReducedMotion';

const Component = () => {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = getMotionConfig(
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 }
    },
    prefersReducedMotion
  );

  return <motion.div {...motionProps}>{content}</motion.div>;
};
```

### Staggered Grid Animations

```typescript
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Hover Effects

```typescript
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  {content}
</motion.div>
```

## Styling System

### OKLCH Color System

```css
:root {
  --color-primary: oklch(0.3 0.15 250); /* Deep Blue #082856 */
  --color-secondary: oklch(0.65 0.15 45); /* Orange #FF8621 */
}

.dark {
  --color-primary: oklch(0.4 0.18 250);
  --color-secondary: oklch(0.7 0.18 45);
}
```

### Responsive Breakpoints

Mobile-first approach:

- Base: 320px+
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

```typescript
// Example usage
className = 'text-sm md:text-base lg:text-lg';
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
```

### Component Variants

```typescript
// Button variants
variant: 'default' |
  'primary' |
  'secondary' |
  'outline' |
  'ghost' |
  'destructive';

// Loading variants
variant: 'spinner' |
  'dots' |
  'pulse' |
  'bars' |
  'ring' |
  'ripple' |
  'square' |
  'wave';

// Size variants (common)
size: 'sm' | 'md' | 'lg' | 'xl';
```

## Dark Mode

Theme system with system detection:

```typescript
// ThemeProvider wraps app in layout.tsx
import { ThemeProvider } from '@/components/layout/ThemeProvider';

// Theme toggle in Navigation
<ThemeToggle /> // Uses dropdown-menu and switch from shadcn

// Always use dark: prefix for dark mode styles
className="bg-white dark:bg-gray-900"
className="text-gray-900 dark:text-gray-100"
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

**Always run before committing**:

```bash
npm run typecheck && npm run lint && npm run format:check
```

Fix issues:

```bash
npm run lint:fix && npm run format
```

## Code Quality Standards

### ESLint Rules

- No unused vars (prefix with `_` if intentional)
- Explicit function return types (warn)
- Import sorting (simple-import-sort)
- React hooks rules enforcement
- No console statements (warn)

### TypeScript Strict Mode

```typescript
// ❌ Bad - Never use any
const data: any = fetchData();

// ✅ Good - Define proper types
interface User {
  id: string;
  name: string;
  email: string;
}
const data: User = fetchData();

// ✅ Good - Use generic types
function fetchData<T>(): Promise<T> {
  return api.get<T>('/data');
}
```

### Import Organization

```typescript
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Internal imports with @/ alias
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/hooks/useTheme';

// 3. Type imports
import type { User } from '@/types';
```

## PWA Support

### Service Worker

Located at `public/sw.js`:

- Precache assets
- Runtime caching
- Offline support
- Background sync ready

### Web Manifest

Located at `public/manifest.json`:

- App name and icons
- Display mode: standalone
- Theme colors
- Shortcuts

### Install Prompt

```typescript
import InstallPrompt from '@/components/InstallPrompt';

// Show install banner
<InstallPrompt
  variant="banner"
  position="bottom"
  showOfflineIndicator
  hideAfterInstall
/>

// Or use button variant
<InstallPrompt variant="button" />
```

## Accessibility Standards (WCAG 2.1 AA)

### Required Patterns

```typescript
// 1. Semantic HTML
<button> vs <div onClick>
<nav>, <main>, <article>, <section>

// 2. ARIA labels
<button aria-label="Close menu" onClick={close}>
  <X />
</button>

// 3. Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') handleAction();
  if (e.key === 'Escape') close();
}}

// 4. Focus management
const ref = useRef<HTMLButtonElement>(null);
useEffect(() => {
  if (isOpen) ref.current?.focus();
}, [isOpen]);

// 5. Reduced motion
const prefersReducedMotion = useReducedMotion();
const animation = prefersReducedMotion ? { duration: 0 } : { duration: 0.3 };
```

## Common Patterns

### Form with Validation

```typescript
import { Input, Select, Checkbox, Button } from '@/components/ui';

<form onSubmit={handleSubmit}>
  <Input
    label="Email"
    type="email"
    error={errors.email}
    required
  />
  <Select
    label="Country"
    options={countries}
    searchable
  />
  <Checkbox
    label="Subscribe to newsletter"
    checked={subscribe}
    onChange={setSubscribe}
  />
  <Button type="submit" variant="primary">
    Submit
  </Button>
</form>
```

### Loading States

```typescript
import { Loading, useLoading } from '@/components/ui/Loading';

// Using hook
const { loading, startLoading, stopLoading } = useLoading();

// Different variants
<Loading variant="spinner" size="lg" text="Loading..." />
<Loading variant="dots" color="primary" />
<Loading variant="pulse" />

// Full-page loading
<Loading variant="spinner" fullscreen overlay backdrop />

// Button with loading
<LoadingButton loading={isSubmitting}>
  Submit
</LoadingButton>
```

### Layout Composition

```typescript
import { Container, Grid, Stack } from '@/components/ui';

<Container size="lg" padding>
  <Grid cols={{ default: 1, md: 2, lg: 3 }} gap={4}>
    {items.map(item => (
      <Stack key={item.id} direction="vertical" spacing={4}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Stack>
    ))}
  </Grid>
</Container>
```

### Error Handling

```typescript
import ErrorBoundary from '@/components/ErrorBoundary';

<ErrorBoundary
  fallback={(error, retry) => (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={retry}>Try again</button>
    </div>
  )}
  onError={(error, errorInfo) => {
    console.error('Error:', error, errorInfo);
  }}
>
  <YourComponent />
</ErrorBoundary>
```

## Development Tools (Dev Only)

### ComponentTester

Interactive component testing:

```typescript
import ComponentTester from '@/components/ComponentTester';

<ComponentTester
  componentName="Button"
  defaultProps={{ variant: 'primary', children: 'Click me' }}
  propControls={{
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'outline']
    },
    disabled: { type: 'boolean' }
  }}
  variants={[
    { name: 'Primary', props: { variant: 'primary' } },
    { name: 'Secondary', props: { variant: 'secondary' } }
  ]}
/>
```

### DebugPanel

Development debugging:

```typescript
import DebugPanel from '@/components/DebugPanel';

<DebugPanel
  data={{ user, settings, state }}
  showWindowInfo
  position="bottom-right"
/>
```

## Important Reminders

### File Creation Policy

- ❌ **NEVER create files** unless absolutely necessary
- ✅ **ALWAYS prefer editing** existing files
- ❌ **NEVER proactively create** documentation files
- ❌ **NO TEST FILES** - Components don't include tests

### Component Strategy

**Shadcn Components**:

- Keep minimal (currently 9 components)
- Only add when explicitly needed
- Reference https://ui.shadcn.com/docs/components for more

**Custom Components**:

- Focus on unique functionality
- Support dark mode by default
- Include TypeScript interfaces
- Implement proper accessibility
- Add to `/components-demo` page for showcase

### Best Practices

1. **Type Safety** - Never use `any`, define proper interfaces
2. **Performance** - Use React.memo, useMemo, useCallback where needed
3. **Accessibility** - WCAG 2.1 AA compliance by default
4. **Responsive** - Mobile-first approach
5. **Dark Mode** - Always support dark mode with `dark:` prefix
6. **Code Quality** - Run validation before committing
7. **Imports** - Use `@/` alias for absolute imports
8. **Components** - Use React.forwardRef for reusable components

## Git Workflow

### Commit Message Format

```
type: brief description

- detail 1
- detail 2
```

**Types**: feat, fix, refactor, docs, style, test, chore

### Before Committing

1. Run validation: `npm run typecheck && npm run lint && npm run format:check`
2. Fix any errors
3. Test build: `npm run build`
4. Commit with descriptive message

## Key Files

- `CLAUDE.md` - Complete project documentation (444 lines)
- `README.md` - Project overview and setup
- `CHANGELOG.md` - Version history
- `tailwind.config.ts` - Tailwind configuration with OKLCH colors
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Component Showcase

Visit `/components-demo` page to see all 21 components with:

- Live interactive examples
- Component variants
- Props documentation
- Shadcn component reference
- Interactive component tester (dev only)

---

**This is a production-ready Next.js starter template focused on quality over quantity. All components are battle-tested and ready for real-world use.**
