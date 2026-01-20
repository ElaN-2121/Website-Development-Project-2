import React from "react";
import "../styles/Contact.css";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import GetInTouch from "../assets/Reservation_ContectUs_assets/get in touch.png";
import ContactImg from "../assets/Reservation_ContectUs_assets/contactUs.png";
import MapImg from "../assets/Reservation_ContectUs_assets/map.png";
import IgIcon from "../assets/icons/ph--instagram-logo-thin.png";
import messageIcon from "../assets/icons/mage--message-dots-round.png";
import locationIcon from "../assets/icons/system-uicons--location.png";
import PhoneIcon from "../assets/icons/ph--phone-light.png";

const InfoCard = ({ icon, title, desc, link }) => (
  <div className="support-card">
    <div className="support-card-top">
      <img src={icon} alt={title} className="support-card-icon" />
    </div>
    <div className="support-card-bottom">
      <div className="support-card-title">{title}</div>
      <div className="support-card-desc">{desc}</div>
      {link && (
        <a href="#" className="support-card-link">
          {link}
        </a>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="contact-title">Let’s Connect-We’re Here to Help You!</h1>

        <div className="contact-hero-main">
          <img
            src={GetInTouch}
            alt="Get in Touch"
            className="contact-hero-image"
          />
          <div>
            <p className="contact-subtitle">
              Reach out to us anytime. Whether you have a question, feedback, or
              need support, we’ll get you the help you need.Discover our warm
              hospitality and responsive support team.
            </p>
            <div className="contact-hero-actions">
              <Button text="Learn More" variant="white" to="/menu" />
              <Button text="Contact Now" variant="yellow" to="/contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-support">
        <h2 className="support-title">
          Get in Touch – Your Support Starts Here!
        </h2>
        <p className="support-subtitle">
          Whether you need assistance, have inquiries, or just want to say
          hello, we’re here to listen and respond promptly.
        </p>
        <div className="support-feature">
          <img src={GetInTouch} alt="Support" className="support-image" />
        </div>
        <div className="support-cards">
          <InfoCard
            icon={IgIcon}
            title="Follow our Instagram"
            desc="Speak to our supportive crew"
            link="@Eatorestaurantind"
          />
          <InfoCard
            icon={messageIcon}
            title="Chat to Support"
            desc="Speak to our supportive crew"
            link="Helloeato@mail.com"
          />
          <InfoCard
            icon={locationIcon}
            title="Visit Us"
            desc="Speak to our supportive crew"
            link="Helloeato@mail.com"
          />
          <InfoCard
            icon={PhoneIcon}
            title="Call Us"
            desc="Speak to our supportive crew"
            link="Helloeato@mail.com"
          />
        </div>
      </section>

      <section className="contact-map">
        <h2 className="support-title">
          Navigate Easily — Find Us with Google Maps!
        </h2>
        <p className="support-subtitle">
          We’re centrally located and easy to find.
        </p>
        <div className="map-board">
          <img src={MapImg} alt="Map preview" className="map-image" />
          <div className="map-pin">Addis Ababa</div>
        </div>
      </section>

      <section className="contact-final">
        <div className="final-grid">
          <img src={ContactImg} alt="Contact" className="final-image" />
          <div className="contact-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Get in Touch with us</h3>
              <p className="contact-card-desc">
                Have questions, need assistance, or just want to say hello?
                We’re here to help! Reach out to us via phone, email, or our
                contact form, and our team will respond promptly to ensure you
                get the support and information you need.
              </p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-input"
                  placeholder="Tell us who you are"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-input"
                  placeholder="Tell us who you are"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="email2" className="form-label">
                  Email address
                </label>
                <input
                  id="email2"
                  type="email"
                  className="form-input"
                  placeholder="Where can we reach you?"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message2" className="form-label">
                  How can we help?
                </label>
                <textarea
                  id="message2"
                  className="form-textarea"
                  placeholder="Tell us your Specific Cause"
                />
              </div>
              <div className="form-submit">
                <Button text="Send to Us" variant="yellow" />
              </div>
              <p className="legal-copy">
                By Contacting us, you agree to our{" "}
                <a href="#">Terms of service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Contact;
