import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Define the variants using cva for ListItem component
const listItemVariants = cva('', {
  variants: {
    size: {
      base: 'text-base',
      lg: 'text-lg',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

interface ListItemProps extends VariantProps<typeof listItemVariants> {
  children: ReactNode;
  color?: string;
  className?: string;
}

const ListItem = ({ size, color, className, children }: ListItemProps) => {
  return (
    <li
      className={cn(
        listItemVariants({ size }),
        'relative pl-6 before:absolute before:left-0 before:text-current before:content-["–"]',
        className
      )}
      style={{ color }}
    >
      {children}
    </li>
  );
};

export default ListItem;
