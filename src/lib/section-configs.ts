/**
 * Centralized configuration for section components following DRY principles
 * This file provides consistent styling and configuration across all pages
 */

// Default gradient color configurations
export const SECTION_GRADIENT_COLORS = {
  primary: {
    primary: 'primary-500',
    secondary: 'primary-600',
  },
  process: {
    primary: 'primary-600',
    secondary: 'primary-700',
  },
  accent: {
    primary: 'secondary-500',
    secondary: 'secondary-600',
  },
} as const;

// Default StatsSection configuration
export const DEFAULT_STATS_CONFIG = {
  variant: 'primary' as const,
  gradientColors: SECTION_GRADIENT_COLORS.primary,
  className: '',
};

// Default ProcessSection configuration
export const DEFAULT_PROCESS_CONFIG = {
  variant: 'primary' as const,
  gradientColors: SECTION_GRADIENT_COLORS.process,
  showConnectingLine: true,
  className: '',
};

// Utility function to create consistent StatsSection props
export const createStatsConfig = (overrides: {
  stats: Array<{
    number: string;
    label: string;
    icon: string; // Changed to string to fix hydration errors
  }>;
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'neutral';
  gradientColors?: {
    primary: string;
    secondary: string;
  };
  className?: string;
}) => ({
  ...DEFAULT_STATS_CONFIG,
  ...overrides,
});

// Utility function to create consistent ProcessSection props
export const createProcessConfig = (overrides: {
  processSteps: Array<{
    step?: string;
    label?: string;
    description?: string;
  }>;
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'neutral';
  gradientColors?: {
    primary: string;
    secondary: string;
  };
  showConnectingLine?: boolean;
  className?: string;
}) => ({
  ...DEFAULT_PROCESS_CONFIG,
  ...overrides,
});

// Pre-configured section props for common use cases
export const SECTION_CONFIGS = {
  // Standard stats configuration for most pages
  defaultStats: {
    ...DEFAULT_STATS_CONFIG,
  },

  // Standard process configuration for most pages
  defaultProcess: {
    ...DEFAULT_PROCESS_CONFIG,
    title: 'Our Process',
    subtitle:
      'A proven methodology that ensures successful project delivery and exceeds client expectations.',
  },

  // How We Work configuration for home page
  howWeWork: {
    ...DEFAULT_PROCESS_CONFIG,
    title: 'How We Work',
    subtitle:
      'Our proven methodology ensures successful project delivery from concept to launch.',
  },
} as const;
