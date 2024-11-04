import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Label from './Label';

const SVGVariants = cva(
  '', // Base styles can be empty if not needed
  {
    variants: {
      size: {
        sm: 'w-8 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
        xxl: 'w-36 h-36',
        auto: 'w-auto h-auto',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface ImageSVGProps extends VariantProps<typeof SVGVariants> {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageSVG = ({ src, alt, caption, size, className }: ImageSVGProps) => {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        className={cn(
          SVGVariants({ size }),
          'relative mb-3 overflow-hidden md:mb-6'
        )}
      />
      {caption && <Label variant="primary">{caption}</Label>}
    </figure>
  );
};

export default ImageSVG;
