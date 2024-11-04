import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Define the variants for columns and gap using CVA
const gridVariants = cva('grid', {
  variants: {
    columns: {
      2: 'grid-cols-1 lg:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
      4: 'grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-6',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      16: 'gap-16',
      32: 'gap-32',
    },
  },
  defaultVariants: {
    columns: 4, // Default to 4 columns
    gap: 6, // Default to 16px gap
  },
});

// Extend the interface to include variant props
interface GridFixedColumnProps extends VariantProps<typeof gridVariants> {
  className?: string;
  children?: ReactNode;
}

const GridFixedColumn = ({
  columns,
  gap,
  className,
  children,
}: GridFixedColumnProps) => {
  return (
    <div className={cn(gridVariants({ columns, gap }), className)}>
      {children}
    </div>
  );
};

export default GridFixedColumn;
