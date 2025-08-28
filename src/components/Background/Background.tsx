import React from 'react';
import './Background.css';

const Background: React.FC = () => {
  return (
    <div className="animated-bg">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
    </div>
  );
};

export default Background;