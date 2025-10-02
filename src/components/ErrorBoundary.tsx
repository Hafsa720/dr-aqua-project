'use client';

import { AlertTriangle, ChevronDown, Copy, RefreshCw } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  showRefresh?: boolean;
  className?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
}

/**
 * Enhanced Error Boundary Component
 *
 * Features:
 * - Catches JavaScript errors in child components
 * - Shows user-friendly error messages
 * - Detailed error information for development
 * - Copy error details to clipboard
 * - Refresh/retry functionality
 * - Custom fallback UI support
 * - Error reporting callback
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
  }

  handleRefresh = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
  };

  handleToggleDetails = () => {
    this.setState((prev) => ({
      showDetails: !prev.showDetails,
    }));
  };

  handleCopyError = async () => {
    const { error, errorInfo } = this.state;
    if (!error) return;

    const errorText = `
Error: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo?.componentStack || 'Not available'}
`;

    try {
      await navigator.clipboard.writeText(errorText);
    } catch (err) {
      console.error('Failed to copy error to clipboard:', err);
    }
  };

  render() {
    const { hasError, error, errorInfo, showDetails } = this.state;
    const {
      children,
      fallback,
      showDetails: showDetailsDefault = true,
      showRefresh = true,
      className,
    } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div
          className={cn(
            'min-h-[400px] flex items-center justify-center p-6',
            className,
          )}
        >
          <div className='max-w-lg w-full'>
            <div className='bg-white rounded-lg border border-red-200 shadow-lg overflow-hidden'>
              {/* Error Header */}
              <div className='bg-red-50 px-6 py-4 border-b border-red-200'>
                <div className='flex items-center gap-3'>
                  <div className='flex-shrink-0'>
                    <AlertTriangle className='w-6 h-6 text-red-600' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-lg font-semibold text-red-900'>
                      Something went wrong
                    </h3>
                    <p className='text-sm text-red-700 mt-1'>
                      An unexpected error occurred while rendering this
                      component.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Content */}
              <div className='px-6 py-4'>
                {error && (
                  <div className='mb-4'>
                    <p className='text-sm font-medium text-gray-900 mb-2'>
                      Error Message:
                    </p>
                    <code className='block p-3 bg-gray-100 rounded text-sm text-red-600 break-all'>
                      {error.message}
                    </code>
                  </div>
                )}

                {/* Action Buttons */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {showRefresh && (
                    <button
                      onClick={this.handleRefresh}
                      className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors'
                    >
                      <RefreshCw className='w-4 h-4' />
                      Try Again
                    </button>
                  )}

                  {error && (
                    <button
                      onClick={this.handleCopyError}
                      className='inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors'
                    >
                      <Copy className='w-4 h-4' />
                      Copy Error
                    </button>
                  )}

                  {showDetailsDefault &&
                    process.env.NODE_ENV === 'development' && (
                      <button
                        onClick={this.handleToggleDetails}
                        className='inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors'
                      >
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform',
                            showDetails && 'rotate-180',
                          )}
                        />
                        {showDetails ? 'Hide' : 'Show'} Details
                      </button>
                    )}
                </div>

                {/* Development Details */}
                {showDetails && process.env.NODE_ENV === 'development' && (
                  <div className='space-y-4'>
                    {error?.stack && (
                      <div>
                        <p className='text-sm font-medium text-gray-900 mb-2'>
                          Stack Trace:
                        </p>
                        <pre className='p-3 bg-gray-100 rounded text-xs overflow-auto max-h-40 text-gray-700'>
                          {error.stack}
                        </pre>
                      </div>
                    )}

                    {errorInfo?.componentStack && (
                      <div>
                        <p className='text-sm font-medium text-gray-900 mb-2'>
                          Component Stack:
                        </p>
                        <pre className='p-3 bg-gray-100 rounded text-xs overflow-auto max-h-40 text-gray-700'>
                          {errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Production Message */}
                {process.env.NODE_ENV === 'production' && (
                  <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded'>
                    <p className='text-sm text-yellow-800'>
                      <strong>Note:</strong> If this error persists, please
                      contact support with the error message above.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

/**
 * HOC for wrapping components with Error Boundary
 */
function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>,
) {
  const WithErrorBoundaryComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithErrorBoundaryComponent;
}

export default ErrorBoundary;
export { withErrorBoundary };
