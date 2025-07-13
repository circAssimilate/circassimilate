import React from 'react';
import './Socials.css';

const Socials: React.FC = () => {
  return (
    <div className="socials">
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/derekehammond/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/circassimilate"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 GitHub
        </a>
        <a
          href="https://x.com/_DerekHammond"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐦 Twitter
        </a>
      </div>
    </div>
  );
};

export default Socials;
