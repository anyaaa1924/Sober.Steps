import React, { useState } from 'react';
import './community.css';

const CommunityPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <main className="community main-content">
      <h2 className="slide-in">Community</h2>
      <p>Join our community and connect with others on the path to sobriety. Talk, discuss, motivate, and enjoy the journey of sobriety as a team!</p>
      <div className="options">
        <button className="option">Groups</button>
        <button className="option">Chats</button>
        <button className="option">Updates</button>
        <button className="option" onClick={handleClearMessages}>Clear Chats</button>
      </div>
      <div className="chat-container">
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </main>
  );
};

export default CommunityPage;
