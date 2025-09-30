# RapidBizz - Professional Web Development

<div align="center">
  <p>A comprehensive business website with advanced development features and automation.</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

## ✨ Features

This Repo is packed with modern development tools and automation:

### 🔧 Core Technologies

- ⚡️ **Next.js 15** with App Router and React Server Components
- ⚛️ **React 19** with latest features and optimizations
- ✨ **TypeScript** for type safety and better DX
- 💨 **Tailwind CSS 4** with CSS variables and OKLCH color system
- 🎨 **Framer Motion** for smooth animations and transitions

### 🎯 Business-Ready Components

- 📄 **Complete Pages** - Home, Services, Projects, Team, Careers, Contact
- 🧩 **Reusable Components** - Buttons, Links, Cards, Forms, Navigation
- 📱 **Responsive Design** - Mobile-first approach with perfect mobile experience
- 🎨 **Consistent Design System** - Primary (#082856) and Secondary (#FF8621) colors

### 🛠️ Development Experience

- 📈 **Absolute Imports** - Clean imports using `@/` prefix
- 🔥 **VS Code Snippets** - Pre-built snippets for common patterns
- 📏 **ESLint + Prettier** - Code formatting and linting with auto-import sorting
- 🧪 **Jest Testing** - Unit testing setup with React Testing Library

### 🤖 GitHub Automation

- 🚀 **Release Please** - Automated changelog and version management
- 🌿 **Auto Branch Creation** - Branches created automatically from assigned issues
- 🔗 **Issue Autolink** - PRs automatically linked to issues
- 👷 **GitHub Actions** - CI/CD pipeline with linting and type checking
- 📝 **Conventional Commits** - Standardized commit messages

### 🌐 SEO & Performance

- 🗺️ **Sitemap Generation** - Automatic sitemap.xml with custom priorities
- 🖼️ **Open Graph Images** - Dynamic OG image generation for social sharing
- 🤖 **Robots.txt** - SEO-optimized robots.txt generation
- ⚡ **Performance Optimized** - Lazy loading, image optimization, and more

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/m-hamidmehmood/rapidbizz.git
cd rapidbizz
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment file and configure your settings:

```bash
cp .env.example .env.local
```

Update the following environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_OG_URL=https://og.your-domain.com
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Customize for Your Business

1. **Update Site Information**
   - Edit `src/constant/config.ts` with your site details
   - Update `next-sitemap.config.js` with your domain
   - Replace logo and favicon files in `public/favicon/`

2. **Customize Content**
   - Update content in `src/content/` directories (supports multilingual)
   - Modify types in `src/types/` for your data structures
   - Update color scheme in `src/styles/globals.css`

3. **Configure Business Information**
   - Update service offerings in `src/content/services/`
   - Add team members in `src/content/team/`
   - Customize project portfolio in `src/content/projects/`
   - Update career listings in `src/content/careers/`

## 🔍 SEO Features Usage Guide

This project includes enterprise-level SEO features that are automatically configured and ready to use. Here's how to leverage them:

### 🗺️ Sitemap Generation

**Automatic sitemap.xml generation** with custom priorities and change frequencies.

- **Access:** `https://your-domain.com/sitemap.xml`
- **File:** `/src/app/sitemap.ts`

```typescript
// Automatically includes all pages with optimized priorities:
// - Homepage: Priority 1.0 (highest)
// - Services/Projects: Priority 0.9
// - Team/Contact: Priority 0.7-0.8
// - Legal pages: Priority 0.3
```

**Submit to Search Engines:**

1. Google Search Console: Add sitemap URL
2. Bing Webmaster Tools: Submit sitemap
3. Monitor for crawling errors

### 🖼️ Open Graph Images

**Dynamic OG image generation** for social media sharing with your branding.

- **Access:** Auto-generated for all pages + `/api/og`
- **Files:** `/src/app/api/og/route.tsx`, `/src/lib/og.ts`

```typescript
// Automatic generation for pages
export const metadata = generateMetadata({
  title: 'Services',
  description: 'Professional web development services',
  path: '/services',
});

// Test your OG images
// Visit: https://your-domain.com/api/og?title=Test&description=Example&theme=dark
```

**Features:**

- ✅ RapidBizz branding with logo
- ✅ Light/dark theme support
- ✅ 1200x630 optimal dimensions
- ✅ Professional gradients

### 🤖 Robots.txt

**SEO-optimized robots.txt** that allows search engines and AI assistants to access your content.

- **Access:** `https://your-domain.com/robots.txt`
- **File:** `/src/app/robots.ts`

```
User-Agent: *
Allow: /
Allow: /services/
Allow: /projects/
Allow: /team/
Allow: /careers/
Allow: /contact/
Allow: /changelog/
Disallow: /api/*
Disallow: /admin/

User-Agent: GPTBot
Allow: / (AI assistants can access your content)

Sitemap: https://your-domain.com/sitemap.xml
```

**AI-Friendly:** Allows ChatGPT, Claude, Perplexity, and Google Bard to access your business information so users can ask about your services.

### 📋 Changelog Integration

**Markdown-powered changelog** page that renders your CHANGELOG.md file.

- **Access:** `https://your-domain.com/changelog`
- **File:** `/src/app/changelog/page.tsx`
- **Content:** Edit `/CHANGELOG.md` file

```markdown
# Update your changelog

## [Unreleased]

### Added

- New feature description

### Changed

- Changes to existing functionality

### Fixed

- Bug fixes
```

**Navigation:** Version number in footer links to changelog page.

### 🛠️ Customization

#### Adding New Pages to Sitemap

```typescript
// Edit /src/app/sitemap.ts
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
}
```

#### Custom OG Images

```typescript
// Customize colors in /src/app/api/og/route.tsx
const colors = {
  dark: {
    bg: '#0F172A',
    primary: '#3B82F6', // Your brand color
    secondary: '#FF8621', // Your accent color
    // ...
  },
};
```

#### Test OG Images

- **Development:** `http://localhost:3000/api/og?title=Test`
- **Social Media:** Use [OpenGraph.xyz](https://www.opengraph.xyz/) to test
- **LinkedIn:** Share your page and check preview
- **Twitter:** Use Twitter Card Validator

### 📈 SEO Best Practices

1. **Submit Sitemap:** Add to Google Search Console and Bing Webmaster
2. **Test Social Sharing:** Verify OG images on all platforms
3. **Monitor Crawling:** Check robots.txt accessibility
4. **Update Changelog:** Keep users informed of improvements
5. **Content Updates:** High-priority pages update more frequently

### 🔗 Quick Links

- **Detailed SEO Guide:** See `/docs/SEO-GUIDE.md` for comprehensive documentation
- **Google Search Console:** [Submit Sitemap](https://search.google.com/search-console)
- **OG Image Testing:** [OpenGraph.xyz](https://www.opengraph.xyz/)
- **Robots.txt Testing:** [Robots.txt Tester](https://support.google.com/webmasters/answer/6062598)

---

## 📖 Documentation

### Component Usage

The repo includes pre-built components that follow consistent patterns:

```tsx
// Use existing components
import ButtonLink from '@/components/links/ButtonLink';
import { motion } from '@/components/MotionWrapper';

// Pre-built page layout
<section className='bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20'>
  <div className='layout'>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className='text-5xl font-bold mb-4'>Your Title</h1>
    </motion.div>
  </div>
</section>;
```

### VS Code Snippets

Access these snippets in VS Code:

- `napp` - Next.js App Router page
- `rcp` - React component with props
- `mcard` - Motion card component
- `layout` - Layout container
- `servicetype` - Service type definition

### GitHub Automation

#### Automatic Branch Creation

1. Create an issue in GitHub
2. Assign the issue to someone
3. A branch is automatically created with format: `i{issue-number}-{title}`

#### Release Management

1. Use conventional commits (`feat:`, `fix:`, `chore:`, etc.)
2. Trigger release from GitHub Actions tab
3. Changelog and version are automatically updated

### Open Graph Images

Generate dynamic social media images:

```tsx
import { generateMetadata } from '@/lib/og';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our company',
  path: '/about',
});
```

### Sitemap Configuration

The sitemap automatically includes:

- All pages with custom priorities
- Dynamic project pages
- Proper robots.txt configuration

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues and format code
npm run typecheck    # Run TypeScript compiler check
npm test             # Run Jest tests

# Formatting
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── hello/         # Hello API endpoint
│   │   └── legal/[type]/  # Dynamic legal content API
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   │   └── [slug]/        # Dynamic project details
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── buttons/           # Button components
│   ├── common/            # Shared components
│   ├── examples/          # Example components
│   ├── layout/            # Layout components
│   ├── links/             # Link components
│   ├── modals/            # Modal components
│   ├── motion/            # Motion/animation components
│   ├── pages/             # Page-specific components
│   │   ├── home/          # Home page components
│   │   ├── projects/      # Project page components
│   │   └── services/      # Services page components
│   ├── sections/          # Section components
│   └── ui/                # UI components
├── content/               # Content management
│   ├── careers/           # Career content (multilingual)
│   ├── common/            # Shared content (multilingual)
│   ├── home/              # Home page content (multilingual)
│   ├── legal/             # Legal documents (multilingual)
│   ├── projects/          # Project content & case studies
│   ├── services/          # Services content (multilingual)
│   ├── team/              # Team content (multilingual)
│   └── config.ts          # Content configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── styles/                # CSS files and styling
├── types/                 # TypeScript type definitions
└── constant/              # Constants and configuration
```

## 🎨 Customization

### Color System

The Project uses an OKLCH-based color system:

```css
/* Primary colors (Dark Blue) */
--primary-50: oklch(0.95 0.02 258);
--primary-900: oklch(0.25 0.08 258);

/* Secondary colors (Orange) */
--secondary-50: oklch(0.96 0.03 65);
--secondary-900: oklch(0.35 0.15 65);
```

### Adding New Pages

1. Create page in `src/app/your-page/page.tsx`
2. Use the `napp` snippet for consistent structure
3. Add to navigation in `src/components/layout/Navigation.tsx`
4. Update sitemap in `next-sitemap.config.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/rapidbizz)

### Other Platforms

This Project works with any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 🆘 Support

- 📖 [Documentation](https://nextjs.org/docs)
- 💬 [GitHub Discussions](https://github.com/your-username/rapidbizz/discussions)
- 🐛 [Report Issues](https://github.com/your-username/rapidbizz/issues)

---

<div align="center">
  <p>Built with ❤️ for modern web development</p>
</div>
#   D r . a q u a - p r o j e c t  
 