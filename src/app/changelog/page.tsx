import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { generateMetadata as genMeta } from '@/lib/og';

export const metadata: Metadata = genMeta({
  title: 'Changelog',
  description:
    'Track all updates, improvements, and changes to RapidBizz platform',
  path: '/changelog',
});

function getChangelogContent() {
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  const content = fs.readFileSync(changelogPath, 'utf8');
  return content;
}

export default function ChangelogPage() {
  const changelogContent = getChangelogContent();

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)][linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]' />
          <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]' />
        </div>

        <div className='relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl text-center'>
            <div className='mb-8 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700'>
              📋 Product Updates
            </div>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Changelog
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Stay up to date with all the latest improvements, features, and
              fixes to our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Changelog Content */}
      <section className='py-16'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8'>
          <div className='prose prose-lg prose-blue max-w-none'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className='text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200'>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className='text-3xl font-semibold text-gray-800 mt-12 mb-6 pb-3 border-b border-gray-200'>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className='text-2xl font-semibold text-gray-700 mt-8 mb-4'>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className='leading-relaxed'>{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className='font-semibold text-gray-900'>
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className='font-medium text-blue-600 hover:text-blue-500 underline underline-offset-4'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className='bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900'>
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className='bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm'>
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6'>
                    {children}
                  </blockquote>
                ),
              }}
            >
              {changelogContent}
            </ReactMarkdown>
          </div>

          {/* Call to Action */}
          <div className='mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 p-8 text-center border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Have suggestions for improvements?
            </h3>
            <p className='text-gray-600 mb-6'>
              We&apos;re always looking to improve our platform based on user
              feedback.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors'
              >
                Contact Us
              </a>
              <div className='relative inline-block'>
                <button
                  disabled
                  className='inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-400 bg-gray-100 cursor-not-allowed opacity-50'
                  title='Coming Soon'
                  aria-describedby='report-issue-coming-soon'
                >
                  Report Issue
                </button>
                <div
                  id='report-issue-coming-soon'
                  className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none'
                >
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
