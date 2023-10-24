
import React, { useState } from 'react';

const ScrollBar = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const increaseScroll = () => {
    setScrollValue(prev => Math.min(prev + 10, 100));
  };

  const decreaseScroll = () => {
    setScrollValue(prev => Math.max(prev - 10, 0));
  };

  const handleInputChange = event => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setScrollValue(value);
    }
  };

  return (
    <div>
      <div className="scroll-bar">
        <div className="scroll-filled" style={{ width: `${scrollValue}%` }}></div>
      </div>
      <div>
        <button onClick={increaseScroll}>+10%</button>
        <button onClick={decreaseScroll}>-10%</button>
        <input type="number" value={scrollValue} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default ScrollBar;
