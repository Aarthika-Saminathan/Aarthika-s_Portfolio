
import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background-container">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="ball" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}
    </div>
  );
};

export default Background;
