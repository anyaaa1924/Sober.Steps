import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    // Basic front-end validation
    if (!credentials.username || !credentials.password) {
      setErrors(['Username and password are required']);
      return;
    }

    // Email validation
    if (!credentials.username.includes('@')) {
      setErrors(['Please enter a valid email address']);
      return;
    }

    // Simulate successful login
    alert('Login successful!'); // Replace this with a more sophisticated notification if desired
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1 className="heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">
            <FaUser className="icon" />
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="input"
            required
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />

          <label className="label">
            <FaLock className="icon" />
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            required
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />

          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          {errors.length > 0 && (
            <div className="error-notification">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="forgot-password">
            <Link to="/forgot-password" className="link">
              Forgot Password?
            </Link>
          </div>

          <p className="signup-text">
            Don't have an account?{' '}
            <Link to="/signup" className="link">
              Sign Up!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
