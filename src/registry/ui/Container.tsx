import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized container variations
const containerVariants = cva(
  'px-6', // Base class applied to all variants
  {
    variants: {
      width: {
        full: 'w-full',
        wide: 'mx-auto w-full max-w-[1440px] md:px-16',
        narrow: 'mx-auto max-w-6xl md:px-16',
        slim: 'mx-auto max-w-4xl md:px-16',
      },
      height: {
        slim: 'min-h-64',
        hero_sub: 'md:min-h-[250px]', // used in hero sub-section
        regular: 'md:min-h-[350px]',
        auto: 'h-auto',
      },
    },
    defaultVariants: {
      width: 'wide',
      height: 'auto',
    },
  }
);

interface ContainerProps extends VariantProps<typeof containerVariants> {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ width, height, className, children }: ContainerProps) => {
  return (
    <div className={cn(containerVariants({ width, height }), className)}>
      {children}
    </div>
  );
};

export default Container;
