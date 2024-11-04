import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized label variations using CVA
const labelVariants = cva(`font-medium`, {
  variants: {
    variant: {
      primary: 'text-sm md:text-base text-gray-700',
      secondary: 'text-xs md:text-sm text-gray-700',
      tertiary: 'text-xs text-gray-600 uppercase',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface LabelProps extends VariantProps<typeof labelVariants> {
  children?: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, variant, className }) => {
  return (
    <span className={cn(labelVariants({ variant }), className)}>
      {children}
    </span>
  );
};

export default Label;
