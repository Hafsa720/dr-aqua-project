import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

export function getMotionConfig(
  config: Record<string, any>,
  reducedMotion: boolean,
) {
  if (reducedMotion) {
    // Disable animations by removing animation-related properties
    const {
      variants: _variants,
      transition: _transition,
      whileHover: _whileHover,
      whileTap: _whileTap,
      animate: _animate,
      ...rest
    } = config;
    return {
      ...rest,
      transition: { duration: 0 },
    };
  }
  return config;
}
