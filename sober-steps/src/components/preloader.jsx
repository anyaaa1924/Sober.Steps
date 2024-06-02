import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Preloader;
