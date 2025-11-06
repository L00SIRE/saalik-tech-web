import React from 'react';

const SaalikGroup = () => {
  return (
    <div className="saalik-group-container">
      <div className="saalik-group-row">
        <div className="saalik-group-title">
          <span className="green">SAALIK</span> <span className="white">GROUP:</span>
        </div>
        <div className="logo-item">
          <img src="/saaliklogo.png" alt="Saalik Logo" />
        </div>
        <div className="logo-item">
          <img src="/designslogo.png" alt="Saalik Designs Logo" />
        </div>
      </div>
    </div>
  );
};

export default SaalikGroup;

