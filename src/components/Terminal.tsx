import React, { useState, useEffect } from 'react';
import './Terminal.css';

interface Command {
  topic: string;
  description: string;
}

const Terminal: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isUnrecognizedCommand, setIsUnrecognizedCommand] = useState<boolean>(false);

  useEffect(() => {
    if (!isUnrecognizedCommand) { return };
    setTimeout(() => setIsUnrecognizedCommand(false), 500)
  }, [isUnrecognizedCommand])

  // TODO: (circassimilate) Update these descriptions
  const commands: Command[] = [
    { topic: 'prototype', description: 'Prototyping - From idea to working demo' },
    { topic: 'slack', description: 'Slack Platform Apps - Custom workflow automation' },
    { topic: 'web', description: 'Web Development - Modern web applications, websites, and blogs' },
    { topic: 'mac', description: 'macOS Development - Desktop applications for Mac' },
    { topic: 'ios', description: 'iOS Development - Native iPhone and iPad apps' },
    { topic: 'ai', description: 'AI-Powered Apps - The sky is the limit' },
    { topic: 'contact', description: 'Say Hello - Drop me a line at derek@circassimilate.com' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setUserInput(value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey && e.key === "c") || (e.metaKey && e.key === "k")) {
      clearTerminal();
      return;
    }
    if (e.key !== "Enter") {
      return;
    }
    if (userInput === "clear") {
      setUserInput('');
      clearTerminal();
      return;
    }
    const commandDescription = commands.find(command => command.topic === userInput)?.description
    if (commandDescription) {
      setTerminalOutput([...terminalOutput, commandDescription]);
      setUserInput('');
    } else {
      setIsUnrecognizedCommand(true)
    }
  };

  const clearTerminal = (): void => {
    setTerminalOutput([]);
  };

  return (
    <div className="terminal">
      <div className="terminal-title">
        <h2>CIRCASSIMILATE TERMINAL</h2>
      <div className="terminal-subtitle"></div>
        <p>Type one of the following commands to learn more about how I can help:</p>
        <p className={"hint" + (isUnrecognizedCommand ? " unrecognized-command" : "")}>
          {'> '}{commands.map((command) => command.topic).join(", ")}
        </p>
      </div>
      
      <div className="terminal-input">
        {terminalOutput.length > 0 && (
        <div className="command-descriptions">
          {terminalOutput.map((service, index) => (
            <div key={index} className="prompt">
              {'> '}{service}
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
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;