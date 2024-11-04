import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Define the variants using cva for List component
const listVariants = cva('', {
  variants: {
    size: {
      base: 'space-y-2', // Default spacing between items
      lg: 'space-y-4',
      sm: 'space-y-1',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

interface ListProps extends VariantProps<typeof listVariants> {
  children: ReactNode;
  color?: string;
  className?: string;
}

const List = ({ size, color, className, children }: ListProps) => {
  return (
    <ul className={cn(listVariants({ size }), className)} style={{ color }}>
      {children}
    </ul>
  );
};

export default List;
