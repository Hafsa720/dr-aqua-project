'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import type { SupportedLanguage } from '@/content/config';
import { contentConfig } from '@/content/config';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(
    contentConfig.defaultLanguage,
  );
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage on mount (only once)
  useEffect(() => {
    if (isInitialized) return;

    const savedLanguage = localStorage.getItem(
      'language',
    ) as SupportedLanguage | null;
    if (
      savedLanguage &&
      contentConfig.supportedLanguages.includes(savedLanguage)
    ) {
      setLanguageState(savedLanguage);
      const newDirection =
        savedLanguage === 'ar' || savedLanguage === 'ur' ? 'rtl' : 'ltr';
      setDirection(newDirection);
      document.documentElement.dir = newDirection;
      document.documentElement.lang = savedLanguage;
    } else {
      document.documentElement.dir = direction;
      document.documentElement.lang = language;
    }
    setIsInitialized(true);
  }, [isInitialized, direction, language]);

  // Update direction and save to localStorage when language changes
  const setLanguage = React.useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    const newDirection = lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    localStorage.setItem('language', lang);

    // Update document direction
    document.documentElement.dir = newDirection;
    document.documentElement.lang = lang;
  }, []);

  const contextValue = React.useMemo(
    () => ({ language, setLanguage, direction }),
    [language, setLanguage, direction],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
