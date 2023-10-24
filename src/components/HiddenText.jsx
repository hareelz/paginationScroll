
import React, { useState } from 'react';

const HiddenText = ({ texts }) => {
  const [selectedText, setSelectedText] = useState(null);

  const toggleText = index => {
    setSelectedText(index === selectedText ? null : index);
  };

  return (
    <div>
      {texts.map((text, index) => (
        <div key={index}>
          <button onClick={() => toggleText(index)}>Показать текст</button>
          {selectedText === index && <div>{text}</div>}
        </div>
      ))}
    </div>
  );
};

export default HiddenText;
