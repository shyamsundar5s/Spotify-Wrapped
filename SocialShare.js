import React from 'react';

function SocialShare({ url }) {
  const shareText = encodeURIComponent('Check out my Spotify Wrapped!');
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="social-share">
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </a>
    </div>
  );
}

export default SocialShare;
