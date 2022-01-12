import React from 'react';
import './Button.css';

const Button = ({ text, bgColor, color, height, width }) => {
  return (
    <button style={{ background: bgColor, color: color, height: height, width: width }}>
      {text}
    </button>
  )
}

export default Button
