import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import { cn } from '@/lib/utils';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'animated-underline custom-link inline-flex items-center font-medium',
          'focus-ring touch-feedback',
          'border-dark border-b border-dotted hover:border-black/0',
          'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

UnderlineLink.displayName = 'UnderlineLink';

export default UnderlineLink;
