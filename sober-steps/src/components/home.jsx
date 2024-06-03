import React from 'react';
import { FaRobot } from 'react-icons/fa'; // Import the chatbot icon
import './home.css'; // Update this CSS file to match new styles
import logo from './foo.jfif'; // Make sure to replace with the actual path to your logo

const HomePage = () => (
  <main className="home main-content">
    <div className="logo-container">
      <img src={logo} alt="Sober Steps Logo" className="logo" />
    </div>
    <div className="text-container">
      <h2 className="welcome-text">Welcome to Sober Steps</h2>
      <p>Your journey to sobriety starts here.</p>
    </div>

    {/* Chatbot section */}
    <div className="chatbot-section">
      <div className="chatbot-container">
        <FaRobot className="chatbot-icon" />
        <a href="https://console.dialogflow.com/api-client/demo/embedded/565b645f-97ed-4250-9ec7-58b43b54cf1e" target="_blank" rel="noopener noreferrer" className="say-hi-button">
  Want help?
</a>

      </div>
    </div>
  </main>
);

export default HomePage;