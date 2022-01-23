import React from 'react';
import './Button.css';

const Button = ({ href, text, bgColor, color, height, width}) => {
  return (
    <button style={{href:href, background: bgColor, color: color, height: height, width: width}}>
      {text}
    </button>
  )
}

export default Button
