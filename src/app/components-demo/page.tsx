'use client';

import { ExternalLink, Github, Heart, Plus, Shield, Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';
import PersonCard from '@/components/cards/PersonCard';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { ThemeToggle } from '@/components/ThemeToggle';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Checkbox } from '@/components/ui/checkbox';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import EmptyState from '@/components/ui/EmptyState';
import GradientBadge from '@/components/ui/GradientBadge';
import { Grid, GridItem } from '@/components/ui/Grid';
import { Label } from '@/components/ui/label';
import Loading from '@/components/ui/Loading';
import { Skeleton } from '@/components/ui/skeleton';
import { HStack, VStack } from '@/components/ui/Stack';

export default function ComponentPage() {
  const { theme } = useTheme();
  const [checked, setChecked] = React.useState(false);

  const isDark = theme === 'dark';

  const shadcnComponents = [
    {
      name: 'Button',
      url: 'https://ui.shadcn.com/docs/components/button',
      installed: true,
    },
    {
      name: 'Checkbox',
      url: 'https://ui.shadcn.com/docs/components/checkbox',
      installed: true,
    },
    {
      name: 'Dropdown Menu',
      url: 'https://ui.shadcn.com/docs/components/dropdown-menu',
      installed: true,
    },
    {
      name: 'Input',
      url: 'https://ui.shadcn.com/docs/components/input',
      installed: true,
    },
    {
      name: 'Label',
      url: 'https://ui.shadcn.com/docs/components/label',
      installed: true,
    },
    {
      name: 'Select',
      url: 'https://ui.shadcn.com/docs/components/select',
      installed: true,
    },
    {
      name: 'Skeleton',
      url: 'https://ui.shadcn.com/docs/components/skeleton',
      installed: true,
    },
    {
      name: 'Switch',
      url: 'https://ui.shadcn.com/docs/components/switch',
      installed: true,
    },
    {
      name: 'Textarea',
      url: 'https://ui.shadcn.com/docs/components/textarea',
      installed: true,
    },
    {
      name: 'Alert',
      url: 'https://ui.shadcn.com/docs/components/alert',
      installed: false,
    },
    {
      name: 'Badge',
      url: 'https://ui.shadcn.com/docs/components/badge',
      installed: false,
    },
    {
      name: 'Breadcrumb',
      url: 'https://ui.shadcn.com/docs/components/breadcrumb',
      installed: false,
    },
    {
      name: 'Dialog',
      url: 'https://ui.shadcn.com/docs/components/dialog',
      installed: false,
    },
    {
      name: 'Drawer',
      url: 'https://ui.shadcn.com/docs/components/drawer',
      installed: false,
    },
    {
      name: 'Pagination',
      url: 'https://ui.shadcn.com/docs/components/pagination',
      installed: false,
    },
    {
      name: 'Popover',
      url: 'https://ui.shadcn.com/docs/components/popover',
      installed: false,
    },
    {
      name: 'Progress',
      url: 'https://ui.shadcn.com/docs/components/progress',
      installed: false,
    },
    {
      name: 'Radio Group',
      url: 'https://ui.shadcn.com/docs/components/radio-group',
      installed: false,
    },
    {
      name: 'Table',
      url: 'https://ui.shadcn.com/docs/components/table',
      installed: false,
    },
    {
      name: 'Tabs',
      url: 'https://ui.shadcn.com/docs/components/tabs',
      installed: false,
    },
    {
      name: 'Toast',
      url: 'https://ui.shadcn.com/docs/components/sonner',
      installed: false,
    },
    {
      name: 'Tooltip',
      url: 'https://ui.shadcn.com/docs/components/tooltip',
      installed: false,
    },
  ];

  return (
    <main>
      <section className='bg-background text-foreground transition-colors'>
        <div className='layout min-h-screen py-20'>
          <h1 className='text-4xl font-bold'>Starter Template Components</h1>
          <ArrowLink direction='left' className='mt-2' href='/'>
            Back to Home
          </ArrowLink>

          <div className='mt-8 flex items-center gap-4'>
            <p className='text-sm text-muted-foreground'>
              Use the theme toggle in the navigation to switch dark mode
            </p>
            <ThemeToggle />
          </div>

          {/* Shadcn Components Reference */}
          <div className='mt-12 rounded-lg border border-border bg-card p-6'>
            <h2 className='text-2xl font-bold mb-4'>📦 Shadcn/ui Components</h2>
            <p className='text-muted-foreground mb-2'>
              <strong className='text-foreground'>
                {shadcnComponents.filter((c) => c.installed).length} installed
              </strong>{' '}
              · {shadcnComponents.filter((c) => !c.installed).length} available
              to install
            </p>
            <p className='text-sm text-muted-foreground mb-6'>
              Visit the official documentation for usage examples. Install more
              with:{' '}
              <code className='text-xs bg-muted px-1.5 py-0.5 rounded'>
                npx shadcn@latest add [component]
              </code>
            </p>

            <div className='space-y-4'>
              <div>
                <h3 className='text-sm font-semibold mb-3 text-foreground'>
                  ✅ Installed Components
                </h3>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                  {shadcnComponents
                    .filter((c) => c.installed)
                    .map((component) => (
                      <a
                        key={component.name}
                        href={component.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-between px-3 py-2 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-colors group'
                      >
                        <span className='text-sm font-medium'>
                          {component.name}
                        </span>
                        <ExternalLink className='w-3 h-3 text-muted-foreground group-hover:text-primary' />
                      </a>
                    ))}
                </div>
              </div>

              <div>
                <h3 className='text-sm font-semibold mb-3 text-muted-foreground'>
                  Available to Install
                </h3>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                  {shadcnComponents
                    .filter((c) => !c.installed)
                    .map((component) => (
                      <a
                        key={component.name}
                        href={component.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-between px-3 py-2 rounded-md border border-border hover:bg-accent hover:border-primary transition-colors group'
                      >
                        <span className='text-sm font-medium text-muted-foreground group-hover:text-foreground'>
                          {component.name}
                        </span>
                        <ExternalLink className='w-3 h-3 text-muted-foreground group-hover:text-primary' />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Shadcn Example */}
          <Divider className='my-12' label='Shadcn Example (Checkbox)' />

          <div className='space-y-4 mb-12'>
            <h2 className='text-2xl font-bold'>Checkbox Component (Shadcn)</h2>
            <p className='text-muted-foreground'>
              Example of a shadcn/ui component integrated in this template.
            </p>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='terms'
                checked={checked}
                onCheckedChange={(c) => setChecked(!!c)}
              />
              <Label htmlFor='terms' className='cursor-pointer'>
                Accept terms and conditions
              </Label>
            </div>
          </div>

          <Divider className='my-12' label='Custom Unique Components' />

          <ol className='mt-8 space-y-8'>
            {/* Links Section */}
            <li className='space-y-2'>
              <h2 className='text-2xl font-bold'>Custom Links</h2>
              <p className='text-muted-foreground'>
                Unique link components with custom styling and behaviors.
              </p>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>UnstyledLink</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                No style applied, differentiate internal and outside links.
              </p>
              <div className='space-x-2'>
                <UnstyledLink href='/'>Internal Links</UnstyledLink>
                <UnstyledLink href='https://rapidbizz.com'>
                  Outside Links
                </UnstyledLink>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>PrimaryLink</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Link with primary color styling.
              </p>
              <div className='space-x-2'>
                <PrimaryLink href='/'>Internal Links</PrimaryLink>
                <PrimaryLink href='https://rapidbizz.com'>
                  Outside Links
                </PrimaryLink>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>
                UnderlineLink
              </h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Link with dotted and animated underline.
              </p>
              <div className='space-x-2'>
                <UnderlineLink href='/'>Internal Links</UnderlineLink>
                <UnderlineLink href='https://rapidbizz.com'>
                  Outside Links
                </UnderlineLink>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>ArrowLink</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Navigation link with animated arrow indicator.
              </p>
              <div className='flex flex-wrap items-center gap-4'>
                <ArrowLink href='/' direction='left'>
                  Direction Left
                </ArrowLink>
                <ArrowLink href='/'>Direction Right</ArrowLink>
                <ArrowLink
                  as={UnstyledLink}
                  className='inline-flex items-center'
                  href='/'
                >
                  Polymorphic
                </ArrowLink>
                <ArrowLink
                  as={ButtonLink}
                  variant='light'
                  className='inline-flex items-center'
                  href='/'
                >
                  As Button
                </ArrowLink>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>ButtonLink</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Button styled link with multiple variants.
              </p>
              <div className='flex flex-wrap gap-2'>
                <ButtonLink variant='primary' href='#'>
                  Primary Variant
                </ButtonLink>
                <ButtonLink variant='outline' isDarkBg={isDark} href='#'>
                  Outline Variant
                </ButtonLink>
                <ButtonLink variant='ghost' isDarkBg={isDark} href='#'>
                  Ghost Variant
                </ButtonLink>
                <ButtonLink variant='light' href='#'>
                  Light Variant
                </ButtonLink>
                <ButtonLink variant='dark' href='#'>
                  Dark Variant
                </ButtonLink>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>IconLink</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Icon-only button links with various variants.
              </p>
              <div className='flex flex-wrap gap-2'>
                <IconLink icon={Github} variant='primary' href='#' />
                <IconLink
                  icon={Heart}
                  variant='outline'
                  href='#'
                  isDarkBg={isDark}
                />
                <IconLink
                  icon={Star}
                  variant='ghost'
                  href='#'
                  isDarkBg={isDark}
                />
                <IconLink icon={Plus} variant='dark' href='#' />
                <IconLink icon={Shield} variant='light' href='#' />
              </div>
            </li>

            <Divider className='my-8' />

            {/* Buttons Section */}
            <li className='space-y-2'>
              <h2 className='text-2xl font-bold'>Custom Buttons</h2>
              <p className='text-muted-foreground'>
                Button components with various styles and states.
              </p>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Button</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Button component with multiple variants.
              </p>
              <div className='flex flex-wrap gap-2'>
                <Button variant='primary'>Primary</Button>
                <Button variant='outline' isDarkBg={isDark}>
                  Outline
                </Button>
                <Button variant='ghost' isDarkBg={isDark}>
                  Ghost
                </Button>
                <Button variant='light'>Light</Button>
                <Button variant='dark'>Dark</Button>
                <Button disabled>Disabled</Button>
                <Button isLoading>Loading</Button>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>IconButton</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Icon-only buttons.
              </p>
              <div className='flex flex-wrap gap-2'>
                <IconButton icon={Github} variant='primary' />
                <IconButton icon={Heart} variant='outline' isDarkBg={isDark} />
                <IconButton icon={Star} variant='ghost' isDarkBg={isDark} />
                <IconButton icon={Shield} variant='light' />
                <IconButton icon={Plus} variant='dark' />
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>TextButton</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Lightweight text-only buttons.
              </p>
              <div className='flex flex-wrap gap-2'>
                <TextButton variant='primary'>Primary Text</TextButton>
                <TextButton variant='basic'>Basic Text</TextButton>
              </div>
            </li>

            <Divider className='my-8' />

            {/* UI Components */}
            <li className='space-y-2'>
              <h2 className='text-2xl font-bold'>Custom UI Components</h2>
              <p className='text-muted-foreground'>
                Unique UI components built specifically for this template.
              </p>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>
                AnimatedCounter
              </h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Number counter with smooth animation.
              </p>
              <div className='flex flex-wrap gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary'>
                    <AnimatedCounter value='100+' />
                  </div>
                  <p className='text-sm text-muted-foreground mt-2'>Projects</p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary'>
                    <AnimatedCounter value='50+' />
                  </div>
                  <p className='text-sm text-muted-foreground mt-2'>Clients</p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary'>
                    <AnimatedCounter value='99%' />
                  </div>
                  <p className='text-sm text-muted-foreground mt-2'>
                    Satisfaction
                  </p>
                </div>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>
                GradientBadge
              </h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Badge with gradient background.
              </p>
              <div className='flex flex-wrap gap-2'>
                <GradientBadge
                  gradientColors={{ primary: '#3B82F6', secondary: '#06B6D4' }}
                >
                  Blue Gradient
                </GradientBadge>
                <GradientBadge
                  gradientColors={{ primary: '#A855F7', secondary: '#EC4899' }}
                >
                  Purple Gradient
                </GradientBadge>
                <GradientBadge
                  gradientColors={{ primary: '#10B981', secondary: '#14B8A6' }}
                >
                  Green Gradient
                </GradientBadge>
                <GradientBadge
                  gradientColors={{ primary: '#F97316', secondary: '#EF4444' }}
                >
                  Orange Gradient
                </GradientBadge>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Loading</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Loading spinner indicators with multiple variants.
              </p>
              <div className='flex flex-wrap gap-6 items-center'>
                <Loading variant='spinner' size='sm' />
                <Loading variant='spinner' size='md' />
                <Loading variant='spinner' size='lg' />
                <Loading variant='dots' size='md' />
                <Loading variant='pulse' size='md' />
                <Loading variant='bars' size='md' />
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Skeleton</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Skeleton loader with shimmer animation.
              </p>
              <div className='space-y-2 max-w-md'>
                <Skeleton className='h-12 w-full' />
                <Skeleton className='h-12 w-3/4' />
                <Skeleton className='h-12 w-1/2' />
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>EmptyState</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Empty state placeholder with icon and message.
              </p>
              <div className='border border-border rounded-lg p-8'>
                <EmptyState
                  title='No items found'
                  description='Try adjusting your filters or search query.'
                  icon={<Star className='w-12 h-12' />}
                />
              </div>
            </li>

            <Divider className='my-8' />

            {/* Layout Components */}
            <li className='space-y-2'>
              <h2 className='text-2xl font-bold'>Layout Components</h2>
              <p className='text-muted-foreground'>
                Layout utilities for organizing content.
              </p>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Container</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Responsive container with max-width.
              </p>
              <Container
                size='lg'
                className='border border-border rounded-lg bg-accent/50 p-4'
              >
                <p className='text-center py-4'>Container with max-width</p>
              </Container>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Grid</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Responsive CSS Grid wrapper.
              </p>
              <Grid cols={4} gap={4}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <GridItem
                    key={i}
                    className='border border-border rounded-lg bg-accent/50 p-4 text-center'
                  >
                    Item {i}
                  </GridItem>
                ))}
              </Grid>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>
                Stack (HStack / VStack)
              </h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Flex-based layout utilities.
              </p>
              <div className='space-y-4'>
                <div>
                  <p className='text-sm font-medium mb-2'>
                    HStack (Horizontal):
                  </p>
                  <HStack
                    spacing={4}
                    className='border border-border rounded-lg p-4'
                  >
                    <div className='px-4 py-2 bg-primary text-primary-foreground rounded'>
                      Item 1
                    </div>
                    <div className='px-4 py-2 bg-primary text-primary-foreground rounded'>
                      Item 2
                    </div>
                    <div className='px-4 py-2 bg-primary text-primary-foreground rounded'>
                      Item 3
                    </div>
                  </HStack>
                </div>
                <div>
                  <p className='text-sm font-medium mb-2'>VStack (Vertical):</p>
                  <VStack
                    spacing={4}
                    className='border border-border rounded-lg p-4'
                  >
                    <div className='px-4 py-2 bg-secondary text-secondary-foreground rounded w-full text-center'>
                      Item 1
                    </div>
                    <div className='px-4 py-2 bg-secondary text-secondary-foreground rounded w-full text-center'>
                      Item 2
                    </div>
                    <div className='px-4 py-2 bg-secondary text-secondary-foreground rounded w-full text-center'>
                      Item 3
                    </div>
                  </VStack>
                </div>
              </div>
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>Divider</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Visual separator with optional label.
              </p>
              <div className='space-y-4'>
                <Divider />
                <Divider label='With Label' />
                <Divider label='Centered' labelPosition='center' />
                <Divider variant='dashed' label='Dashed Style' />
                <Divider variant='gradient' />
              </div>
            </li>

            <Divider className='my-8' />

            {/* Other Components */}
            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>NextImage</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Next.js Image with skeleton loading state.
              </p>
              <NextImage
                useSkeleton
                className='w-32 md:w-40 rounded-lg'
                src='/favicon/android-chrome-192x192.png'
                width='180'
                height='180'
                alt='Icon'
              />
            </li>

            <li className='space-y-2'>
              <h3 className='text-lg md:text-xl font-semibold'>PersonCard</h3>
              <p className='mt-1 text-sm text-muted-foreground'>
                Team member card component.
              </p>
              <div className='max-w-sm'>
                <PersonCard
                  member={{
                    id: 'john-doe',
                    name: 'John Doe',
                    role: 'Senior Developer',
                    image: '/favicon/android-chrome-192x192.png',
                    bio: 'Full-stack developer with expertise in React and Node.js',
                    social: {
                      linkedin: 'https://linkedin.com',
                      github: 'https://github.com',
                      behance: 'https://behance.com',
                    },
                    experience: '5+ years',
                    projects: '50+',
                    specialization: 'Full Stack',
                    gradient: 'from-blue-500 to-cyan-500',
                  }}
                  index={0}
                />
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
