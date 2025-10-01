'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion } from '@/components/MotionWrapper';
import {
  getMotionConfig,
  useReducedMotion,
} from '@/lib/hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * AnimatedCounter Component
 *
 * Animates numbers from 0 to the target value when the component comes into view.
 * Supports both numbers and strings with suffixes (like "500+", "95%", "10x").
 *
 * @param value - The target value to animate to (e.g., "500+", "95%", "10x")
 * @param duration - Animation duration in seconds (default: 2)
 * @param className - Additional CSS classes
 */
export default function AnimatedCounter({
  value,
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const prefersReducedMotion = useReducedMotion();

  // Extract numeric part and suffix from the value
  const numericMatch = value?.match(/^(\d+(?:\.\d+)?)/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[1] ?? '0') : 0;
  const suffix = value?.replace(/^(\d+(?:\.\d+)?)/, '') ?? '';

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '-20px' },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Animate the counter when in view (or show immediately if reduced motion)
  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        // Show final value immediately if user prefers reduced motion
        setDisplayValue(`${targetNumber}${suffix}`);
        return;
      }

      let startValue = 0;
      const increment = targetNumber / (duration * 60); // 60 FPS

      const animate = () => {
        startValue += increment;
        if (startValue >= targetNumber) {
          setDisplayValue(`${targetNumber}${suffix}`);
        } else {
          setDisplayValue(`${Math.round(startValue)}${suffix}`);
          requestAnimationFrame(animate);
        }
      };

      const timeout = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 100);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isInView, targetNumber, suffix, duration, prefersReducedMotion]);

  const motionProps = getMotionConfig(
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
      transition: {
        duration: 0.6,
      },
    },
    prefersReducedMotion,
  );

  return (
    <motion.span ref={ref} className={className} {...motionProps}>
      {displayValue}
    </motion.span>
  );
}
