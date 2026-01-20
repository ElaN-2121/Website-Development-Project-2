import React from "react";
import "../styles/FooterTwo.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterBackground from "../assets/footerBackground.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-container"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${FooterBackground})`,
      }}
    >
      <div className="footer-content">
        {/* Column 1: Brand & Hours */}
        <div className="footer-column brand-col">
          <div className="logo">
            <span className="logo-icon">
              <img src={Logo} alt="Logo" className="logo-img" />
            </span>
            <h2>Habesha Fest</h2>
          </div>
          <p className="description">
            Celebrating the rich flavors of Ethiopia with authentic dishes, warm
            hospitality, and a vibrant cultural touch.
          </p>

          <div className="opening-hours">
            <h4>OPENING HOURS</h4>
            <div className="hours-grid">
              <div>
                <p className="day">Monday - Friday</p>
                <p className="time">8:00 am to 9:00 pm</p>
              </div>
              <div>
                <p className="day">Saturday</p>
                <p className="time">8:00 am to 9:00 pm</p>
              </div>
              <div>
                <p className="day">Sunday</p>
                <p className="time closed">CLOSED</p>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h4>NAVIGATION</h4>
          <ul>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/EventsTestimonials">Events & Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/dishes">Main dishes</Link>
            </li>
          </ul>
        </div>
        {/* Column 3: Dishes */}
        <div className="footer-column">
          <h4>DISHES</h4>
          <ul>
            <li>Kitfo</li>
            <li>Doro</li>
            <li>Egg & Cocumber</li>
            <li>Lumpia w/Suace</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com/yourpage"
              className="icon-circle active"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              className="icon-circle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="icon-circle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              className="icon-circle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 Habesha Fest Restaurants. All Right Reserved</p>
        <div className="legal-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
