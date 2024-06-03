import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = ({ loggedIn, handleLogout }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Sober Steps</h1>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link></li>
          <li><Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>Community</Link></li>
          <li><Link to="/facilities" className={location.pathname === '/facilities' ? 'active' : ''}>Facilities</Link></li>
          {loggedIn ? (
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          ) : (
            <li><Link to="/login" className="header-login-button">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
