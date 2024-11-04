import React from 'react';

import Label from './Label';

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageScreenshot = ({ src, alt, caption }: ScreenshotProps) => {
  return (
    <figure className="mx-auto bg-slate-200 p-6 lg:p-10">
      <img
        src={src}
        alt={alt}
        className="mb-3 h-auto w-full shadow-lg md:mb-6"
      />
      {caption && <Label variant="primary">{caption}</Label>}
    </figure>
  );
};

export default ImageScreenshot;
