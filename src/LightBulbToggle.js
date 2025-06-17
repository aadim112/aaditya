import React, { useState, useEffect } from 'react';

const LightBulbToggle = ({ isDarkMode, setIsDarkMode }) => {
  const [ropeStretch, setRopeStretch] = useState(0);
  const [isRopeDragging, setIsRopeDragging] = useState(false);

  // Handle rope dragging
  const handleRopeStart = (e) => {
    setIsRopeDragging(true);
    e.preventDefault();
  };

  const handleRopeMove = (e) => {
    if (!isRopeDragging) return;
    
    const rect = document.querySelector('.rope-container').getBoundingClientRect();
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const stretch = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setRopeStretch(stretch);
    
    // Toggle dark mode when rope is stretched more than 60%
    if (stretch > 60 && !isDarkMode) {
      setIsDarkMode(true);
    } else if (stretch < 30 && isDarkMode) {
      setIsDarkMode(false);
    }
  };

  const handleRopeEnd = () => {
    setIsRopeDragging(false);
    // Animate rope back to original position
    setRopeStretch(0);
  };

  useEffect(() => {
    if (isRopeDragging) {
      document.addEventListener('mousemove', handleRopeMove);
      document.addEventListener('mouseup', handleRopeEnd);
      document.addEventListener('touchmove', handleRopeMove);
      document.addEventListener('touchend', handleRopeEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleRopeMove);
      document.removeEventListener('mouseup', handleRopeEnd);
      document.removeEventListener('touchmove', handleRopeMove);
      document.removeEventListener('touchend', handleRopeEnd);
    };
  }, [isRopeDragging, isDarkMode]);

  return (
    <>
      <div className="rope-container">
        <div className="rope-mount"></div>
        <div
          className="rope"
          style={{
            height: `${100 + ropeStretch}px`,
            transform: `scaleY(${1 + ropeStretch / 100})`,
          }}
          onMouseDown={handleRopeStart}
          onTouchStart={handleRopeStart}
        >
          <div className="rope-segments">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rope-segment"></div>
            ))}
          </div>
        </div>
        <div
          className="light-bulb"
          style={{
            transform: `translateY(${ropeStretch * 2}px)`,
            opacity: isDarkMode ? 0.3 : 1,
          }}
        >
          💡
        </div>
      </div>
    </>
  );
};

export default LightBulbToggle;