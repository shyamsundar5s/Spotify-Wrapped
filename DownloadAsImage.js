import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

function DownloadAsImage({ wrappedRef }) {
  const handleDownload = () => {
    if (!wrappedRef.current) return;

    html2canvas(wrappedRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'spotify-wrapped.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return <button onClick={handleDownload}>Download as Image</button>;
}

export default DownloadAsImage;
