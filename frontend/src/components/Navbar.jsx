import React from "react";
import "../styles/Navbar.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Restaurant Logo" />
          <span>Restaurant</span>
        </div>

        {/* Desktop Links */}
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Menu</NavLink>
          <NavLink to="/events" onClick={() => setIsOpen(false)}>Events</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

          <button className="btn-primary mobile-only">
            Book a table
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-cta desktop-only">
          <button className="btn-primary">Book a table</button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
};

export default Navbar;
