import React from 'react';
import './RetroWindow.css';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
}

const RetroWindow: React.FC<RetroWindowProps> = ({ title, children }) => {
  return (
    <div className="retro-window">
      <div className="window-header">
        <div className="window-controls">
          <div className="window-button close"></div>
          <div className="window-button minimize"></div>
          <div className="window-button maximize"></div>
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default RetroWindow;
