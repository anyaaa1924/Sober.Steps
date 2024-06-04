import React from 'react';
import { FaMedal, FaStar, FaCrown } from 'react-icons/fa';
import './rewards.css';

const RewardsPage = () => (
  <main className="rewards">
    <h2>Sobriety Rewards</h2>
    <div className="reward-sections">
      <div className="reward-section champion">
        <FaMedal className="reward-icon" />
        <h3>7 Days of Sobriety</h3>
        <p>Congratulations, you are a Champion!</p>
      </div>
      <div className="reward-section star">
        <FaStar className="reward-icon" />
        <h3>15 Days of Sobriety</h3>
        <p>Keep it up, you are a Star!</p>
      </div>
      <div className="reward-section supreme">
        <FaCrown className="reward-icon" />
        <h3>1 Month of Sobriety</h3>
        <p>Fantastic, you are Supreme!</p>
      </div>
    </div>
  </main>
);

export default RewardsPage;
