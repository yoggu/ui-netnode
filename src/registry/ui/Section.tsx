import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized section variants
const sectionVariants = cva('', {
  variants: {
    marginTop: {
      none: 'pt-0',
      small: 'pt-2',
      medium: 'pt-4',
      large: 'pt-16',
      xlarge: 'pt-32',
    },
    marginBottom: {
      none: 'pb-0',
      small: 'pb-2',
      medium: 'pb-4',
      large: 'pb-16',
      xlarge: 'pb-32',
    },
  },
  defaultVariants: {
    marginTop: 'none',
    marginBottom: 'none',
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  name: string;
  backgroundColor?: string; // Tailwind background color classes
  image_src?: string; // Optional background image source
  className?: string; // For additional generic classes
  children?: React.ReactNode;
}

const Section = ({
  name = '',
  backgroundColor = '',
  image_src,
  marginTop,
  marginBottom,
  className,
  children,
}: SectionProps) => {
  const style = image_src
    ? {
        backgroundImage: `url(${image_src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  return (
    <section
      id={name}
      className={cn(
        backgroundColor,
        sectionVariants({ marginTop, marginBottom }),
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
