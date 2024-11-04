import React, { ReactNode } from 'react';

interface BoxProps {
  className?: string;
  children?: ReactNode;
}

const Box = ({ className = '', children }: BoxProps) => {
  return <div className={className}>{children}</div>;
};

export default Box;
