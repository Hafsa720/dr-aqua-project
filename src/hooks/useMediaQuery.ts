'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Use addEventListener for modern browsers
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  // Return false during SSR and initial render to prevent hydration mismatch
  return mounted ? matches : false;
}

// Predefined breakpoint hooks
export const useMobile = () => useMediaQuery('(max-width: 768px)');
export const useTablet = () =>
  useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
export const useDesktop = () => useMediaQuery('(min-width: 1025px)');
export const useReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)');
