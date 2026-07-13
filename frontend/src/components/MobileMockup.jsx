import React from 'react';
import './MobileMockup.css';

const MobileMockup = ({ children, className = '' }) => {
  return (
    <div className={`iphone-mockup ${className}`}>
      <div className="iphone-notch">
        <div className="iphone-speaker"></div>
        <div className="iphone-camera"></div>
      </div>
      <div className="iphone-screen">
        {children}
      </div>
    </div>
  );
};

export default MobileMockup;
