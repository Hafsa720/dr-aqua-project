'use client';

import { useEffect, useState } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';
import type { MarkdownContent } from '@/lib/markdown';

/**
 * Custom hook for loading legal document content
 * Handles loading states and provides utility for parsing metadata
 */
export function useLegalContent(documentType: string) {
  const [content, setContent] = useState<MarkdownContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { language } = useLanguage();

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Request the API with the currently selected language so the server
        // can return the localized markdown (falls back to default when missing).
        const response = await fetch(
          `/api/legal/${documentType}?lang=${encodeURIComponent(language)}`,
        );

        if (!response.ok) {
          throw new Error(
            `Failed to load ${documentType}: ${response.statusText}`,
          );
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
        console.error('Error loading legal content:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (documentType) {
      loadContent();
    }
  }, [documentType, language]);

  // Extract effective date and last updated from content
  const extractDates = (markdownContent: string) => {
    const effectiveDateMatch = markdownContent.match(
      /\*\*Effective Date:\*\*\s*([^\n\r]+)/,
    );
    const lastUpdatedMatch = markdownContent.match(
      /\*\*Last Updated:\*\*\s*([^\n\r]+)/,
    );

    return {
      effectiveDate: effectiveDateMatch ? effectiveDateMatch[1]?.trim() : null,
      lastUpdated: lastUpdatedMatch ? lastUpdatedMatch[1]?.trim() : null,
    };
  };

  // Parse dates from the markdown content
  const dates = content
    ? extractDates(content.content)
    : { effectiveDate: null, lastUpdated: null };

  return {
    content,
    isLoading,
    error,
    effectiveDate: dates.effectiveDate,
    lastUpdated: dates.lastUpdated,
    wordCount: content?.wordCount,
    readingTime: content?.readingTime,
  };
}

export type UseLegalContentReturn = ReturnType<typeof useLegalContent>;
