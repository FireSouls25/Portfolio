'use client';

import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xl mb-4">
            I am currently pursuing a degree in Software Engineering at Universidad
            Cooperativa de Colombia, located in Pasto, Nariño, Colombia. This program
            has equipped me with a solid foundation in programming, software design, and
            problem-solving, while also offering opportunities to work on real-world
            projects that enhance my technical and collaborative skills.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-2 text-main-85">Universidad Cooperativa de Colombia</h2>
          <img src="/globe.svg" alt="Universidad Cooperativa de Colombia" className="w-48 h-48 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Education;
