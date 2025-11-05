'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import translations from '../translations.json';

interface Translations {
  home: Record<string, any>;
  helpButton: Record<string, any>;
  commands: Record<string, any>;
  [key: string]: any; 
}

interface ThemeLanguageContextType {
  theme: 'light' | 'dark';
  language: 'en' | 'es';
  translations: Translations;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (lang: 'en' | 'es') => void;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');
  const [language, setLanguageState] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const storedLanguage = localStorage.getItem('language') as 'en' | 'es';

    if (storedTheme) setThemeState(storedTheme);
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') setLanguageState('es');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setTheme = (newTheme: 'light' | 'dark') => setThemeState(newTheme);
  const setLanguage = (newLang: 'en' | 'es') => setLanguageState(newLang);

  return (
    <ThemeLanguageContext.Provider value={{ theme, language, translations, setTheme, setLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = (): ThemeLanguageContextType => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  return context;
};