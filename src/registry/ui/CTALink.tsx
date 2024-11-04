import React, { LinkHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

// Customized button variations
const linkVariants = cva(`text-base block hover:text-primary`, {
  variants: {
    variant: {
      simple: 'underline underline-offset-4',
      chevron: 'underline underline-offset-4',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'simple',
  },
});

export interface LinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  className?: string;
}

const CTALink = ({
  size,
  variant,
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <a className={cn(linkVariants({ className, variant, size }))} {...props}>
      {children}
      {variant === 'chevron' && (
        <>
          <ChevronRight size={16} className="ml-1 inline-block" />
        </>
      )}
    </a>
  );
};

export default CTALink;
