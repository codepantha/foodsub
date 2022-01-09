import React from 'react';
import './Button.css';

const Button = ({
  text, bgColor, color, height, width,
}) => (
  <button style={{
    background: bgColor, color, height, width,
  }}
  >
    {text}
  </button>
);

export default Button;
