import React from 'react';
import Slide from './Slide';

function Wrapped({ stats }) {
  return (
    <div className="wrapped-container">
      {stats.map((stat, index) => (
        <Slide key={index} stat={stat} />
      ))}
    </div>
  );
}

export default Wrapped;
