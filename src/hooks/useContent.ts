/**
 * Content Management React Hooks
 *
 * Custom hooks for loading and using internationalized content in React components.
 * Provides a simple, type-safe API for accessing content.
 */

'use client';

import { useEffect, useMemo, useState } from 'react';

import { contentConfig } from '@/content/config';
import {
  type ContentNamespace,
  formatContent,
  getBrowserLanguage,
  getNestedValue,
  loadContent,
  type SupportedLanguage,
} from '@/lib/content';

/**
 * Hook for loading content from a specific namespace
 * @param namespace The content namespace to load
 * @param language Optional language override
 * @returns Object with content data and loading state
 */
export function useContent<T = Record<string, unknown>>(
  namespace: ContentNamespace,
  language?: SupportedLanguage,
) {
  const [content, setContent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentLanguage = language || contentConfig.defaultLanguage;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    loadContent<T>({
      namespace,
      language: currentLanguage,
      fallback: true,
    })
      .then((data) => {
        if (isMounted) {
          setContent(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load content');
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [namespace, currentLanguage]);

  return {
    content,
    isLoading,
    error,
    language: currentLanguage,
  };
}

/**
 * Hook for accessing a specific text value with formatting support
 * @param namespace Content namespace
 * @param path Dot notation path to the text
 * @param options Formatting options
 * @returns Formatted text string
 */
export function useText(
  namespace: ContentNamespace,
  path: string,
  options: {
    language?: SupportedLanguage;
    values?: Record<string, string | number>;
    count?: number;
    plural?: string;
    fallback?: string;
  } = {},
): {
  text: string;
  isLoading: boolean;
  error: string | null;
} {
  const { content, isLoading, error } = useContent(namespace, options.language);

  const text = useMemo(() => {
    if (!content) return options.fallback || '';

    const rawText = getNestedValue(content, path, options.fallback);

    return formatContent(rawText, {
      values: options.values,
      count: options.count,
      plural: options.plural,
    });
  }, [
    content,
    path,
    options.values,
    options.count,
    options.plural,
    options.fallback,
  ]);

  return { text, isLoading, error };
}

/**
 * Hook for managing language state across the application
 * @returns Language management utilities
 */
export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    contentConfig.defaultLanguage,
  );

  // Initialize language from browser preference or localStorage on mount
  useEffect(() => {
    const savedLanguage =
      typeof window !== 'undefined'
        ? (localStorage.getItem('preferred-language') as SupportedLanguage)
        : null;

    const browserLanguage = getBrowserLanguage();
    const preferredLanguage =
      savedLanguage && contentConfig.supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : browserLanguage;

    setCurrentLanguage(preferredLanguage);
  }, []);

  const changeLanguage = (language: SupportedLanguage) => {
    if (contentConfig.supportedLanguages.includes(language)) {
      setCurrentLanguage(language);
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-language', language);
      }
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    supportedLanguages: contentConfig.supportedLanguages,
    isRTL: currentLanguage === 'ar', // Add more RTL languages as needed
  };
}

/**
 * Hook for loading multiple content namespaces at once
 * @param namespaces Array of namespaces to load
 * @param language Optional language override
 * @returns Object with all loaded content
 */
export function useMultipleContent(
  namespaces: ContentNamespace[],
  language?: SupportedLanguage,
) {
  const [contentMap, setContentMap] = useState<
    Record<ContentNamespace, Record<string, unknown>>
  >({} as Record<ContentNamespace, Record<string, unknown>>);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentLanguage = language || contentConfig.defaultLanguage;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    Promise.all(
      namespaces.map((namespace) =>
        loadContent({
          namespace,
          language: currentLanguage,
          fallback: true,
        }).then((content) => ({ namespace, content })),
      ),
    )
      .then((results) => {
        if (isMounted) {
          const newContentMap = results.reduce(
            (acc, { namespace, content }) => {
              acc[namespace] = content;
              return acc;
            },
            {} as Record<ContentNamespace, Record<string, unknown>>,
          );

          setContentMap(newContentMap);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load content');
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [namespaces, currentLanguage]);

  return {
    contentMap,
    isLoading,
    error,
    language: currentLanguage,
  };
}

/**
 * Utility hook for getting content with TypeScript support
 * @param namespace Content namespace
 * @param language Optional language
 * @returns Type-safe content access functions
 */
export function useTypedContent<T extends Record<string, unknown>>(
  namespace: ContentNamespace,
  language?: SupportedLanguage,
) {
  const { content, isLoading, error } = useContent<T>(namespace, language);

  const getText = (path: keyof T | string, fallback?: string): string => {
    if (!content) return fallback || '';
    return getNestedValue(content, path as string, fallback);
  };

  const getContent = <K extends keyof T>(key: K): T[K] | undefined => {
    return content?.[key];
  };

  return {
    content,
    getText,
    getContent,
    isLoading,
    error,
    language: language || contentConfig.defaultLanguage,
  };
}
