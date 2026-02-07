// Reusable Framer Motion variants following DRY principles
export const MOTION_VARIANTS = {
  // Container variants - Faster
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Reduced from 0.1
        delayChildren: 0.1, // Reduced from 0.2
      },
    },
  },

  // Fade animations - Faster
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }, // Reduced from 0.6
    },
  },

  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }, // Reduced from 0.6
    },
  },

  fadeInScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  // Process step variants
  processStep: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -15,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  },

  // Circle/badge variants - Faster
  processBadge: {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300, // Increased for faster animation
        damping: 18, // Slightly reduced for more bounce
        delay: 0.1, // Reduced from 0.3
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 8,
      },
    },
  },

  // Glow effect variants
  glowEffect: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4 },
    },
    hover: {
      opacity: 1,
      scale: 1.4,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  },

  // Text variants
  textGlow: {
    hover: {
      textShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
      transition: { duration: 0.3 },
    },
  },

  // Button variants
  buttonTap: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },

  // Card variants
  cardHover: {
    whileHover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },

  // Stats counter variants - Faster
  statsBadge: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250, // Increased for faster animation
        damping: 15,
        delay: 0.05, // Much reduced from 0.2
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  },

  // Mobile-optimized variants
  mobileProcessStep: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
      y: 2,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  },

  // Touch-friendly badge variant
  mobileBadge: {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
        delay: 0.2,
      },
    },
    tap: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  },
} as const;

// Utility function to create custom variants - Faster
export const createProcessStepVariants = (index: number) => ({
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Reduced from 0.6
      delay: index * 0.08, // Reduced from 0.15
      ease: 'easeOut' as const,
    },
  },
});

export const createGlowVariants = (baseColor: string, intensity = 0.3) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: intensity * 0.5, // Make default state lighter
    scale: 1,
    transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' as const }, // Faster: 0.8->0.5, delay 0.3->0.1
  },
  groupHover: {
    opacity: Math.min(intensity * 3.5, 0.6), // Increased from *2 to *3.5, capped at 0.6
    scale: intensity < 0.15 ? 1.2 : 1.15, // Increased scaling for stronger hover
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
});
