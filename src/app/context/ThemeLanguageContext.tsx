
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

import translations from '../translations.json';

type Theme = 'light' | 'dark';
type Language = 'en' | 'es';

interface ThemeLanguageContextType {
  theme: Theme;
  language: Language;
  translations: any;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('dark'); // Default to dark theme
  const [language, setLanguageState] = useState<Language>('en'); // Default to English

  useEffect(() => {
    // Load theme and language from localStorage on mount
    const storedTheme = localStorage.getItem('theme') as Theme;
    const storedLanguage = localStorage.getItem('language') as Language;

    if (storedTheme) {
      setThemeState(storedTheme);
    }
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'es') {
        setLanguageState('es');
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme class to the html element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, language, translations, setTheme, setLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
};
