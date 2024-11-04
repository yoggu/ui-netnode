import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Define the variants using cva
const bodyCopyVariants = cva('prose text-slate-600 max-w-prose', {
  variants: {
    size: {
      base: 'prose-base',
      lg: 'prose-lg',
      sm: 'prose-sm',
      lead: 'prose-xl',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

interface BodyCopyProps extends VariantProps<typeof bodyCopyVariants> {
  text?: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const BodyCopy = ({
  text,
  size,
  color,
  className,
  children,
}: BodyCopyProps) => {
  return (
    <div
      className={cn(bodyCopyVariants({ size }), className)}
      style={{ color }}
    >
      {text && <>{text}</>}
      {/* Check if children is a string, and only pass it to FormattedText if it is */}

      {children}
    </div>
  );
};

export default BodyCopy;
