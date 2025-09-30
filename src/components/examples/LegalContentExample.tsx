/**
 * Example component showing how to use the legal document utilities
 *
 * This example demonstrates different ways to load and render legal documents:
 * 1. Server-side loading with Next.js App Router
 * 2. Client-side loading with React hooks
 * 3. Direct utility usage
 */

import React from 'react';

import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { useLegalContent } from '@/hooks/useLegalContent';
import {
  extractLegalDocumentDates,
  getLegalDocumentInfo,
  getLegalDocumentSummary,
  type LegalDocumentType,
} from '@/lib/legal';
import { loadLegalDocument } from '@/lib/markdown';

// Example 1: Server Component with App Router
async function ServerSideExample({
  documentType,
}: {
  documentType: LegalDocumentType;
}) {
  // Load content on the server
  const content = await loadLegalDocument(documentType);
  const docInfo = getLegalDocumentInfo(documentType);
  const dates = extractLegalDocumentDates(content.content);
  const summary = getLegalDocumentSummary(content);

  return (
    <div>
      <h1>{docInfo.title}</h1>
      <p>{summary}</p>
      {dates.effectiveDate && <p>Effective: {dates.effectiveDate}</p>}
      {dates.lastUpdated && <p>Updated: {dates.lastUpdated}</p>}

      <MarkdownRenderer
        content={content}
        showTableOfContents={true}
        showMetadata={false}
      />
    </div>
  );
}

// Example 2: Client Component with Hook
function ClientSideExample({
  documentType,
}: {
  documentType: LegalDocumentType;
}) {
  const { content, isLoading, error, effectiveDate, lastUpdated } =
    useLegalContent(documentType);
  const docInfo = getLegalDocumentInfo(documentType);

  if (isLoading) return <div>Loading {docInfo.title}...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!content) return <div>Document not found</div>;

  return (
    <div>
      <h1>{docInfo.title}</h1>
      <p>{docInfo.description}</p>
      {effectiveDate && <p>Effective: {effectiveDate}</p>}
      {lastUpdated && <p>Updated: {lastUpdated}</p>}

      <MarkdownRenderer
        content={content}
        showTableOfContents={true}
        showMetadata={true}
      />
    </div>
  );
}

// Example 3: Direct utility usage
async function DirectUsageExample() {
  try {
    // Load multiple documents
    const [terms, _privacy, _cookies] = await Promise.all([
      loadLegalDocument('terms-of-service'),
      loadLegalDocument('privacy-policy'),
      loadLegalDocument('cookie-policy'),
    ]);

    // Extract information
    const termsInfo = getLegalDocumentInfo('terms-of-service');
    const termsDates = extractLegalDocumentDates(terms.content);
    const termsSummary = getLegalDocumentSummary(terms);

    return (
      <div>
        <h2>All Legal Documents</h2>

        <article>
          <h3>{termsInfo.title}</h3>
          <p>{termsSummary}</p>
          <small>
            Effective: {termsDates.effectiveDate} | Updated:{' '}
            {termsDates.lastUpdated}
          </small>
          <p>
            Word count: {terms.wordCount} | Reading time: {terms.readingTime}{' '}
            min
          </p>
        </article>

        {/* Similar blocks for privacy and cookies */}
      </div>
    );
  } catch (error) {
    return <div>Failed to load documents</div>;
  }
}

// Example 4: Minimal usage with error handling
function MinimalExample() {
  const { content, isLoading, error } = useLegalContent('terms-of-service');

  if (isLoading) return <div>Loading...</div>;
  if (error || !content) return <div>Unable to load terms</div>;

  return (
    <MarkdownRenderer
      content={content}
      showTableOfContents={false}
      showMetadata={false}
    />
  );
}

export {
  ClientSideExample,
  DirectUsageExample,
  MinimalExample,
  ServerSideExample,
};
