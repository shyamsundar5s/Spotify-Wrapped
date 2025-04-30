import React, { useRef } from 'react';
import DownloadAsImage from './DownloadAsImage';

function WrappedContainer() {
  const wrappedRef = useRef();

  return (
    <div>
      <div ref={wrappedRef} className="wrapped-container">
        {/* Wrapped content here */}
      </div>
      <DownloadAsImage wrappedRef={wrappedRef} />
    </div>
  );
}

export default WrappedContainer;
