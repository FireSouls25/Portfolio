'use client';

import React, { useMemo } from 'react';
import { MemoizedTextType } from '../MemoizedTextType';

interface HomeContentProps {
  welcomeText: string[];
  nameText: string[];
  helpText: string[];
  navigateText: string[];
  pages: string[];
}

const PageLink: React.FC<{ page: string }> = React.memo(({ page }) => {
  const pageText = useMemo(() => [page], [page]);
  return (
    <li className="mb-2">
      <a href="#" className="hover:underline">
        <MemoizedTextType
          text={pageText}
          typingSpeed={20}
          pauseDuration={2000}
          showCursor={false}
          initialDelay={2200}
          textColors={['var(--submain-70)']}
        />
      </a>
    </li>
  );
});
PageLink.displayName = 'PageLink';

const HomeContent: React.FC<HomeContentProps> = ({ welcomeText, nameText, helpText, navigateText, pages }) => {
  return (
    <div className='p-2 bg-cline rounded-xl opacity-85'>
      <h1 className="text-[48px] md:text-[96px] items-center mb-4">
        <MemoizedTextType
          text={welcomeText}
          typingSpeed={20}
          pauseDuration={2000}
          showCursor={false}
          textColors={['var(--main)']}
        />
      </h1>
      <h2 className="text-[20px] md:text-[32px] mb-6">
        <MemoizedTextType
          text={nameText}
          typingSpeed={10}
          pauseDuration={2000}
          showCursor={false}
          initialDelay={700}
          textColors={['var(--submain)']}
        />
      </h2>
      <h3 className="text-[20px] md:text-[32px] mb-4">
        <MemoizedTextType
          text={helpText}
          typingSpeed={10}
          pauseDuration={2000}
          showCursor={false}
          initialDelay={1400}
          textColors={['var(--main)']}
        />
      </h3>
      <h3 className="text-[20px] md:text-[32px] mb-4">
        <MemoizedTextType
          text={navigateText}
          typingSpeed={10}
          pauseDuration={2000}
          showCursor={false}
          initialDelay={1400}
          textColors={['var(--main)']}
        />
      </h3>
      <ul className="list-none text-[20px] md:text-[32px] mb-6">
        {pages.map((page: string) => (
          <PageLink key={page} page={page} />
        ))}
      </ul>
    </div>
  );
};

export default HomeContent;
