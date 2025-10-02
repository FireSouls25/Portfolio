'use client';

import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">
            I&aposm a dedicated developer with experience in web development, bringing creative and
            functional designs to life with a focus on responsive layouts and smooth user
            experiences.
          </p>
          <p className="text-xl mb-4">
            I also have experience working on backend with Spring Boot and Django. Over the
            years, I&aposve tuned my skills in problem-solving and collaboration, working on
            diverse projects.
          </p>
          <p className="text-xl mb-4">
            My attention to detail and passion for clean code ensure that every project I
            undertake is both efficient and visually appealing.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/file.svg" alt="Profile 1" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 2" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 3" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 4" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
