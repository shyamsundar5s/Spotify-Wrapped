import React from 'react';

function ShareableLink({ link }) {
  return (
    <div className="shareable-link">
      <p>Share your wrapped experience:</p>
      <input type="text" value={link} readOnly />
      <button onClick={() => navigator.clipboard.writeText(link)}>Copy Link</button>
    </div>
  );
}

export default ShareableLink;
