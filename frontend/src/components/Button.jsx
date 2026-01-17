// src/components/Button.jsx
import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

// ADD 'onClick' here to the props destructuring
export default function Button({ text, className = "", to, variant = "default", onClick }) {
  
  const combinedClasses = `custom-btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {text}
    </button>
  );
}