import React, { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized title variations
const titleVariants = cva(
  'font-semibold tracking-tighter lg:-ml-1.5 lg:tracking-tighter !leading-[1.1]', // Base styles
  {
    variants: {
      size: {
        lg: 'text-3xl md:text-6xl lg:text-6xl',
        xl: 'text-4xl md:text-7xl lg:text-7xl',
        xxl: 'text-6xl md:text-8xl lg:text-8xl',
        xxxl: 'text-6xl md:text-8xl lg:text-9xl',
      },

    },
    defaultVariants: {
      size: 'xxl',
    },
  }
);

type DisplayTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

interface DisplayTitleProps extends VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
  tag?: DisplayTitleTag;
}

const DisplayTitle: FC<DisplayTitleProps> = ({
  children,
  size,
  className,
  tag = 'h1', // Default tag is h1
}) => {
  const Tag = tag;
  return (
    <Tag className={cn(titleVariants({ size }), className)}>{children}</Tag>
  );
};

export default DisplayTitle;
