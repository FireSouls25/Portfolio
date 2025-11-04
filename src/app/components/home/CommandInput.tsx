'use client';

import React from 'react';

interface CommandInputProps {
  command: string;
  handleCommand: (e: React.FormEvent<HTMLFormElement>) => void;
  setCommand: (command: string) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ command, handleCommand, setCommand }) => {
  return (
    <form onSubmit={handleCommand} className="mt-2 flex items-center text-[20px] md:text-[32px] p-2 rounded-xl bg-cline opacity-90">
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
    </form>
  );
};

export default CommandInput;
