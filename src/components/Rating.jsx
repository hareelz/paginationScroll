// Rating.js
import React, { useState } from 'react';
import './Pagination.css'

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = value => {
    setRating(value);
  };

  return (
    <div >
      <span className='smile' onClick={() => handleRatingClick(1)}>{rating >= 1 ? '🫶' : '✊'}</span>
      <span className='smile' onClick={() => handleRatingClick(2)}>{rating >= 2 ? '🫶' : '✊'}</span>
      <span className='smile' onClick={() => handleRatingClick(3)}>{rating >= 3 ? '🫶' : '✊'}</span>
      <span className='smile' onClick={() => handleRatingClick(4)}>{rating >= 4 ? '🫶' : '✊'}</span>
      <span className='smile' onClick={() => handleRatingClick(5)}>{rating === 5 ? '🫶' : '✊'}</span>
    </div>
  );
};

export default Rating;
