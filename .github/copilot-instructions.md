# GitHub Copilot Instructions for RapidBizz Agency

## Project Overview

RapidBizz is a modern business website built with **Next.js 15 App Router**, featuring comprehensive business pages, advanced animations, and a sophisticated design system. The codebase emphasizes component composition, consistent theming, and smooth user experiences.

## Architecture & Key Patterns

### Component Organization Strategy

```
src/components/
├── layout/          # Navigation, Footer - app-wide layout
├── ui/              # Reusable atomic components (Button, Card3D, SectionGradient)
├── pages/           # Page-specific components organized by route
│   └── services/    # ServiceModal, ServicesGrid, ServicesHero, etc.
├── links/           # Specialized link components (ArrowLink, ButtonLink)
└── modals/          # QuoteModal and other overlays
```

**Pattern**: Page components are composed from UI components and organized in feature folders under `src/components/pages/[route]/`. Each page component handles its own state and delegates to smaller, focused components.

### Motion & Animation System

All animations use a centralized **MotionWrapper** pattern:

```tsx
import { motion, AnimatePresence } from '@/components/MotionWrapper';

// Standard entrance animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

**Key Patterns**:

- `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Staggered animations using `delay: index * 0.1`
- Consistent hover effects: `whileHover={{ y: -10, scale: 1.02 }}`
- Click position tracking for modal animations using `getBoundingClientRect()`

### Theming & Gradient System

**SectionGradient** component provides consistent background styling:

```tsx
<SectionGradient variant='hero|primary|secondary|accent|cta|neutral'>
  // Page content
</SectionGradient>
```

**Color System**: Uses OKLCH-based colors with CSS custom properties. Primary (#082856) and secondary (#FF8621) with 50-900 palettes.

**Dark Mode**: Managed by `ThemeProvider` with system detection and localStorage persistence. All components use `dark:` prefixes for styling.

### Service Page Architecture Pattern

The services page demonstrates the component composition pattern:

```tsx
// Main page orchestrates data and state
const [selectedService, setSelectedService] = useState<Service | null>(null);
const [modalOrigin, setModalOrigin] = useState({ x: number; y: number });

// Components handle presentation and user interaction
<ServicesHero onViewDetails={handleViewDetails} onGetQuote={handleGetQuote} />
<ServicesGrid detailedServices={services} onViewDetails={handleViewDetails} />
<ServiceModal isOpen={isModalOpen} modalOrigin={modalOrigin} />
```

This pattern allows for complex interactions while keeping components focused and reusable.

## Development Workflow

### Build & Quality Commands (MANDATORY)

Always run after making changes:

```bash
npm run typecheck     # TypeScript validation
npm run lint:strict   # ESLint with zero warnings
npm run format:check  # Prettier formatting
```

Fix issues with:

```bash
npm run lint:fix && npm run format
```

### Type System Patterns

```tsx
// Service interface pattern used throughout
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features?: string[];
  technologies?: string[];
  testimonial?: {
    content: string;
    author?: string;
    name?: string;
    role?: string;
  };
}
```

**Convention**: All icon props use `React.ComponentType<{ className?: string }>` for consistent styling control.

### Component Patterns

#### 3D Interactive Cards

```tsx
<Card3D intensity={0.6} lightColor='primary-400' enableGlow={true}>
  <div className='p-8 rounded-3xl h-full'>
    // Card content with hover effects
  </div>
</Card3D>
```

#### Animated Counters

```tsx
<AnimatedCounter value='500+' duration={2} />
// Animates from 0 to 500 when in viewport
```

#### Staggered Grid Animations

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
))}
```

## Development Conventions

### File Naming & Structure

- Components: PascalCase matching filename (`ServiceModal.tsx`)
- Pages: `page.tsx` in route folders following App Router
- Types: Centralized in `src/types/` with logical grouping
- One component per file with default export

### Import Organization

```tsx
// External imports first
import React, { useState } from 'react';
import { FaIcon } from 'react-icons/fa';

// Internal imports with absolute paths
import { motion } from '@/components/MotionWrapper';
import SectionGradient from '@/components/ui/SectionGradient';
import type { Service } from '@/types';
```

### State Management Pattern

Page-level components manage state and pass handlers down:

```tsx
const handleViewDetails = (
  service: Service,
  origin: { x: number; y: number },
) => {
  setModalOrigin(origin);
  setSelectedService(service);
  setIsModalOpen(true);
};
```

Click coordinate tracking for smooth modal animations is a key UX pattern throughout the app.

### Component Props Patterns

```tsx
interface ComponentProps {
  // Data
  items: ItemType[];
  // Handlers with specific signatures
  onAction: (item: ItemType, context?: Context) => void;
  // Optional styling
  className?: string;
  variant?: 'primary' | 'secondary';
}
```

This structure ensures predictable interfaces across all components while maintaining flexibility for different use cases.
