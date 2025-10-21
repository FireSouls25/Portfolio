'use client';

import { ReactNode } from 'react';
import { ThemeLanguageProvider } from '../context/ThemeLanguageContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeLanguageProvider>
      {children}
    </ThemeLanguageProvider>
  );
}
