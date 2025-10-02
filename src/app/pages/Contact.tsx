'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">Contact</h1>
      <div className="flex flex-col space-y-4 text-xl">
        <p className="flex items-center">
          <img src="/file.svg" alt="Email" className="w-6 h-6 mr-2" />
          Email: da.enmanuel@proton.me
        </p>
        <p className="flex items-center">
          <img src="/file.svg" alt="Github" className="w-6 h-6 mr-2" />
          Github: FireSouls25
        </p>
        <p className="flex items-center">
          <img src="/file.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
          LinkedIn: None
        </p>
        <p className="flex items-center">
          <img src="/file.svg" alt="Download CV" className="w-6 h-6 mr-2" />
          Download Curriculum
        </p>
      </div>
    </div>
  );
};

export default Contact;
