import React from 'react';
import './App.css';
import RetroWindow from './components/RetroWindow';
import Terminal from './components/Terminal';
import Socials from './components/Socials';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="desktop-background">
        <RetroWindow title="CircAssimilate Development Console v1.0">
          <div className="app-content">
            <div className="company-header">
              <h1>CIRCASSIMILATE</h1>
              <p className="tagline">/SIRK-uh-SIM-uh-LĀT/</p>
              <p className="subtitle">
                Derek Hammond - Builder of Software & Teams
              </p>

              <Socials />
            </div>

            <div className="about-section">
              <h2>ABOUT</h2>
              <p>
                Hi. My name is <em>Derek Hammond</em> and I get excited about
                creating{' '}
                <a
                  href="https://longform.asmartbear.com/slc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  simple, lovable, and complete
                </a>{' '}
                applications — apps that grow into powerful products through
                rapid learning and thoughtful iteration.
              </p>
              <div className="expertise">
                <h3>THINGS I LOVE</h3>
                <ul>
                  <li>🌐 Modern web applications</li>
                  <li>
                    💬 Custom Slack Platform apps (
                    <a
                      href="https://docs.slack.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      docs
                    </a>
                    )
                  </li>
                  <li>🍎 iOS & macOS native applications</li>
                  <li>🕸️ Websites and portfolios</li>
                  <li>🤖 AI-powered solutions</li>
                  <li>⚡ Prototyping</li>
                  <li>🔧 Technical consultation</li>
                </ul>
              </div>
            </div>

            <Terminal />
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};

export default App;
