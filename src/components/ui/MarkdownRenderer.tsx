/**
 * Markdown Renderer Component
 *
 * A React component for rendering markdown content with custom styling
 * and interactive features.
 */

'use client';

import React from 'react';

import { motion } from '@/components/MotionWrapper';
import type { MarkdownContent } from '@/lib/markdown';

interface MarkdownRendererProps {
  content: MarkdownContent;
  className?: string;
  showMetadata?: boolean;
  showTableOfContents?: boolean;
  enableSyntaxHighlighting?: boolean;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

/**
 * Table of Contents component
 */
const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  className = '',
}) => {
  const [activeHeading, setActiveHeading] = React.useState<string>('');

  // Generate TOC from content (only h2 and h3 for better organization)
  const tocItems = React.useMemo(() => {
    const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>([^<]+)<\/h[2-3]>/g;
    const items: Array<{ level: number; title: string; id: string }> = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      items.push({
        level: parseInt(match[1] || '2'),
        title: match[3]?.trim() || '',
        id: match[2] || '',
      });
    }

    return items;
  }, [content]);

  // Handle scroll-based active heading
  React.useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.getBoundingClientRect().top <= 100) {
          setActiveHeading(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`toc ${className}`}
    >
      <h3 className='text-lg font-semibold mb-4 text-gray-900'>
        Table of Contents
      </h3>
      <ul className='space-y-2'>
        {tocItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`toc-item toc-level-${item.level}`}
            style={{ marginLeft: `${(item.level - 1) * 16}px` }}
          >
            <a
              href={`#${item.id}`}
              className={`block py-1 px-2 rounded text-sm transition-colors duration-200 ${
                activeHeading === item.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.id);
                if (target) {
                  // Account for navbar height (approximately 80px) plus some padding
                  const yOffset = -100;
                  const y =
                    target.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

/**
 * Metadata display component
 */
const ContentMetadata: React.FC<{ content: MarkdownContent }> = ({
  content,
}) => {
  const { metadata, readingTime, wordCount } = content;

  if (!metadata || Object.keys(metadata).length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='content-metadata mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600'>
        {metadata.author && (
          <div>
            <span className='font-medium text-gray-900'>Author:</span>{' '}
            {metadata.author}
          </div>
        )}

        {metadata.date && (
          <div>
            <span className='font-medium text-gray-900'>Published:</span>{' '}
            {new Date(metadata.date).toLocaleDateString()}
          </div>
        )}

        {metadata.lastUpdated && (
          <div>
            <span className='font-medium text-gray-900'>Last Updated:</span>{' '}
            {new Date(metadata.lastUpdated).toLocaleDateString()}
          </div>
        )}

        {readingTime && (
          <div>
            <span className='font-medium text-gray-900'>Reading Time:</span>{' '}
            {readingTime} min{readingTime !== 1 ? 's' : ''}
          </div>
        )}

        {wordCount && (
          <div>
            <span className='font-medium text-gray-900'>Word Count:</span>{' '}
            {wordCount.toLocaleString()}
          </div>
        )}

        {metadata.tags && metadata.tags.length > 0 && (
          <div className='md:col-span-2'>
            <span className='font-medium text-gray-900'>Tags:</span>
            <div className='flex flex-wrap gap-2 mt-1'>
              {metadata.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className='px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Main MarkdownRenderer component
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
  showMetadata = true,
  showTableOfContents = false,
  enableSyntaxHighlighting = true,
}) => {
  // Process HTML content to add IDs to headings for TOC
  const processedHtml = React.useMemo(() => {
    let html = content.html;

    // Add IDs to headings for table of contents
    html = html.replace(
      /<h([1-6])([^>]*)>([^<]+)<\/h[1-6]>/g,
      (match, level, attrs, title) => {
        const id = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        return `<h${level}${attrs} id="${id}">${title}</h${level}>`;
      },
    );

    return html;
  }, [content.html]);

  return (
    <div className={`markdown-renderer ${className}`}>
      {/* Content Title */}
      {content.metadata?.title && (
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='mb-8'
        >
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            {content.metadata.title}
          </h1>
          {content.metadata.description && (
            <p className='text-xl text-gray-600'>
              {content.metadata.description}
            </p>
          )}
        </motion.header>
      )}

      {/* Content Metadata */}
      {showMetadata && <ContentMetadata content={content} />}

      {/* Layout with TOC */}
      <div
        className={`markdown-layout ${showTableOfContents ? 'with-toc' : ''}`}
      >
        {/* Table of Contents */}
        {showTableOfContents && (
          <aside className='toc-sidebar hidden lg:block sticky top-8 w-64 max-h-screen overflow-y-auto'>
            <TableOfContents content={processedHtml} />
          </aside>
        )}

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='markdown-content prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 hover:prose-a:text-primary-700'
        >
          <div
            dangerouslySetInnerHTML={{ __html: processedHtml }}
            className={enableSyntaxHighlighting ? 'syntax-highlighted' : ''}
          />
        </motion.main>
      </div>

      {/* Mobile TOC */}
      {showTableOfContents && (
        <div className='lg:hidden mt-8 p-4 bg-gray-50 rounded-lg'>
          <TableOfContents content={processedHtml} />
        </div>
      )}
    </div>
  );
};

export default MarkdownRenderer;
export type { MarkdownRendererProps };
