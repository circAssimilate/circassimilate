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
              <p className="tagline">/SIRK-uh-SIM-uh-let/</p>
              <p className="subtitle">Development Consulting</p>

              <Socials />
            </div>

            <div className="about-section">
              <h2>ABOUT</h2>
              <p>
                I get excited about transforming ideas into prototypes and creating <a href="https://longform.asmartbear.com/slc/" target='_blank' rel="noreferrer">Simple, Lovable, and Complete</a> applications that solve a need and gather rapid feedback.
              </p>
              <div className="expertise">
                <h3>EXPERTISE</h3>
                <ul>
                  <li>💬 Custom Slack Platform apps</li>
                  <li>🍎 iOS & macOS native applications</li>
                  <li>🌐 Modern web applications</li>
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
}

export default App;
