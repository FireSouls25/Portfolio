'use client';

import React from 'react';
import Head from 'next/head';

interface ImagePreloaderProps {
  images: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  return (
    <Head>
      {images.map((image, i) => (
        <link key={i} rel="preload" as="image" href={image} />
      ))}
    </Head>
  );
};

export default ImagePreloader;
