'use client';

import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
  layout?: 'narrow' | 'default' | 'wide' | 'full';
  fluid?: boolean;
  centerContent?: boolean;
  paddingX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  paddingY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  marginX?: 'auto' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  marginY?: 'auto' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  margin?: 'auto' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  as?: React.ElementType;
}

/**
 * Flexible Container Component
 *
 * Features:
 * - Multiple size presets
 * - Layout variants (narrow, default, wide, full)
 * - Fluid width option
 * - Flexible spacing controls
 * - Center content alignment
 * - Polymorphic component support
 * - Responsive design utilities
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = 'lg',
      layout,
      fluid = false,
      centerContent = false,
      paddingX,
      paddingY,
      padding,
      marginX = 'auto',
      marginY,
      margin,
      as: Component = 'div',
      children,
      ...props
    },
    ref,
  ) => {
    const getLayoutClass = () => {
      if (layout) {
        const layoutMap = {
          narrow: 'layout-narrow', // max-w-4xl
          default: 'layout', // max-w-7xl
          wide: 'layout-wide', // max-w-[1600px]
          full: 'layout-full', // w-full
        };
        return layoutMap[layout];
      }
      return null;
    };

    const getSizeClass = () => {
      // If layout is specified, it takes precedence
      if (layout) return null;

      if (fluid) return 'w-full';

      const sizeMap = {
        xs: 'max-w-xs', // 320px
        sm: 'max-w-sm', // 384px
        md: 'max-w-md', // 448px
        lg: 'max-w-4xl', // 896px
        xl: 'max-w-5xl', // 1024px
        '2xl': 'max-w-6xl', // 1152px
        '3xl': 'max-w-7xl', // 1280px
        '4xl': 'max-w-[1440px]',
        '5xl': 'max-w-[1600px]',
        '6xl': 'max-w-[1800px]',
        '7xl': 'max-w-[2000px]',
        full: 'w-full max-w-none',
      };

      return sizeMap[size];
    };

    const getSpacingClass = (
      value: number | 'auto' | undefined,
      type: 'p' | 'px' | 'py' | 'm' | 'mx' | 'my',
    ) => {
      if (value === undefined) return '';
      if (value === 'auto') return `${type}-auto`;
      return `${type}-${value}`;
    };

    const spacingClasses = [
      getSpacingClass(padding, 'p'),
      getSpacingClass(paddingX, 'px'),
      getSpacingClass(paddingY, 'py'),
      getSpacingClass(margin, 'm'),
      getSpacingClass(marginX, 'mx'),
      getSpacingClass(marginY, 'my'),
    ].filter(Boolean);

    // Default padding if none specified and not using layout classes
    if (!padding && !paddingX && !paddingY && !layout) {
      spacingClasses.push('px-4 sm:px-6 lg:px-8');
    }

    const layoutClass = getLayoutClass();

    return (
      <Component
        ref={ref}
        className={cn(
          'relative',
          layoutClass,
          getSizeClass(),
          {
            'flex flex-col items-center justify-center': centerContent,
          },
          ...spacingClasses,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = 'Container';

export { Container };
