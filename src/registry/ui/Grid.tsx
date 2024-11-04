import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface GridProps {
  container?: boolean;
  gap?: number | { [key: string]: number };
  className?: string;
  children: ReactNode;
}

const Grid = ({
  container = true,
  gap = 16,
  className,
  children,
}: GridProps) => {
  const gapClass = getGapClasses(gap);
  const baseClass = container ? 'grid grid-cols-12' : '';
  /*
  const classes = 'grid grid-cols-12 col-span-12 col-span-4 col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12';
  const classes_md = 'md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12';
  const classes_lg = 'lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12';
  const classes_xl = 'xl:col-span-1 xl:col-span-2 xl:col-span-3 xl:col-span-4 xl:col-span-5 xl:col-span-6 xl:col-span-7 xl:col-span-8 xl:col-span-9 xl:col-span-10 xl:col-span-11 xl:col-span-12';
  const offset = 'col-start-1 col-start-2 col-start-3 col-start-4 col-start-5 col-start-6 col-start-7 col-start-8 col-start-9 col-start-10 col-start-11 col-start-12';
  const offset_md = 'md:col-start-1 md:col-start-2 md:col-start-3 md:col-start-4 md:col-start-5 md:col-start-6 md:col-start-7 md:col-start-8 md:col-start-9 md:col-start-10 md:col-start-11 md:col-start-12';
  const offset_lg = 'lg:col-start-1 lg:col-start-2 lg:col-start-3 lg:col-start-4 lg:col-start-5 lg:col-start-6 lg:col-start-7 lg:col-start-8 lg:col-start-9 lg:col-start-10 lg:col-start-11 lg:col-start-12';
  const offset_xl = 'xl:col-start-1 xl:col-start-2 xl:col-start-3 xl:col-start-4 xl:col-start-5 xl:col-start-6 xl:col-start-7 xl:col-start-8 xl:col-start-9 xl:col-start-10 xl:col-start-11 xl:col-start-12';
*/
  return <div className={cn(baseClass, gapClass, className)}>{children}</div>;
};

export default Grid;

function getGapClasses(gap: number | { [key: string]: number }): string {
  if (typeof gap === 'number') {
    return `gap-${gap}`;
  } else if (typeof gap === 'object') {
    return Object.entries(gap)
      .map(([breakpoint, value]) => {
        if (breakpoint === 'base') {
          return `gap-${value}`;
        } else {
          return `${breakpoint}:gap-${value}`;
        }
      })
      .join(' ');
  }
  return '';
}
