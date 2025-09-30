'use client';

import React, { useRef, useState } from 'react';

import { motion } from '@/components/MotionWrapper';
import { cn } from '@/lib/utils';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  lightColor?: string;
  shadowColor?: string;
  enableGlow?: boolean;
}

/**
 * Card3D Component
 *
 * A 3D hover effect card that responds to mouse movement with directional lighting.
 * When you hover on different areas of the card, it tilts and creates a lighting effect
 * that appears to come from that direction.
 *
 * @param children - Content to render inside the card
 * @param className - Additional CSS classes
 * @param intensity - Tilt intensity (0-1, default: 0.5)
 * @param lightColor - Color of the light effect (default: primary-400)
 * @param shadowColor - Color of the shadow effect (default: primary-600)
 * @param enableGlow - Whether to enable glow effect on hover (default: true)
 *
 * @example
 * <Card3D>
 *   <div className="p-6">
 *     <h3>Card Title</h3>
 *     <p>Card content</p>
 *   </div>
 * </Card3D>
 *
 * @example
 * <Card3D intensity={0.8} lightColor="secondary-400" enableGlow={false}>
 *   <ServiceCard {...serviceProps} />
 * </Card3D>
 */
export default function Card3D({
  children,
  className,
  intensity = 0.5,
  lightColor = 'primary-400',
  shadowColor = 'primary-600',
  enableGlow = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const tiltX = mousePosition.y * intensity * 15; // Reduced from 20 to 15
  const tiltY = mousePosition.x * intensity * -15; // Reduced from -20 to -15

  // Calculate light position based on mouse position
  const lightX = 50 + mousePosition.x * 25; // Light moves from 25% to 75%
  const lightY = 50 + mousePosition.y * 25; // Light moves from 25% to 75%

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative transform-gpu transition-all duration-300 ease-out',
        'preserve-3d perspective-1000',
        className,
      )}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background lighting effect */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300 rounded-inherit pointer-events-none',
          isHovered && 'opacity-100',
        )}
        style={{
          background: `radial-gradient(circle at ${lightX}% ${lightY}%, 
            oklch(var(--color-${lightColor}) / 0.15) 0%, 
            oklch(var(--color-${lightColor}) / 0.08) 40%, 
            transparent 70%)`,
        }}
      />

      {/* Glow effect */}
      {enableGlow && (
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-300 rounded-inherit pointer-events-none blur-xl -z-10',
            isHovered && 'opacity-60',
          )}
          style={{
            background: `radial-gradient(circle at ${lightX}% ${lightY}%, 
              oklch(var(--color-${shadowColor}) / 0.4) 0%, 
              transparent 60%)`,
          }}
        />
      )}

      {/* Card content */}
      <div className='relative z-10 h-full'>{children}</div>

      {/* Subtle highlight on top edge */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 rounded-t-inherit pointer-events-none',
          isHovered && 'opacity-40',
        )}
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            oklch(var(--color-${lightColor}) / 0.6) 50%, 
            transparent 100%)`,
        }}
      />
    </motion.div>
  );
}
