'use client';

import React from 'react';

// AnimatePresence replacement - just renders children
export const AnimatePresence: React.FC<{
  children: React.ReactNode;
  mode?: string;
}> = ({ children }) => <>{children}</>;

// motion.div replacement - renders a div with animation classes
interface MotionDivProps {
  children?: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  whileHover?: any;
  whileTap?: any;
  viewport?: any;
  variants?: any;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  ref?: React.Ref<any>;
  title?: string;
}

const MotionDivComponent: React.FC<MotionDivProps> = ({
  children,
  className = '',
  onClick,
  onHoverStart,
  onHoverEnd,
  style,
  ref,
  ...rest
}) => {
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-300 ease-in-out`}
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={style}
      {...(rest as any)}
    >
      {children}
    </div>
  );
};

export const motion = {
  div: MotionDivComponent,
  span: (props: MotionDivProps) => (
    <span
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </span>
  ),
  a: (
    props: MotionDivProps & {
      href?: string;
      target?: string;
      rel?: string;
      'aria-label'?: string;
      role?: string;
      'aria-modal'?: boolean;
      'aria-labelledby'?: string;
      'aria-describedby'?: string;
    },
  ) => (
    <a
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </a>
  ),
  p: (props: MotionDivProps) => (
    <p
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </p>
  ),
  h1: (props: MotionDivProps) => (
    <h1
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </h1>
  ),
  h2: (props: MotionDivProps) => (
    <h2
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </h2>
  ),
  h3: (props: MotionDivProps) => (
    <h3
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </h3>
  ),
  h4: (props: MotionDivProps) => (
    <h4
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </h4>
  ),
  header: (props: MotionDivProps) => (
    <header
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </header>
  ),
  main: (props: MotionDivProps) => (
    <main
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </main>
  ),
  nav: (props: MotionDivProps) => (
    <nav
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </nav>
  ),
  button: (
    props: MotionDivProps & { type?: 'button' | 'submit' | 'reset' },
  ) => (
    <button
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </button>
  ),
  form: (
    props: MotionDivProps & { onSubmit?: (e: React.FormEvent) => void },
  ) => (
    <form
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </form>
  ),
  li: (props: MotionDivProps) => (
    <li
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </li>
  ),
  blockquote: (props: MotionDivProps) => (
    <blockquote
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </blockquote>
  ),
  section: (props: MotionDivProps) => (
    <section
      {...props}
      className={`${props.className || ''} transition-all duration-300`}
    >
      {props.children}
    </section>
  ),
};

export default motion;
