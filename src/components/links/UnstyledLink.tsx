import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (
    {
      children,
      href,
      openNewTab,
      className,
      nextLinkProps,
      onMouseEnter,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={className}
          onMouseEnter={onMouseEnter}
          onClick={onClick}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        {...rest}
        className={cn('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  },
);

UnstyledLink.displayName = 'UnstyledLink';

export default UnstyledLink;
