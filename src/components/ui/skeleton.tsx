/**
 * Skeleton Component
 * @see https://ui.shadcn.com/docs/components/skeleton
 *
 * This component is from shadcn/ui - a collection of re-usable components built with Radix UI and Tailwind CSS.
 */

import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn('bg-accent animate-pulse rounded-md', className)}
      {...props}
    />
  );
}

export { Skeleton };
