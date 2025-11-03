'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

interface ImagePreloaderProps {
  imageUrls: string[];
  children: React.ReactNode;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ imageUrls, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      setLoading(false);
      return;
    }

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoading(false);
        }
      };
    });
  }, [imageUrls]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ImagePreloader;
