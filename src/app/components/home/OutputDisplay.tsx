'use client';

import React from 'react';
import { MemoizedTextType } from '../MemoizedTextType';

interface OutputDisplayProps {
  output: string[];
  error: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, error }) => {
  return (
    <>
      {output.length > 0 && (
        <div className="text-[20px] md:text-[32px] mt-2 p-2 bg-cline rounded-xl opacity-90">
          {output.map((line, index) => (
            <div key={index}>
              <MemoizedTextType
                text={line}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={index * 100}
                textColors={['var(--submain-70)']}
              />
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="text-[20px] md:text-[32px] mt-2 p-1 rounded-xl bg-cline opacity-90">
          <MemoizedTextType
            text={error}
            typingSpeed={10}
            pauseDuration={2000}
            showCursor={false}
            textColors={['var(--error-color)']}
          />
        </div>
      )}
    </>
  );
};

export default OutputDisplay;
