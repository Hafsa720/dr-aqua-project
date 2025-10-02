'use client';

import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionDiv: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
}) => {
  return <div className={`${className} animate-fade-in-up`}>{children}</div>;
};
