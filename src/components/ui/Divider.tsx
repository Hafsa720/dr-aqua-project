'use client';

import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted' | 'gradient';
  thickness?: 'thin' | 'medium' | 'thick';
  color?: 'gray' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  opacity?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  length?: 'short' | 'medium' | 'long' | 'full';
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  decorative?: boolean;
}

/**
 * Versatile Divider Component
 *
 * Features:
 * - Horizontal and vertical orientations
 * - Multiple visual variants
 * - Customizable thickness and colors
 * - Label support with positioning
 * - Spacing controls
 * - Accessibility support
 */
const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = 'horizontal',
      variant = 'solid',
      thickness = 'thin',
      color = 'gray',
      opacity = 30,
      length = 'full',
      label,
      labelPosition = 'center',
      spacing = 4,
      decorative = true,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    const getVariantClass = () => {
      const variantMap = {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        gradient: '',
      };
      return variantMap[variant];
    };

    const getThicknessClass = () => {
      if (variant === 'gradient') return '';

      const thicknessMap = {
        thin: isHorizontal ? 'border-t' : 'border-l',
        medium: isHorizontal ? 'border-t-2' : 'border-l-2',
        thick: isHorizontal ? 'border-t-4' : 'border-l-4',
      };
      return thicknessMap[thickness];
    };

    const getColorClass = () => {
      if (variant === 'gradient') return '';

      const colorMap = {
        gray: `border-gray-300/${opacity} dark:border-gray-700/${opacity}`,
        primary: `border-primary-300/${opacity} dark:border-primary-700/${opacity}`,
        secondary: `border-secondary-300/${opacity} dark:border-secondary-700/${opacity}`,
        success: `border-green-300/${opacity} dark:border-green-700/${opacity}`,
        warning: `border-yellow-300/${opacity} dark:border-yellow-700/${opacity}`,
        error: `border-red-300/${opacity} dark:border-red-700/${opacity}`,
      };
      return colorMap[color];
    };

    const getLengthClass = () => {
      if (length === 'full') return 'w-full';

      const lengthMap = {
        short: isHorizontal ? 'w-16' : 'h-16',
        medium: isHorizontal ? 'w-32' : 'h-32',
        long: isHorizontal ? 'w-48' : 'h-48',
        full: isHorizontal ? 'w-full' : 'h-full',
      };
      return lengthMap[length];
    };

    const getSpacingClass = () => {
      if (spacing === 0) return '';
      return isHorizontal ? `my-${spacing}` : `mx-${spacing}`;
    };

    const getGradientStyle = () => {
      if (variant !== 'gradient') return {};

      const gradientColors = {
        gray: 'from-transparent via-gray-300 to-transparent dark:via-gray-700',
        primary: 'from-transparent via-primary-300 to-transparent dark:via-primary-700',
        secondary: 'from-transparent via-secondary-300 to-transparent dark:via-secondary-700',
        success: 'from-transparent via-green-300 to-transparent dark:via-green-700',
        warning: 'from-transparent via-yellow-300 to-transparent dark:via-yellow-700',
        error: 'from-transparent via-red-300 to-transparent dark:via-red-700',
      };

      const thicknessHeight = {
        thin: isHorizontal ? 'h-px' : 'w-px',
        medium: isHorizontal ? 'h-0.5' : 'w-0.5',
        thick: isHorizontal ? 'h-1' : 'w-1',
      };

      return {
        className: cn(
          'bg-gradient-to-r',
          gradientColors[color],
          thicknessHeight[thickness],
          isHorizontal ? 'w-full' : 'h-full'
        ),
      };
    };

    // Simple divider without label
    if (!label) {
      if (variant === 'gradient') {
        const gradientProps = getGradientStyle();
        return (
          <div
            ref={ref}
            className={cn(
              'flex',
              isHorizontal ? 'items-center' : 'justify-center flex-col',
              getLengthClass(),
              getSpacingClass(),
              className
            )}
            role={decorative ? 'presentation' : 'separator'}
            aria-orientation={orientation}
            {...props}
          >
            <div className={gradientProps.className} />
          </div>
        );
      }

      return (
        <div
          ref={ref}
          className={cn(
            getLengthClass(),
            getSpacingClass(),
            getVariantClass(),
            getThicknessClass(),
            getColorClass(),
            isHorizontal ? 'border-t' : 'border-l h-full',
            className
          )}
          role={decorative ? 'presentation' : 'separator'}
          aria-orientation={orientation}
          {...props}
        />
      );
    }

    // Divider with label
    const getLabelPositionClass = () => {
      if (!isHorizontal) return 'items-center';

      const positionMap = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      };
      return positionMap[labelPosition];
    };

    const renderDividerLine = (className?: string) => {
      if (variant === 'gradient') {
        const gradientProps = getGradientStyle();
        return <div className={cn(gradientProps.className, className)} />;
      }

      return (
        <div
          className={cn(
            'flex-1',
            getVariantClass(),
            getThicknessClass(),
            getColorClass(),
            className
          )}
        />
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          getLengthClass(),
          getSpacingClass(),
          getLabelPositionClass(),
          className
        )}
        role={decorative ? 'presentation' : 'separator'}
        aria-orientation={orientation}
        {...props}
      >
        {(labelPosition === 'center' || labelPosition === 'right') && (
          renderDividerLine('mr-3')
        )}

        <span className="flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 px-2">
          {label}
        </span>

        {(labelPosition === 'center' || labelPosition === 'left') && (
          renderDividerLine('ml-3')
        )}
      </div>
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };