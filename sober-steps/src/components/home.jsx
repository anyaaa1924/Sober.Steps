import React from 'react';
import { FaRobot } from 'react-icons/fa'; // Import the chatbot icon
import './home.css';
import logo from './steps.jpg'; // Make sure to replace with the actual path to your logo

const HomePage = () => (
  <main className="home main-content">
    <div className="logo-container">
      <img src={logo} alt="Sober Steps Logo" className="logo" />
    </div>
    <div className="text-container">
      <h2>Welcome to Sober Steps</h2>
      <p>Your journey to sobriety starts here.</p>
    </div>

    {/* Chatbot section */}
    <div className="chatbot-section">
      <div className="chatbot-container">
        <FaRobot className="chatbot-icon" />
        <button className="say-hi-button">Say Hi</button>
      </div>
    </div>
  </main>
);

export default HomePage;
