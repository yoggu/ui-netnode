import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Customized headline variations
const headlineVariants = cva(
  'lg:leading-none', // Base styles
  {
    variants: {
      level: {
        h1: 'text-5xl font-medium text-gray-900 lg:-ml-1 lg:tracking-tighter',
        h2: 'text-4xl font-medium text-gray-900',
        h3: 'text-3xl font-medium text-gray-900',
        h4: 'text-2xl font-medium text-gray-900',
        h5: 'text-xl font-medium text-gray-900',
        h6: 'text-lg font-medium text-gray-900',
      },
    },
    defaultVariants: {
      level: 'h1',
    },
  }
);

interface HeadlineProps extends VariantProps<typeof headlineVariants> {
  children: React.ReactNode;
  className?: string;
  tag: HeadingTag;
  showAs: HeadingTag;
}

const Headline: React.FC<HeadlineProps> = ({
  children,
  tag = 'h1', // Default HTML element
  showAs = 'h1', // Default visual style
  className,
}) => {
  const Tag = tag;
  return (
    <Tag className={cn(headlineVariants({ level: showAs }), className)}>
      {children}
    </Tag>
  );
};

export default Headline;
