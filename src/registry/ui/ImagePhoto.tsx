import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Label from './Label';

// Define the image variants using cva
const imageVariants = cva(
  'mix-blend-normal hover:mix-blend-normal hover:brightness-125',
  {
    variants: {
      fit: {
        cover: 'h-full w-full object-cover',
        contain: 'h-full w-full object-contain',
        none: 'h-auto w-auto object-none',
      },
    },
    defaultVariants: {
      fit: 'cover',
    },
  }
);

interface ImageProps extends VariantProps<typeof imageVariants> {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ImagePhoto = ({
  src,
  alt = 'Image',
  caption,
  className,
  fit,
  width = '100%',
  height = '100%',
}: ImageProps) => {
  return (
    <>
      <div
        className={cn('relative overflow-hidden', className)}
        style={{ width, height }}
      >
        <img src={src} alt={alt} className={cn(imageVariants({ fit }))} />
      </div>
      {caption && <Label variant="secondary">{caption}</Label>}
    </>
  );
};

export default ImagePhoto;
