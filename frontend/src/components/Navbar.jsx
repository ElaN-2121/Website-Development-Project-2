import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import LogoImg from "../assets/LogoImg.png";
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* 1. Logo Section - Link to root "/" */}
      <Link to="/" className="logo">
        <img src={LogoImg} alt="Habesha Fest Logo" className="logo-img" />
        <h1 className="logo-text">Habesha Fest</h1>
      </Link>

      {/* 2. Navigation Links  */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/reservation">Reservation</NavLink></li>
        <li><NavLink to="/events">Events & Testimonials</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        
        {/* Only show Dashboard link if Admin */}
        {user?.role === 'admin' && (
          <li><NavLink to="/admin">Dashboard</NavLink></li>
        )}

        {/* Logout link */}
        {user && (
          <li>
            <button 
              onClick={logout} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                font: 'inherit', 
                cursor: 'pointer',
                padding: 0
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>

      {/* 3. Action Button (Right) - HIDDEN if user is an admin */}
      {user?.role !== 'admin' && (
        <NavLink to="/reservation" className="nav-btn">
          Book a table
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;