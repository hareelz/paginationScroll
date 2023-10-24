
import React, { useState } from 'react';

const Card = ({ cards }) => {
  const [visibleCards, setVisibleCards] = useState(2);

  const loadMoreCards = () => {
    setVisibleCards(prev => prev + 2);
  };

  return (
    <div>
      {cards.slice(0, visibleCards).map(card => (
        <div key={card.id}>{card.text}</div>
      ))}
      {visibleCards < cards.length && (
        <button onClick={loadMoreCards}>Показать ещё</button>
      )}
    </div>
  );
};

export default Card;
