import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css"; 
import LogoImg from "../assets/LogoImg.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand Container */}
      <Link to="/" className="logo">
        <img src={LogoImg} alt="Habesha Fest Logo" className="logo-img" />
        <h1 className="logo-text">Habesha Fest</h1> 
      </Link>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/reservation">Reservation</NavLink></li>
        <li><NavLink to="/hotel">Hotel</NavLink></li>
      </ul>

      <NavLink to="/reservation" className="nav-btn">
        Book a table
      </NavLink>
    </nav>
  );
};

export default Navbar;