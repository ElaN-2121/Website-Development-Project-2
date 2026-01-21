import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import LogoImg from "../assets/LogoImg.png";
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Dynamic Logo Link: Admins go to Admin page, Users go Home */}
      <Link to={user?.role === "admin" ? "/admin" : "/home"} className="logo">
        <img src={LogoImg} alt="Habesha Fest Logo" className="logo-img" />
        <h1 className="logo-text">Habesha Fest</h1>
      </Link>

      <ul className="nav-links">
        {/* SHARED LINKS (Visible to everyone logged in) */}
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        
        {/* USER ONLY LINKS */}
        {user?.role === "user" && (
          <>
            <li><NavLink to="/reservation">Reservation</NavLink></li>
            <li><NavLink to="/events">Events & Testimonials</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </>
        )}

        {/* ADMIN ONLY LINKS */}
        {user?.role === "admin" && (
          <>
            <li><NavLink to="/admin" className="admin-highlight">Admin Dashboard</NavLink></li>
          </>
        )}
        
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>

      <div className="nav-actions">
        {user ? (
          <div className="nav-user-section">
            <span className="welcome-text">Hi, {user.name.split(' ')[0]}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/reservation" className="nav-btn">
            Book a table
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;