import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Customized button variations using CVA
const buttonVariants = cva('inline-flex h-fit items-center justify-center  px-5 py-[0.5625rem] text-lg font-semibold no-underline transition-colors ease-in-out transition-all duration-500', {
  variants: {
    variant: {
      primary: 'border border-transparent bg-primary text-white hover:bg-primary-dark',
      secondary: 'border border-primary bg-white text-primary hover:bg-primary-light',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({
  text,
  variant,
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
