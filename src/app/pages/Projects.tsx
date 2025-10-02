'use client';

import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">3D Graphic Calculator</h2>
          <p className="text-lg mb-4">
            A web-based 3D graphic calculator that visualizes functions in three dimensions.
            It also features built-in tools to compute derivatives and integrals.
          </p>
          <img src="/file.svg" alt="3D Graphic Calculator" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">News Dashboard Interface</h2>
          <p className="text-lg mb-4">
            A dynamic news dashboard using Tailwind CSS, showcasing article cards, category
            filters, and user profiles with interactive elements, optimized for a
            clean and engaging layout.
          </p>
          <img src="/file.svg" alt="News Dashboard Interface" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">Tailwind Settings Interface</h2>
          <p className="text-lg mb-4">
            A sleek settings panel built with Tailwind CSS, featuring customizable themes,
            accent color options, and accessibility toggles, designed for a user-friendly
            experience.
          </p>
          <img src="/file.svg" alt="Tailwind Settings Interface" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
