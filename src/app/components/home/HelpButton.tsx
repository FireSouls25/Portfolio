'use client';

import React, { useState } from 'react';
import { useThemeLanguage } from '../../context/ThemeLanguageContext';

interface HelpButtonProps {
  handleCommand: (command: string) => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ handleCommand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, language, setLanguage } = useThemeLanguage();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const pages = ['home', 'aboutme', 'projects', 'testimonies', 'education', 'contact'];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="text-main-85 hover:text-main">
        [Help]
      </button>
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-48 bg-cline rounded-xl p-2 opacity-90">
          <div className="flex justify-between items-center mb-2">
            <span>Theme</span>
            <button onClick={toggleTheme} className="text-main-85 hover:text-main">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          <div className="relative group">
            <span className="cursor-pointer">Language</span>
            <div className="absolute bottom-full left-0 mb-2 w-full bg-cline rounded-xl p-2 opacity-90 group-hover:block hidden">
              <button onClick={() => setLanguage('en')} className="block w-full text-left text-main-85 hover:text-main">
                English
              </button>
              <button onClick={() => setLanguage('es')} className="block w-full text-left text-main-85 hover:text-main">
                Spanish
              </button>
            </div>
          </div>
          <div className="mt-2">
            {pages.map(page => (
              <button
                key={page}
                onClick={() => {
                  handleCommand(page);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-main-85 hover:text-main"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
