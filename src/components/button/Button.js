import React from 'react';
import './Button.css';

 dev
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
=======
const Button = ({ text, bgColor, color, height, width }) => {
  return (
    <button style={{ background: bgColor, color: color, height: height, width: width }}>
      {text}
    </button>
  )
}

export default Button
 dev
