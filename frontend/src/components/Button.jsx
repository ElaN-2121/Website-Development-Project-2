// src/components/Button.jsx
import React from 'react';
import "src/styles/button.css";


const Button = ({ text, onClick, className, variant }) => {
  // If variant is 'normal', use 'normal-btn'. Otherwise, stay 'nav-button'
  const buttonClass = variant === 'normal' ? 'normal-btn' : 'nav-button';
  
  return (
    <button className={`${buttonClass} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;