import React, { useState, useEffect } from 'react';
import './Terminal.css';

interface Command {
  topic: string;
  description: string;
}

const Terminal: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isUnrecognizedCommand, setIsUnrecognizedCommand] =
    useState<boolean>(false);

  useEffect(() => {
    if (!isUnrecognizedCommand) {
      return;
    }
    setTimeout(() => setIsUnrecognizedCommand(false), 500);
  }, [isUnrecognizedCommand]);

  const commands: Command[] = [
    {
      topic: 'web',
      description:
        'Web Development - Modern web applications, websites, and portfolios',
    },
    {
      topic: 'slack',
      description:
        'Slack Platform Apps - Automate team processes and communication',
    },
    {
      topic: 'apple',
      description:
        'iOS & macOS Development - applications for the Apple platform',
    },
    {
      topic: 'ai',
      description: 'Artificial Intelligence - The sky is the limit',
    },
    { topic: 'prototype', description: 'Prototyping - Bringing ideas to life' },
    {
      topic: 'consult',
      description: 'Consultation - Technical brainstorming and collaboration',
    },
    {
      topic: 'contact',
      description: 'Say Hello - Drop me a line at derek@circassimilate.com',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setUserInput(value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey && e.key === 'c') || (e.metaKey && e.key === 'k')) {
      clearTerminal();
      return;
    }
    if (e.key !== 'Enter') {
      return;
    }
    if (userInput === 'clear') {
      setUserInput('');
      clearTerminal();
      return;
    }
    const commandDescription = commands.find(
      command => command.topic === userInput
    )?.description;
    if (commandDescription) {
      setTerminalOutput([...terminalOutput, commandDescription]);
      setUserInput('');
    } else {
      setIsUnrecognizedCommand(true);
    }
  };

  const clearTerminal = (): void => {
    setTerminalOutput([]);
  };

  return (
    <div className="terminal">
      <div className="terminal-title">
        <h2>CIRCASSIMILATE TERMINAL</h2>
      </div>
      <div className="terminal-subtitle">
        <p>
          Type one of the following commands to learn more about the things I
          love to do:&nbsp;
          <span
            className={
              'hint' + (isUnrecognizedCommand ? ' unrecognized-command' : '')
            }
          >
            {commands.map(command => command.topic).join(', ')}
          </span>
        </p>
      </div>

      <div className="terminal-input">
        {terminalOutput.length > 0 && (
          <div className="command-descriptions">
            {terminalOutput.map((service, index) => (
              <div key={index} className="prompt">
                {'> '}
                {service}
              </div>
            ))}
          </div>
        )}
        <div className="input-line">
          <span className="prompt">{'>'}</span>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className="terminal-input"
            placeholder="Enter command..."
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
