'use client';

import { createContext, type ReactNode, useContext } from 'react';

import { type Theme, useTheme } from '@/lib/hooks/useTheme';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeHook = useTheme();

  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  );
};
