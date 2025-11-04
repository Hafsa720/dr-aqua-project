/**
 * Legal Document Utilities
 *
 * Utility functions for working with legal documents and markdown content.
 * These functions can be used in both client and server contexts.
 */

import type { MarkdownContent } from './markdown';
import { loadLegalDocument } from './markdown';

/**
 * Type definitions for legal documents
 */
export type LegalDocumentType =
  | 'terms-of-service'
  | 'privacy-policy'
  | 'cookie-policy';

export interface LegalDocumentInfo {
  type: LegalDocumentType;
  title: string;
  description: string;
  fileName: string;
  slug: string;
}

/**
 * Configuration for legal documents
 */
export const LEGAL_DOCUMENTS: Record<LegalDocumentType, LegalDocumentInfo> = {
  'terms-of-service': {
    type: 'terms-of-service',
    title: 'Terms of Service',
    description:
      'These terms govern your use of our services. Please read them carefully before engaging with Dr.Aqua.',
    fileName: 'terms-of-service.md',
    slug: 'terms',
  },
  'privacy-policy': {
    type: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
    fileName: 'privacy-policy.md',
    slug: 'privacy',
  },
  'cookie-policy': {
    type: 'cookie-policy',
    title: 'Cookie Policy',
    description:
      'Learn about how Dr.Aqua uses cookies and similar technologies to enhance your browsing experience.',
    fileName: 'cookie-policy.md',
    slug: 'cookies',
  },
} as const;

/**
 * Get legal document information by type
 */
export function getLegalDocumentInfo(
  type: LegalDocumentType,
): LegalDocumentInfo {
  return LEGAL_DOCUMENTS[type];
}

/**
 * Get all legal document information
 */
export function getAllLegalDocuments(): LegalDocumentInfo[] {
  return Object.values(LEGAL_DOCUMENTS);
}

/**
 * Load a legal document with enhanced error handling
 */
export async function loadLegalDocumentSafely(
  type: LegalDocumentType,
  language: 'en' | 'ar' = 'en',
): Promise<
  { success: true; data: MarkdownContent } | { success: false; error: string }
> {
  try {
    const content = await loadLegalDocument(type, language);
    return { success: true, data: content };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(`Failed to load legal document ${type}:`, error);
    return { success: false, error: errorMessage };
  }
}

/**
 * Extract dates from legal document content
 * Parses effective date and last updated date from markdown content
 */
export function extractLegalDocumentDates(content: string): {
  effectiveDate: string | null;
  lastUpdated: string | null;
} {
  // Match patterns like "**Effective Date:** January 1, 2024"
  const effectiveDateMatch = content.match(
    /\*\*Effective Date:\*\*\s*([^\n\r]+)/i,
  );
  const lastUpdatedMatch = content.match(/\*\*Last Updated:\*\*\s*([^\n\r]+)/i);

  return {
    effectiveDate: effectiveDateMatch
      ? effectiveDateMatch[1]?.trim() || null
      : null,
    lastUpdated: lastUpdatedMatch ? lastUpdatedMatch[1]?.trim() || null : null,
  };
}

/**
 * Generate navigation links for legal pages
 */
export function getLegalNavigationLinks() {
  return getAllLegalDocuments().map((doc) => ({
    label: doc.title,
    href: `/${doc.slug}`,
    description: doc.description,
  }));
}

/**
 * Validate if a string is a valid legal document type
 */
export function isValidLegalDocumentType(
  type: string,
): type is LegalDocumentType {
  return type in LEGAL_DOCUMENTS;
}

/**
 * Get legal document type from slug
 */
export function getLegalDocumentTypeFromSlug(
  slug: string,
): LegalDocumentType | null {
  const document = Object.values(LEGAL_DOCUMENTS).find(
    (doc) => doc.slug === slug,
  );
  return document ? document.type : null;
}

/**
 * Format legal document for SEO metadata
 */
export function formatLegalDocumentSEO(type: LegalDocumentType) {
  const doc = getLegalDocumentInfo(type);
  return {
    title: `${doc.title} | Dr.Aqua`,
    description: doc.description,
    url: `https://Dr.Aqua.com/${doc.slug}`,
    type: 'website',
    keywords: [
      'legal',
      'terms',
      'privacy',
      'policy',
      'Dr.Aqua',
      'digital agency',
      'uae',
      'dubai',
    ],
  };
}

/**
 * Check if legal document exists
 */
export async function checkLegalDocumentExists(
  type: LegalDocumentType,
  language: 'en' | 'ar' = 'en',
): Promise<boolean> {
  const result = await loadLegalDocumentSafely(type, language);
  return result.success;
}

/**
 * Get legal document summary (first paragraph)
 */
export function getLegalDocumentSummary(content: MarkdownContent): string {
  if (content.excerpt) {
    return content.excerpt;
  }

  // Extract first paragraph from content
  const paragraphs = content.content.split('\n\n');
  const firstContentParagraph = paragraphs.find(
    (p) =>
      p.trim() &&
      !p.startsWith('#') &&
      !p.startsWith('**Effective Date') &&
      !p.startsWith('**Last Updated'),
  );

  if (firstContentParagraph) {
    const cleanText = firstContentParagraph
      .replace(/\*\*/g, '') // Remove bold markers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
      .trim();

    return cleanText.length > 160
      ? `${cleanText.substring(0, 160)}...`
      : cleanText;
  }

  return '';
}

export type { MarkdownContent } from './markdown';
