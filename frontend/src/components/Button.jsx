// src/components/Button.jsx
import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

export default function Button({ text, className = "", to, variant = "default" }) {
  // Combine base class, variant class, and any extra classes passed via props
  const combinedClasses = `custom-btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={combinedClasses}>
      {text}
    </button>
  );
}