'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'illustration';
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

const emptyStateSizes = {
  sm: {
    container: 'py-8 px-4',
    icon: 'w-12 h-12',
    title: 'text-base font-medium',
    description: 'text-sm',
    spacing: 'space-y-3',
  },
  md: {
    container: 'py-12 px-6',
    icon: 'w-16 h-16',
    title: 'text-lg font-medium',
    description: 'text-base',
    spacing: 'space-y-4',
  },
  lg: {
    container: 'py-16 px-8',
    icon: 'w-20 h-20',
    title: 'text-xl font-medium',
    description: 'text-lg',
    spacing: 'space-y-6',
  },
};

// Default icons for common empty states
const defaultIcons = {
  search: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  ),
  data: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      />
    </svg>
  ),
  inbox: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
      />
    </svg>
  ),
  folder: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
      />
    </svg>
  ),
  user: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
      />
    </svg>
  ),
  star: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      />
    </svg>
  ),
  chart: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
      />
    </svg>
  ),
  shopping: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01'
      />
    </svg>
  ),
  notification: (
    <svg
      className='w-full h-full text-gray-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
      />
    </svg>
  ),
};

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title = 'No data found',
  description,
  action,
  secondaryAction,
  size = 'md',
  variant = 'default',
  children,
  image,
  imageAlt,
  className,
  ...props
}) => {
  const sizeClasses = emptyStateSizes[size];

  const renderIcon = () => {
    if (image) {
      return (
        <img
          src={image}
          alt={imageAlt || title}
          className={cn(sizeClasses.icon, 'object-contain')}
        />
      );
    }

    if (icon) {
      return <div className={sizeClasses.icon}>{icon}</div>;
    }

    // Default icon based on variant
    return <div className={sizeClasses.icon}>{defaultIcons.data}</div>;
  };

  const renderActions = () => {
    if (!action && !secondaryAction) return null;

    return (
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
        {action && (
          <button
            type='button'
            className={cn(
              'inline-flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
              action.variant === 'primary' &&
                'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
              action.variant === 'secondary' &&
                'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
              action.variant === 'outline' &&
                'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500',
              !action.variant &&
                'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
              action.loading && 'opacity-50 cursor-not-allowed',
            )}
            onClick={action.onClick}
            disabled={action.loading}
          >
            {action.loading && (
              <svg
                className='animate-spin -ml-1 mr-2 h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            )}
            {action.label}
          </button>
        )}

        {secondaryAction && (
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors'
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.label}
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        sizeClasses.container,
        className,
      )}
      {...props}
    >
      <div className={cn('flex flex-col items-center', sizeClasses.spacing)}>
        {variant !== 'minimal' && renderIcon()}

        <div className='space-y-2'>
          <h3 className={cn('text-gray-900', sizeClasses.title)}>{title}</h3>

          {description && (
            <p
              className={cn('text-gray-500 max-w-sm', sizeClasses.description)}
            >
              {description}
            </p>
          )}
        </div>

        {children}
        {renderActions()}
      </div>
    </div>
  );
};

// Pre-configured empty state components
export const EmptySearchResults: React.FC<
  Omit<EmptyStateProps, 'icon' | 'title'> & { searchTerm?: string }
> = ({ searchTerm, description, ...props }) => (
  <EmptyState
    icon={defaultIcons.search}
    title={searchTerm ? `No results for "${searchTerm}"` : 'No search results'}
    description={
      description ||
      "Try adjusting your search terms or filters to find what you're looking for."
    }
    {...props}
  />
);

export const EmptyInbox: React.FC<Omit<EmptyStateProps, 'icon' | 'title'>> = ({
  description,
  ...props
}) => (
  <EmptyState
    icon={defaultIcons.inbox}
    title='Inbox is empty'
    description={
      description || 'When you receive messages, they will appear here.'
    }
    {...props}
  />
);

export const EmptyFolder: React.FC<Omit<EmptyStateProps, 'icon' | 'title'>> = ({
  description,
  ...props
}) => (
  <EmptyState
    icon={defaultIcons.folder}
    title='Folder is empty'
    description={description || "This folder doesn't contain any files yet."}
    {...props}
  />
);

export const EmptyFavorites: React.FC<
  Omit<EmptyStateProps, 'icon' | 'title'>
> = ({ description, ...props }) => (
  <EmptyState
    icon={defaultIcons.star}
    title='No favorites yet'
    description={
      description || 'Items you favorite will appear here for quick access.'
    }
    {...props}
  />
);

export const EmptyCart: React.FC<Omit<EmptyStateProps, 'icon' | 'title'>> = ({
  description,
  ...props
}) => (
  <EmptyState
    icon={defaultIcons.shopping}
    title='Your cart is empty'
    description={description || 'Add some items to your cart to get started.'}
    {...props}
  />
);

export const EmptyNotifications: React.FC<
  Omit<EmptyStateProps, 'icon' | 'title'>
> = ({ description, ...props }) => (
  <EmptyState
    icon={defaultIcons.notification}
    title='No notifications'
    description={
      description || "You're all caught up! New notifications will appear here."
    }
    {...props}
  />
);

export const EmptyCharts: React.FC<Omit<EmptyStateProps, 'icon' | 'title'>> = ({
  description,
  ...props
}) => (
  <EmptyState
    icon={defaultIcons.chart}
    title='No data available'
    description={description || 'There is no data to display in the chart yet.'}
    {...props}
  />
);

export const EmptyUsers: React.FC<Omit<EmptyStateProps, 'icon' | 'title'>> = ({
  description,
  ...props
}) => (
  <EmptyState
    icon={defaultIcons.user}
    title='No users found'
    description={description || 'No users match your current filters.'}
    {...props}
  />
);

// Error state variant
export interface ErrorStateProps extends Omit<EmptyStateProps, 'variant'> {
  error?: Error | string;
  onRetry?: () => void;
  retryText?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  title = 'Something went wrong',
  description,
  onRetry,
  retryText = 'Try again',
  ...props
}) => {
  const errorMessage = typeof error === 'string' ? error : error?.message;

  return (
    <EmptyState
      icon={
        <svg
          className='w-full h-full text-red-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
          />
        </svg>
      }
      title={title}
      description={
        description ||
        errorMessage ||
        'An unexpected error occurred. Please try again.'
      }
      action={
        onRetry
          ? {
              label: retryText,
              onClick: onRetry,
              variant: 'primary' as const,
            }
          : undefined
      }
      {...props}
    />
  );
};

// Loading state variant (alternative to skeleton)
export const LoadingState: React.FC<Omit<EmptyStateProps, 'variant'>> = ({
  title = 'Loading...',
  description,
  ...props
}) => (
  <EmptyState
    icon={
      <div className='animate-spin rounded-full border-4 border-gray-200 border-t-primary-600 w-full h-full' />
    }
    title={title}
    description={description}
    variant='minimal'
    {...props}
  />
);

// Maintenance state
export const MaintenanceState: React.FC<Omit<EmptyStateProps, 'variant'>> = ({
  title = 'Under maintenance',
  description = "We're currently performing scheduled maintenance. Please check back soon.",
  ...props
}) => (
  <EmptyState
    icon={
      <svg
        className='w-full h-full text-orange-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    }
    title={title}
    description={description}
    {...props}
  />
);

// Hook for empty state management
export const useEmptyState = (
  data: any[],
  loading: boolean = false,
  error: Error | null = null,
) => {
  const isEmpty = !loading && !error && data.length === 0;
  const hasError = !loading && !!error;
  const isLoading = loading;

  return {
    isEmpty,
    hasError,
    isLoading,
    showEmptyState: isEmpty,
    showErrorState: hasError,
    showLoadingState: isLoading,
  };
};

export default EmptyState;
