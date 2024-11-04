import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface GridItemProps {
  size: { [key: string]: number };
  offset?: { [key: string]: number };
  className?: string;
  children?: ReactNode;
}

const GridItem = ({ size, offset, className, children }: GridItemProps) => {
  const colSpanClass = getColSpanClasses(size);
  const offsetClass = getOffsetClasses(offset);

  return (
    <div className={cn(colSpanClass, offsetClass, className)}>{children}</div>
  );
};

export default GridItem;

function getColSpanClasses(size: { [key: string]: number }): string {
  return Object.entries(size)
    .map(([breakpoint, value]) => {
      if (breakpoint === 'base') {
        return `col-span-${value}`;
      } else {
        return `${breakpoint}:col-span-${value}`;
      }
    })
    .join(' ');
}

function getOffsetClasses(offset?: { [key: string]: number }): string {
  if (!offset) return '';
  return Object.entries(offset)
    .map(([breakpoint, value]) => {
      const startValue = value + 1; // Adjusting because grid columns start at 1
      if (breakpoint === 'base') {
        return `col-start-${startValue}`;
      } else {
        return `${breakpoint}:col-start-${startValue}`;
      }
    })
    .join(' ');
}
