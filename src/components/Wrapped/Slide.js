import React from 'react';

function Slide({ stat }) {
  return (
    <div className="slide">
      <h2>{stat.title}</h2>
      <p>{stat.description}</p>
    </div>
  );
}

export default Slide;
