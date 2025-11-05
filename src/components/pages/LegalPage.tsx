/**
 * Legal Page Component
 *
 * A reusable component for displaying legal documents (terms, privacy, cookies)
 * that loads markdown content and renders it with proper styling and metadata.
 */

'use client';

import React from 'react';

import { motion } from '@/components/MotionWrapper';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { useLegalContent } from '@/hooks/useLegalContent';

interface LegalPageProps {
  /** The type of legal document to load */
  documentType: 'terms-of-service' | 'privacy-policy' | 'cookie-policy';
  /** The page title shown in the header */
  title: string;
  /** A brief description shown under the title */
  description: string;
  /** Optional subtitle for the document */
  subtitle?: string;
}

/**
 * Loading skeleton component
 */
const LoadingSkeleton: React.FC = () => (
  <div
    className='min-h-screen bg-white pt-96 pb-28'
    style={{ paddingTop: '24rem' }}
  >
    <div className='layout'>
      <div className='max-w-6xl mx-auto pt-8'>
        <div className='animate-pulse'>
          {/* Header skeleton - matches actual header structure */}
          <div className='text-center mb-16'>
            {/* Title */}
            <div className='h-14 bg-gray-300 rounded-lg mx-auto mb-6 max-w-md'></div>

            {/* Description */}
            <div className='h-6 bg-gray-200 rounded mx-auto mb-6 max-w-2xl'></div>

            {/* Subtitle */}
            <div className='h-5 bg-gray-200 rounded mx-auto mb-6 max-w-xl'></div>

            {/* Metadata row */}
            <div className='flex items-center justify-center gap-6 mb-8'>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-24'></div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-24'></div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-20'></div>
              </div>
            </div>
          </div>

          {/* Legal document content skeleton - more structured */}
          <div className='max-w-4xl mx-auto space-y-8'>
            {/* Table of contents skeleton */}
            <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
              <div className='h-6 bg-gray-300 rounded mb-4 max-w-48'></div>
              <div className='space-y-2'>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className='h-4 bg-gray-200 rounded max-w-64'
                  ></div>
                ))}
              </div>
            </div>

            {/* Main content sections */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className='space-y-4'>
                {/* Section heading */}
                <div className='h-8 bg-gray-300 rounded max-w-80'></div>

                {/* Section content */}
                <div className='space-y-3'>
                  {[...Array(3 + (i % 3))].map((_, j) => (
                    <div key={j} className='space-y-2'>
                      <div className='h-4 bg-gray-200 rounded'></div>
                      <div className='h-4 bg-gray-200 rounded max-w-5/6'></div>
                      {j % 2 === 0 && (
                        <div className='h-4 bg-gray-200 rounded max-w-4/5'></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer skeleton */}
          <div className='mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200 max-w-4xl mx-auto'>
            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 bg-gray-300 rounded-full flex-shrink-0'></div>
              <div className='flex-1'>
                <div className='h-5 bg-gray-300 rounded mb-2 max-w-48'></div>
                <div className='h-4 bg-gray-200 rounded mb-4 max-w-80'></div>
                <div className='flex gap-4'>
                  <div className='h-4 bg-gray-200 rounded w-36'></div>
                  <div className='h-4 bg-gray-200 rounded w-24'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Error component
 */
const ErrorDisplay: React.FC<{ error: string; onRetry?: () => void }> = ({
  error,
  onRetry,
}) => (
  <div className='min-h-screen bg-white pt-72 pb-28'>
    <div className='layout'>
      <div className='max-w-2xl mx-auto text-center mt-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-red-50 border border-red-200 rounded-lg p-8'
        >
          <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-red-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold text-red-900 mb-4'>
            Failed to Load Document
          </h2>
          <p className='text-red-700 mb-6'>{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200'
            >
              Try Again
            </button>
          )}
        </motion.div>
      </div>
    </div>
  </div>
);

/**
 * Main LegalPage component
 */
const LegalPage: React.FC<LegalPageProps> = ({
  documentType,
  title,
  description,
  subtitle,
}) => {
  const { content, isLoading, error, effectiveDate, lastUpdated, readingTime } =
    useLegalContent(documentType);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error || !content) {
    return (
      <ErrorDisplay
        error={error || 'Document not found'}
        onRetry={() =>
          typeof window !== 'undefined' && window.location.reload()
        }
      />
    );
  }

  return (
    <div className='min-h-screen bg-white pt-72 pb-28'>
      <div className='layout'>
        <div className='max-w-6xl mx-auto mt-8'>
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-primary-900 mb-6'>
              {title}
            </h1>

            <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
              {description}
            </p>

            {subtitle && (
              <p className='text-gray-500 text-base max-w-xl mx-auto mb-6'>
                {subtitle}
              </p>
            )}

            {/* Document metadata */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500'
            >
              {effectiveDate && (
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  <span>Effective: {effectiveDate}</span>
                </div>
              )}

              {lastUpdated && (
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                    />
                  </svg>
                  <span>Updated: {lastUpdated}</span>
                </div>
              )}

              {readingTime && (
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>{readingTime} min read</span>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Markdown Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MarkdownRenderer
              content={content}
              showMetadata={false} // We're showing custom metadata above
              showTableOfContents={true}
              enableSyntaxHighlighting={false} // Legal documents don't need syntax highlighting
              className='legal-document'
            />
          </motion.div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200'
          >
            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <svg
                  className='w-4 h-4 text-blue-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-2'>
                  Questions or Concerns?
                </h3>
                <p className='text-sm text-gray-600 mb-4'>
                  If you have any questions about this document or our
                  practices, please don't hesitate to contact us.
                </p>
                <div className='flex flex-wrap gap-4 text-sm'>
                  <a
                    href='mailto:legal@Dr.Aqua.com'
                    className='inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    legal@Dr.Aqua.com
                  </a>
                  <a
                    href='/contact'
                    className='inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
export type { LegalPageProps };
