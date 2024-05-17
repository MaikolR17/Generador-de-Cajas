import React, { useState } from 'react';
import "./BoxGenerator.module.css"

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { color }]);
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          id='colorInput'    
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
        <button type="submit">Add Color</button>
      </form>
      <div className="color-boxes">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: 100,
              height: 100,
              backgroundColor: box.color,
              display: 'inline-block',
              margin: 10,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;