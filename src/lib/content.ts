/**
 * Content Management Utilities
 *
 * This module provides utilities for loading and managing internationalized content.
 * It's designed to be simple for non-technical users to understand and maintain.
 */

import {
  contentConfig,
  type ContentLoadOptions,
  type ContentNamespace,
  type SupportedLanguage,
} from '@/content/config';

export type { ContentNamespace, SupportedLanguage };

// Content cache to avoid re-importing the same content multiple times
const contentCache = new Map<string, Record<string, unknown>>();

/**
 * Load content for a specific namespace and language
 * @param options Content loading options
 * @returns Promise<ContentData> The loaded content
 */
export async function loadContent<T = Record<string, unknown>>(
  options: ContentLoadOptions,
): Promise<T> {
  const {
    language = contentConfig.defaultLanguage,
    namespace,
    fallback = true,
  } = options;

  const cacheKey = `${language}-${namespace}`;

  // Return cached content if available
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey) as T;
  }

  try {
    // Dynamic import based on language and namespace
    const content = await import(`@/content/${language}/${namespace}.json`);
    const data = content.default || content;

    // Cache the loaded content
    contentCache.set(cacheKey, data);

    return data;
  } catch (error) {
    // Fallback to default language if requested and not already using it
    if (fallback && language !== contentConfig.fallbackLanguage) {
      return loadContent({
        language: contentConfig.fallbackLanguage,
        namespace,
        fallback: false, // Prevent infinite recursion
      });
    }

    // If fallback also fails, return empty object
    return {} as T;
  }
}

/**
 * Get a nested value from content object using dot notation
 * @param obj The content object
 * @param path Dot notation path (e.g., 'hero.title')
 * @param fallback Fallback value if path not found
 * @returns The value at the specified path
 */
export function getNestedValue(
  obj: Record<string, unknown>,
  path: string,
  fallback?: string,
): string {
  if (!obj || !path) return fallback || '';

  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current == null || typeof current !== 'object') {
      return fallback || '';
    }
    current = (current as Record<string, unknown>)[key];
  }

  return (typeof current === 'string' ? current : fallback) ?? '';
}

/**
 * Replace placeholders in text with provided values
 * @param text Text with placeholders like {name}, {count}, etc.
 * @param values Object with replacement values
 * @returns Text with replaced placeholders
 */
export function replacePlaceholders(
  text: string,
  values: Record<string, string | number> = {},
): string {
  if (!text) return '';

  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() ?? match;
  });
}

/**
 * Format content with interpolation and pluralization support
 * @param content The content string
 * @param options Formatting options
 * @returns Formatted string
 */
export function formatContent(
  content: string,
  options: {
    values?: Record<string, string | number>;
    count?: number;
    plural?: string;
  } = {},
): string {
  if (!content) return '';

  let result = content;

  // Handle pluralization
  if (typeof options.count === 'number' && options.plural) {
    result = options.count === 1 ? content : options.plural;
  }

  // Handle value interpolation
  if (options.values) {
    result = replacePlaceholders(result, options.values);
  }

  return result;
}

/**
 * Validate that a content object has all required keys
 * @param content The content object to validate
 * @param requiredKeys Array of required key paths
 * @returns Array of missing keys
 */
export function validateContent(
  content: Record<string, unknown>,
  requiredKeys: string[],
): string[] {
  const missingKeys: string[] = [];

  for (const key of requiredKeys) {
    const value = getNestedValue(content, key);
    if (!value) {
      missingKeys.push(key);
    }
  }

  return missingKeys;
}

/**
 * Get the current browser language preference
 * @returns Browser language code or default language
 */
export function getBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return contentConfig.defaultLanguage;
  }

  const browserLang = window.navigator.language.split(
    '-',
  )[0] as SupportedLanguage;

  return contentConfig.supportedLanguages.includes(browserLang)
    ? browserLang
    : contentConfig.defaultLanguage;
}

/**
 * Clear the content cache (useful for development or when language changes)
 */
export function clearContentCache(): void {
  contentCache.clear();
}

/**
 * Get content cache statistics (useful for debugging)
 */
export function getContentCacheStats(): {
  size: number;
  keys: string[];
} {
  return {
    size: contentCache.size,
    keys: Array.from(contentCache.keys()),
  };
}
