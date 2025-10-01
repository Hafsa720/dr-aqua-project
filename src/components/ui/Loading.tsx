'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'spinner'
    | 'dots'
    | 'pulse'
    | 'bars'
    | 'ring'
    | 'ripple'
    | 'square'
    | 'wave';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'gray'
    | 'white';
  speed?: 'slow' | 'normal' | 'fast';
  text?: string;
  overlay?: boolean;
  center?: boolean;
  fullscreen?: boolean;
  backdrop?: boolean;
  zIndex?: number;
}

const loadingSizes = {
  xs: { size: 'w-3 h-3', text: 'text-xs', gap: 'gap-1' },
  sm: { size: 'w-4 h-4', text: 'text-sm', gap: 'gap-1.5' },
  md: { size: 'w-6 h-6', text: 'text-base', gap: 'gap-2' },
  lg: { size: 'w-8 h-8', text: 'text-lg', gap: 'gap-2.5' },
  xl: { size: 'w-12 h-12', text: 'text-xl', gap: 'gap-3' },
};

const colorClasses = {
  primary: 'text-primary-600',
  secondary: 'text-secondary-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  error: 'text-error-600',
  info: 'text-info-600',
  gray: 'text-gray-600',
  white: 'text-white',
};

const speedClasses = {
  slow: 'animate-spin [animation-duration:2s]',
  normal: 'animate-spin',
  fast: 'animate-spin [animation-duration:0.5s]',
};

// Individual loading variants
const SpinnerLoader: React.FC<{
  size: string;
  color: string;
  speed: string;
}> = ({ size, color, speed }) => (
  <svg className={cn(size, color, speed)} fill='none' viewBox='0 0 24 24'>
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
);

const DotsLoader: React.FC<{ size: string; color: string; speed: string }> = ({
  size,
  color,
  speed,
}) => {
  const animationDelay =
    speed === 'fast' ? '0.1s' : speed === 'slow' ? '0.3s' : '0.2s';

  return (
    <div className={cn('flex space-x-1', color)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            size
              .replace('w-', 'w-')
              .replace('h-', 'h-')
              .replace(/\d+/, (match) =>
                String(Math.max(1, parseInt(match) / 2)),
              ),
            'bg-current rounded-full animate-pulse',
          )}
          style={{
            animationDelay: `${i * parseFloat(animationDelay)}`,
            animationDuration:
              speed === 'fast' ? '0.6s' : speed === 'slow' ? '1.4s' : '1s',
          }}
        />
      ))}
    </div>
  );
};

const PulseLoader: React.FC<{ size: string; color: string; speed: string }> = ({
  size,
  color,
  speed,
}) => (
  <div
    className={cn(
      size,
      color,
      'bg-current rounded-full',
      speed === 'fast'
        ? 'animate-pulse [animation-duration:0.5s]'
        : speed === 'slow'
          ? 'animate-pulse [animation-duration:2s]'
          : 'animate-pulse',
    )}
  />
);

const BarsLoader: React.FC<{ size: string; color: string; speed: string }> = ({
  size,
  color,
  speed,
}) => {
  const animationDelay =
    speed === 'fast' ? '0.1s' : speed === 'slow' ? '0.3s' : '0.2s';

  return (
    <div className={cn('flex items-end space-x-1', color)}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-current',
            size
              .replace('w-', 'w-')
              .replace('h-', 'h-')
              .replace(/\d+/, (match) =>
                String(Math.max(1, parseInt(match) / 4)),
              ),
            size.replace('w-', 'h-'),
          )}
          style={{
            animationDelay: `${i * parseFloat(animationDelay)}`,
            animation: `loading-bars ${speed === 'fast' ? '0.8s' : speed === 'slow' ? '1.6s' : '1.2s'} infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

const RingLoader: React.FC<{ size: string; color: string; speed: string }> = ({
  size,
  color,
  speed,
}) => (
  <svg
    className={cn(
      size,
      color,
      speedClasses[speed as keyof typeof speedClasses],
    )}
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
    <circle
      className='opacity-75'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
      strokeDasharray='32'
      strokeDashoffset='32'
      strokeLinecap='round'
    ></circle>
  </svg>
);

const RippleLoader: React.FC<{
  size: string;
  color: string;
  speed: string;
}> = ({ size, color, speed }) => (
  <div className={cn('relative', size)}>
    {[0, 1].map((i) => (
      <div
        key={i}
        className={cn(
          'absolute inset-0 border border-current rounded-full',
          color,
        )}
        style={{
          animation: `loading-ripple ${speed === 'fast' ? '0.8s' : speed === 'slow' ? '2s' : '1.2s'} infinite`,
          animationDelay: `${i * (speed === 'fast' ? 0.4 : speed === 'slow' ? 1 : 0.6)}s`,
        }}
      />
    ))}
  </div>
);

const SquareLoader: React.FC<{
  size: string;
  color: string;
  speed: string;
}> = ({ size, color, speed }) => (
  <div
    className={cn(
      size,
      color,
      'bg-current',
      speed === 'fast'
        ? 'animate-spin [animation-duration:0.6s]'
        : speed === 'slow'
          ? 'animate-spin [animation-duration:1.8s]'
          : 'animate-spin [animation-duration:1.2s]',
    )}
  />
);

const WaveLoader: React.FC<{ size: string; color: string; speed: string }> = ({
  size,
  color,
  speed,
}) => {
  const animationDelay =
    speed === 'fast' ? '0.1s' : speed === 'slow' ? '0.2s' : '0.15s';

  return (
    <div className={cn('flex items-center space-x-1', color)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-current rounded-full',
            size
              .replace('w-', 'w-')
              .replace('h-', 'h-')
              .replace(/\d+/, (match) =>
                String(Math.max(1, parseInt(match) / 4)),
              ),
            size.replace('w-', 'h-'),
          )}
          style={{
            animationDelay: `${i * parseFloat(animationDelay)}`,
            animation: `loading-wave ${speed === 'fast' ? '0.8s' : speed === 'slow' ? '1.6s' : '1.2s'} infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  speed = 'normal',
  text,
  overlay = false,
  center = false,
  fullscreen = false,
  backdrop = false,
  zIndex = 50,
  className,
  ...props
}) => {
  const sizeClasses = loadingSizes[size];
  const colorClass = colorClasses[color];

  const renderLoader = () => {
    const loaderProps = {
      size: sizeClasses.size,
      color: colorClass,
      speed: speedClasses[speed].includes('[animation-duration')
        ? speed
        : 'normal',
    };

    switch (variant) {
      case 'dots':
        return <DotsLoader {...loaderProps} />;
      case 'pulse':
        return <PulseLoader {...loaderProps} />;
      case 'bars':
        return <BarsLoader {...loaderProps} />;
      case 'ring':
        return <RingLoader {...loaderProps} />;
      case 'ripple':
        return <RippleLoader {...loaderProps} />;
      case 'square':
        return <SquareLoader {...loaderProps} />;
      case 'wave':
        return <WaveLoader {...loaderProps} />;
      case 'spinner':
      default:
        return <SpinnerLoader {...loaderProps} />;
    }
  };

  const content = (
    <div
      className={cn(
        'flex items-center',
        sizeClasses.gap,
        text ? 'flex-row' : 'justify-center',
        center && 'justify-center',
        className,
      )}
      {...props}
    >
      {renderLoader()}
      {text && (
        <span className={cn(sizeClasses.text, colorClass, 'font-medium')}>
          {text}
        </span>
      )}
    </div>
  );

  if (overlay || fullscreen) {
    return (
      <div
        className={cn(
          'flex items-center justify-center',
          fullscreen ? 'fixed inset-0' : 'absolute inset-0',
          backdrop && 'bg-white/80 backdrop-blur-sm',
          'z-50',
        )}
        style={{ zIndex }}
      >
        {content}
      </div>
    );
  }

  return content;
};

// Button with loading state
export interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  loadingVariant?: LoadingProps['variant'];
  loadingSize?: LoadingProps['size'];
  children: React.ReactNode;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  loadingText,
  loadingVariant = 'spinner',
  loadingSize = 'sm',
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center',
        loading && 'cursor-not-allowed',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <Loading
            variant={loadingVariant}
            size={loadingSize}
            color='white'
            text={loadingText}
          />
        </div>
      )}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
    </button>
  );
};

// Page loading component
export interface PageLoadingProps {
  title?: string;
  description?: string;
  variant?: LoadingProps['variant'];
  size?: LoadingProps['size'];
  color?: LoadingProps['color'];
  className?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  title = 'Loading...',
  description,
  variant = 'spinner',
  size = 'lg',
  color = 'primary',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-h-[400px] p-8',
        className,
      )}
    >
      <Loading variant={variant} size={size} color={color} />
      <div className='mt-4 text-center'>
        <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
        {description && (
          <p className='mt-1 text-sm text-gray-500'>{description}</p>
        )}
      </div>
    </div>
  );
};

// Suspense fallback loading
export interface SuspenseLoadingProps {
  variant?: LoadingProps['variant'];
  size?: LoadingProps['size'];
  text?: string;
  fullscreen?: boolean;
  className?: string;
}

export const SuspenseLoading: React.FC<SuspenseLoadingProps> = ({
  variant = 'spinner',
  size = 'lg',
  text = 'Loading...',
  fullscreen = false,
  className,
}) => {
  return (
    <Loading
      variant={variant}
      size={size}
      text={text}
      overlay={fullscreen}
      center
      backdrop={fullscreen}
      className={cn(!fullscreen && 'py-12', className)}
    />
  );
};

// Loading overlay for containers
export interface LoadingOverlayProps {
  loading: boolean;
  children: React.ReactNode;
  variant?: LoadingProps['variant'];
  size?: LoadingProps['size'];
  text?: string;
  className?: string;
  overlayClassName?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  loading,
  children,
  variant = 'spinner',
  size = 'md',
  text,
  className,
  overlayClassName,
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
      {loading && (
        <Loading
          variant={variant}
          size={size}
          text={text}
          overlay
          backdrop
          className={overlayClassName}
        />
      )}
    </div>
  );
};

// Hook for loading states
export const useLoading = (initialState = false) => {
  const [loading, setLoading] = React.useState(initialState);

  const startLoading = React.useCallback(() => setLoading(true), []);
  const stopLoading = React.useCallback(() => setLoading(false), []);
  const toggleLoading = React.useCallback(
    () => setLoading((prev) => !prev),
    [],
  );

  return {
    loading,
    startLoading,
    stopLoading,
    toggleLoading,
    setLoading,
  };
};

// Higher-order component for loading states
export const withLoading = <P extends object>(
  Component: React.ComponentType<P>,
  LoadingComponent: React.ComponentType = SuspenseLoading,
) => {
  const WrappedComponent = React.forwardRef<any, P & { loading?: boolean }>(
    (props, ref) => {
      const { loading, ...rest } = props;

      if (loading) {
        return <LoadingComponent />;
      }

      return <Component ref={ref} {...(rest as P)} />;
    },
  );

  WrappedComponent.displayName = `withLoading(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

// CSS animations (to be added to global styles)
export const loadingAnimations = `
@keyframes loading-bars {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

@keyframes loading-ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes loading-wave {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
`;

export default Loading;
