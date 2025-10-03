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

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      'language',
    ) as SupportedLanguage | null;
    if (
      savedLanguage &&
      contentConfig.supportedLanguages.includes(savedLanguage)
    ) {
      setLanguageState(savedLanguage);
      setDirection(savedLanguage === 'ar' || savedLanguage === 'ur' ? 'rtl' : 'ltr');
    }
  }, []);

  // Update direction and save to localStorage when language changes
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    setDirection(lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr');
    localStorage.setItem('language', lang);

    // Update document direction
    document.documentElement.dir = lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Set initial direction
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
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
