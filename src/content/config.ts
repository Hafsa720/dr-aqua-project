/**
 * Content Management Configuration
 *
 * This file defines the structure and configuration for the internationalization
 * system, making it easy for non-technical users to manage content.
 */

export type SupportedLanguage = 'en' | 'ar' | 'ur';

export interface ContentConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: SupportedLanguage[];
  fallbackLanguage: SupportedLanguage;
  contentDirectory: string;
}

export const contentConfig: ContentConfig = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'ar', 'ur'],
  fallbackLanguage: 'en',
  contentDirectory: '/src/content',
};

/**
 * Available content namespaces
 * These correspond to the JSON files in each language directory
 */
export type ContentNamespace =
  | 'common' // Navigation, buttons, forms, etc.
  | 'home' // Home page content
  | 'services' // Services page content
  | 'projects' // Projects page content
  | 'team' // Team page content
  | 'careers' // Careers page content
  | 'contact'; // Contact page content

/**
 * Language metadata for UI display
 */
export const languageMetadata: Record<
  SupportedLanguage,
  {
    name: string;
    nativeName: string;
    code: string;
    direction: 'ltr' | 'rtl';
    flag: string;
  }
> = {
  en: {
    name: 'English',
    nativeName: 'English',
    code: 'en',
    direction: 'ltr',
    flag: '🇺🇸',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    code: 'ar',
    direction: 'rtl',
    flag: '🇦🇪',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
    code: 'ur',
    direction: 'rtl',
    flag: '🇵🇰',
  },
};

/**
 * Content file validation schema
 * Ensures content files have the expected structure
 */
export interface ContentValidationError {
  file: string;
  key: string;
  error: string;
}

/**
 * Content loading options
 */
export interface ContentLoadOptions {
  language?: SupportedLanguage;
  namespace: ContentNamespace;
  fallback?: boolean;
}
