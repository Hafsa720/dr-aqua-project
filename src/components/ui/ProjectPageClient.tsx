'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  initial?: Parameters<typeof motion.div>[0]['initial'];
  animate?: Parameters<typeof motion.div>[0]['animate'];
  transition?: Parameters<typeof motion.div>[0]['transition'];
  whileInView?: Parameters<typeof motion.div>[0]['whileInView'];
  whileHover?: Parameters<typeof motion.div>[0]['whileHover'];
  whileTap?: Parameters<typeof motion.div>[0]['whileTap'];
}

export const MotionDiv: React.FC<MotionWrapperProps> = ({
  children,
  className,
  initial,
  animate,
  transition,
  whileInView,
  whileHover,
  whileTap,
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
};
