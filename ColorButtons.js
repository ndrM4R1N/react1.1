import React, { useState } from 'react';
import './ColorButtons.css';
function ColorButtons() {
    const [backgroundColor, setBackgroundColor] = useState('');
  
    const handleColorChange = (color) => {
      setBackgroundColor(color);
      document.body.style.backgroundColor = color;
    };
  
    const handleReset = () => {
      setBackgroundColor('');
      document.body.style.backgroundColor = '';
    };
  
    return (
      <div className="color-buttons-wrapper">
        <div className="background" style={{ backgroundColor }}></div>
        <div className="color-buttons-container">
          <button onClick={handleReset} className="reset-button">Reset</button>
        <button onClick={() => handleColorChange('red')} className="color-button red"></button>
        <button onClick={() => handleColorChange('yellow')} className="color-button yellow"></button>
        <button onClick={() => handleColorChange('green')} className="color-button green"></button>
        <button onClick={() => handleColorChange('blue')} className="color-button blue"></button>
        <button onClick={() => handleColorChange('purple')} className="color-button purple"></button>
      </div>
      <div className="background" style={{ backgroundColor }}></div>
    </div>
  );
}

export default ColorButtons;
