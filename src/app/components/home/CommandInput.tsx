'use client';

import React from 'react';
import HelpButton from './HelpButton';

interface CommandInputProps {
  command: string;
  handleCommand: (command: string) => void;
  setCommand: (command: string) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ command, handleCommand, setCommand }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCommand(command);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex items-center text-[20px] md:text-[32px] p-2 rounded-xl bg-cline opacity-90">
      <ul>
        <li>{'>_'}</li>
      </ul>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="bg-transparent border-none outline-none w-full ml-2"
        autoFocus
      />
      <HelpButton handleCommand={handleCommand} />
    </form>
  );
};

export default CommandInput;
