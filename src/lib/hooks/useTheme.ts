'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light';

export const useTheme = () => {
  const [mounted, setMounted] = useState(false);

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    // Always ensure light theme
    const root = document.documentElement;
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
  }, []);

  return {
    theme: 'light' as Theme,
    resolvedTheme: 'light' as const,
    setTheme: () => {}, // No-op since we only support light theme
    mounted,
  };
};
