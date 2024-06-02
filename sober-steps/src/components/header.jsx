import React from 'react';
import './header.css';

const Header = ({ loggedIn, handleLogout }) => (
  <header className="header">
    <h1>Sober Steps</h1>
    <nav>
      <ul>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/about" className="active">About Us</a></li>
        <li><a href="/resources" className="active">Resources</a></li>
        <li><a href="/community" className="active">Community</a></li>
        <li><a href="/facilities" className="active">Facilities</a></li>
        {loggedIn ? (
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        ) : (
          <li><button className="login-button">Login</button></li>
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
