'use client';

import React, { Suspense, lazy } from 'react';
import Loader from '../Loader';

const AboutMe = lazy(() => import('../../pages/AboutMe'));
const Projects = lazy(() => import('../../pages/Projects'));
const Testimonies = lazy(() => import('../../pages/Testimonies'));
const Education = lazy(() => import('../../pages/Education'));
const Contact = lazy(() => import('../../pages/Contact'));

interface PageContentProps {
  currentPage: string;
  homeContent: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ currentPage, homeContent }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return homeContent;
      case 'aboutme':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'testimonies':
        return <Testimonies />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex-grow overflow-y-auto">
        {renderPage()}
      </div>
    </Suspense>
  );
};

export default PageContent;
