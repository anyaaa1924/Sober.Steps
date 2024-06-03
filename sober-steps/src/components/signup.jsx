import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    // Basic front-end validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrors(['All fields are required']);
      return;
    }

    if (!formData.email.includes('@')) {
      setErrors(['Please enter a valid email address']);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(["Passwords don't match"]);
      return;
    }

    // Simulate successful signup
    alert('Sign-up successful!'); // Replace this with a more sophisticated notification if desired
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h1 className="heading">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">
            <FaUser className="icon" />
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input"
            required
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <label className="label">
            <FaEnvelope className="icon" />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <label className="label">
            <FaLock className="icon" />
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input"
            required
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />

          {errors.length > 0 && (
            <div className="error-notification">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
