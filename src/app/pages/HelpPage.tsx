'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { getHelp } from '../commands';

const HelpPage: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const helpContent = useMemo(() => getHelp(language, translations), [language, translations]);

  return (
    <div className="text-foreground font-mono p-4 pt-16 p-2 bg-cline rounded-xl opacity-85">
      <h1 className="text-[36px] md:text-[58px] mb-4 text-main-100">Help</h1>
      <div className="flex flex-col space-y-2 text-[20px] md:text-[32px]">
        {helpContent.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
