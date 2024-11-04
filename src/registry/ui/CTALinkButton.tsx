import React, { LinkHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized button variations
const linkVariants = cva(`text-base`, {
  variants: {
    variant: {
      primary: 'border border-transparent bg-primary text-white hover:bg-primary-dark inline-flex h-fit items-center justify-center  px-5 py-[0.5625rem] text-lg font-semibold no-underline transition-colors ease-in-out transition-all duration-500',
      secondary: 'border border-primary bg-white text-primary hover:bg-primary-light inline-flex h-fit items-center justify-center  px-5 py-[0.5625rem] text-lg font-semibold no-underline transition-colors ease-in-out transition-all duration-500',
      danger: 'btn btn-primary bg-red-500',
      alert: 'btn btn-primary bg-yellow-500',
    },
    size: {
      sm: 'py-2 px-4',
      lg: 'text-base py-2 px-4 lg:text-xl lg:py-3 lg:px-6',
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
  },
});

export interface LinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  className?: string;
}

const CTALinkButton = ({
  size,
  variant,
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <a className={cn(linkVariants({ className, variant, size }))} {...props}>
      {children}
    </a>
  );
};

export default CTALinkButton;
