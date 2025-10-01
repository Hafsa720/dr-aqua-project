# 🚀 Next.js Ultimate Starter Template

<div align="center">
  <p>⚡ Production-ready Next.js starter with 80+ components, complete design system, and modern dev tools</p>

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

## ✨ What's Inside

Everything you need to build amazing web applications:

### 🧩 80+ Production-Ready Components

- 📝 **Form Components** - Input, Textarea, Select, Checkbox, Radio with validation
- 📐 **Layout Components** - Grid, Container, Stack, Divider for perfect layouts
- 📊 **Data Display** - Table, Badge, Tooltip, Progress for showing data
- 🧭 **Navigation** - Breadcrumb, Pagination, Tabs for easy navigation
- 🎭 **Overlay Components** - Modal, Drawer, Popover, Alert for interactions
- 💬 **Feedback Components** - Toast, Loading, Skeleton, EmptyState for user feedback
- ⚡ **Performance Components** - OptimizedImage, LazyLoad, CodeSplitting for speed
- 🛠️ **Dev Tools** - ErrorBoundary, DebugPanel, ComponentTester for development

### 🎨 Complete Design System

- 🌈 **OKLCH Colors** - Perceptually uniform color system
- ✍️ **Typography Scale** - 6 font sizes with perfect line heights
- 📏 **4px Spacing** - Consistent spacing throughout
- 🎭 **Dark Mode** - Built-in light/dark theme support
- ♿ **Accessible** - WCAG 2.1 AA compliant components

### 🪝 15+ Custom Hooks

- 💾 **useLocalStorage** - Persistent state with expiration
- ⏱️ **useDebounce** - Debounce values and callbacks
- 👁️ **useIntersectionObserver** - Detect element visibility
- 📋 **useClipboard** - Copy to clipboard easily
- 📱 **useWindowSize** - Responsive window dimensions
- ⚙️ **And more!** - See [full hook list](./docs/hooks/overview.md)

### 📱 PWA Ready

- 🔌 **Offline Support** - Works without internet
- 📲 **Installable** - Add to home screen
- 🔄 **Auto Updates** - Service worker updates
- 📝 **Web Manifest** - Full PWA configuration

### 🔍 SEO & Performance

- 🗺️ **Meta Manager** - Easy meta tag management
- 🏗️ **Structured Data** - JSON-LD schemas
- 🖼️ **OG Images** - Beautiful social media cards
- ⚡ **Core Web Vitals** - Optimized for performance
- 🤖 **Sitemap** - Auto-generated sitemap.xml

### 🛠️ Developer Experience

- 📝 **TypeScript** - Full type safety (strict mode)
- 🎯 **ESLint + Prettier** - Code quality tools
- 📦 **No Test Files** - Production-ready without test overhead
- 🔧 **Easy Removal** - Remove any component independently
- 📖 **Well Documented** - Comprehensive guides and examples

## 🚀 Quick Start

Get up and running in 5 minutes:

### 1️⃣ Install

```bash
# Clone the repo
git clone https://github.com/yourusername/next-starter.git my-app
cd my-app

# Install dependencies
npm install
```

### 2️⃣ Configure

```bash
# Copy environment file
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3️⃣ Run

```bash
# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### 4️⃣ Build Your App

Start using components right away:

```tsx
import { Button, Input, Modal, useToast } from '@/components/ui';

export default function MyPage() {
  const { success } = useToast();

  return (
    <div className='p-8'>
      <Input label='Email' type='email' />
      <Button onClick={() => success('Hello!')}>Click Me</Button>
    </div>
  );
}
```

📚 **Need help?** Check out the [Quick Start Guide](./docs/guides/quick-start.md)

## 📖 Documentation

Complete guides to help you build faster:

### 🎯 Getting Started

- 📦 [Installation Guide](./docs/getting-started/installation.md) - Setup and configuration
- 📁 [Project Structure](./docs/getting-started/project-structure.md) - Understanding the codebase
- ⚡ [Quick Start](./docs/guides/quick-start.md) - Build your first page in minutes

### 🧩 Components

- 🎨 [Components Overview](./docs/components/overview.md) - All 80+ components explained
- 📝 Form Components - Input, Select, Checkbox, Radio, Textarea
- 📐 Layout Components - Grid, Container, Stack, Divider
- 📊 Data Display - Table, Badge, Tooltip, Progress
- 🧭 Navigation - Breadcrumb, Pagination, Tabs
- 🎭 Overlay - Modal, Drawer, Popover, Alert
- 💬 Feedback - Toast, Loading, Skeleton, EmptyState
- ⚡ Performance - OptimizedImage, LazyLoad, CodeSplitting

### 🎨 Design System

- 🌈 [Design System Overview](./docs/design-system/overview.md) - Colors, typography, spacing
- 🎨 OKLCH Color System - Perceptually uniform colors
- ✍️ Typography Scale - Font sizes and line heights
- 📏 Spacing System - 4px base unit
- 🎭 Dark Mode - Theme switching
- ♿ Accessibility - WCAG 2.1 AA compliance

### 🪝 Custom Hooks

- useLocalStorage - Persistent state
- useDebounce - Debounce values
- useIntersectionObserver - Visibility detection
- useClipboard - Copy to clipboard
- useWindowSize - Responsive dimensions
- usePWA - PWA functionality
- And 10+ more!

### 📱 PWA & SEO

- 🔌 PWA Setup - Offline support and installation
- 🔍 SEO Tools - Meta tags and structured data
- 🖼️ OG Images - Social media cards
- 🗺️ Sitemap - Auto-generated sitemaps

### 💡 Examples & Patterns

- 📝 Form handling with validation
- 📊 Data tables with sorting
- 🎨 Custom layouts
- 🔄 Loading states
- 🚨 Error handling

## 🎯 Usage Examples

### Building a Form

```tsx
import { Input, Select, Button, useToast } from '@/components/ui';

export default function ContactForm() {
  const { success, error } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your logic here
      success('Form submitted!');
    } catch (err) {
      error('Failed to submit');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input label='Name' required />
      <Input label='Email' type='email' required />
      <Select label='Country' options={countries} searchable />
      <Button type='submit' variant='primary'>
        Submit
      </Button>
    </form>
  );
}
```

### Creating a Data Table

```tsx
import { Table, Badge, Pagination } from '@/components/ui';

export default function UsersTable() {
  const columns = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email' },
    {
      key: 'status',
      title: 'Status',
      render: (status) => (
        <Badge variant={status === 'active' ? 'success' : 'error'}>
          {status}
        </Badge>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={users} sortable pagination />
    </>
  );
}
```

### Using the Design System

```tsx
import { designTokens, cn } from '@/lib/design-system';

export default function MyComponent() {
  return (
    <div className={cn('bg-primary-600', 'text-white', 'p-4', 'rounded-lg')}>
      Styled with design system!
    </div>
  );
}
```

## 🛠️ Commands

```bash
# 🚀 Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# ✅ Code Quality
npm run typecheck        # TypeScript check
npm run lint             # Run ESLint
npm run format           # Format with Prettier

# 🔧 Fix Issues
npm run lint:fix         # Auto-fix linting
npm run format:check     # Check formatting
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
├── components/
│   ├── ui/                  # 80+ UI components
│   │   ├── Input.tsx        # Form inputs
│   │   ├── Table.tsx        # Data tables
│   │   ├── Modal.tsx        # Modals
│   │   └── ...              # And 75+ more!
│   ├── layout/              # Layout components
│   ├── performance/         # Performance components
│   ├── ErrorBoundary.tsx    # Error handling
│   └── ComponentTester.tsx  # Component playground
├── lib/
│   ├── design-system/       # Design tokens & utils
│   │   ├── tokens.ts        # Design tokens
│   │   ├── utils.ts         # Utility functions
│   │   └── theme.ts         # Theme config
│   ├── hooks/               # 15+ custom hooks
│   ├── seo/                 # SEO utilities
│   └── serviceWorker.ts     # PWA service worker
├── types/                    # TypeScript types
└── styles/                   # Global styles
```

## 🎨 Customization

### Update Colors

```typescript
// src/lib/design-system/tokens.ts
export const designTokens = {
  colors: {
    primary: {
      500: 'oklch(0.5 0.25 270)', // Your brand color
      // ... other shades
    },
  },
};
```

### Add New Components

```tsx
// src/components/ui/MyComponent.tsx
import * as React from 'react';
import { cn } from '@/lib/design-system/utils';

export interface MyComponentProps {
  variant?: 'default' | 'primary';
  children: React.ReactNode;
}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('base-classes', variantClasses[variant])}
        {...props}
      >
        {children}
      </div>
    );
  },
);

MyComponent.displayName = 'MyComponent';

export default MyComponent;
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify** - Drag and drop `.next` folder
- **AWS Amplify** - Connect GitHub repo
- **Railway** - One-click deploy
- **Render** - Connect and deploy

## 🤝 Contributing

We welcome contributions!

1. 🍴 Fork the repo
2. 🌿 Create your branch: `git checkout -b feature/awesome`
3. ✍️ Commit changes: `git commit -m 'Add awesome feature'`
4. 📤 Push to branch: `git push origin feature/awesome`
5. 🎉 Open a Pull Request

## ⭐ Show Your Support

Give a ⭐ if this project helped you!

## 📄 License

MIT © [Your Name]

## 🙏 Acknowledgments

Built with:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

<div align="center">
  <p><strong>Ready to build something amazing? Let's go! 🚀</strong></p>
  <p>Made with ❤️ and ☕ for developers worldwide</p>
</div>
