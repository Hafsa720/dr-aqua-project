'use client';

import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean | 'reverse';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  divider?: React.ReactNode;
  responsive?: {
    sm?: Partial<Pick<StackProps, 'direction' | 'align' | 'justify' | 'gap'>>;
    md?: Partial<Pick<StackProps, 'direction' | 'align' | 'justify' | 'gap'>>;
    lg?: Partial<Pick<StackProps, 'direction' | 'align' | 'justify' | 'gap'>>;
    xl?: Partial<Pick<StackProps, 'direction' | 'align' | 'justify' | 'gap'>>;
  };
  as?: React.ElementType;
}

export interface HStackProps extends Omit<StackProps, 'direction'> {
  spacing?: StackProps['gap'];
}

export interface VStackProps extends Omit<StackProps, 'direction'> {
  spacing?: StackProps['gap'];
}

/**
 * Flexible Stack Component
 *
 * Features:
 * - Horizontal and vertical layouts
 * - Responsive direction changes
 * - Flexible alignment options
 * - Gap controls
 * - Divider support
 * - Polymorphic component support
 */
const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = 'col',
      align,
      justify,
      wrap,
      gap = 4,
      divider,
      responsive,
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const getDirectionClass = (dir: StackProps['direction'], prefix = '') => {
      if (!dir) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      const dirMap = {
        row: 'flex-row',
        col: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'col-reverse': 'flex-col-reverse',
      };
      return `${prefixStr}${dirMap[dir]}`;
    };

    const getAlignClass = (align: StackProps['align'], prefix = '') => {
      if (!align) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      const alignMap = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      };
      return `${prefixStr}${alignMap[align]}`;
    };

    const getJustifyClass = (justify: StackProps['justify'], prefix = '') => {
      if (!justify) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      const justifyMap = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      };
      return `${prefixStr}${justifyMap[justify]}`;
    };

    const getWrapClass = () => {
      if (wrap === true) return 'flex-wrap';
      if (wrap === 'reverse') return 'flex-wrap-reverse';
      return '';
    };

    const getGapClass = (gapSize: number | undefined, prefix = '') => {
      if (gapSize === undefined) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      return `${prefixStr}gap-${gapSize}`;
    };

    // Build responsive classes
    const responsiveClasses = responsive
      ? Object.entries(responsive).flatMap(([breakpoint, styles]) =>
          [
            getDirectionClass(styles.direction, breakpoint),
            getAlignClass(styles.align, breakpoint),
            getJustifyClass(styles.justify, breakpoint),
            getGapClass(styles.gap, breakpoint),
          ].filter(Boolean)
        )
      : [];

    // Handle dividers
    const childrenArray = React.Children.toArray(children);
    const childrenWithDividers = divider
      ? childrenArray.reduce((acc: React.ReactNode[], child, index) => {
          acc.push(child);
          if (index < childrenArray.length - 1) {
            acc.push(
              <div key={`divider-${index}`} className="flex-shrink-0">
                {divider}
              </div>
            );
          }
          return acc;
        }, [])
      : children;

    return (
      <Component
        ref={ref}
        className={cn(
          'flex',
          getDirectionClass(direction),
          getAlignClass(align),
          getJustifyClass(justify),
          getWrapClass(),
          getGapClass(gap),
          ...responsiveClasses,
          className
        )}
        {...props}
      >
        {childrenWithDividers}
      </Component>
    );
  }
);

/**
 * Horizontal Stack Component (HStack)
 * Shorthand for Stack with direction="row"
 */
const HStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ spacing = 4, ...props }, ref) => (
    <Stack ref={ref} direction="row" gap={spacing} {...props} />
  )
);

/**
 * Vertical Stack Component (VStack)
 * Shorthand for Stack with direction="col"
 */
const VStack = forwardRef<HTMLDivElement, VStackProps>(
  ({ spacing = 4, ...props }, ref) => (
    <Stack ref={ref} direction="col" gap={spacing} {...props} />
  )
);

Stack.displayName = 'Stack';
HStack.displayName = 'HStack';
VStack.displayName = 'VStack';

export { HStack, Stack, VStack };