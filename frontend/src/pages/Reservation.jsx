import React from "react";
import Button from "../components/Button";
import FAQ from "../components/FAQ";

// Images served from public/assets
import HeroImage from "../assets/reservation.png";
import InteriorImage from "../assets/Interior2.png"; // Placeholder for events image

const Reservation = () => {
  return (
    <div className="reservation-page">
      {/* --- Hero Section --- */}
      <section className="reservation-hero">
        <h1 className="reservation-title">
          Reserve Your Table, Savor Every Moment with Us
        </h1>

        <div className="reservation-hero-content">
          <div className="reservation-hero-image-wrapper">
            <img
              src={HeroImage}
              alt="Dining Table"
              className="reservation-hero-image"
            />
          </div>
          <div className="reservation-hero-subtitle">
            <p className="reservation-subtitle">
              Secure your table effortlessly and enjoy a delightful dining
              experience with exceptional flavors, warm ambiance, and welcoming
              service.
            </p>
            <div className="reservation-hero-actions">
              <Button text="View Menu" variant="yellow" to="/menu" />
              <Button text="Explore Store" variant="white" to="/gallery" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Reservation Form Section --- */}
      <section className="reservation-form-section">
        <div className="reservation-form-container">
          <div className="form-header">
            <h2 className="form-title">
              Secure Your Spot, Indulge in Culinary Delights
            </h2>
            <p className="form-subtitle">
              Make a reservation today to experience exquisite dishes, attentive
              service, and a welcoming atmosphere perfect for any occasion.
            </p>
          </div>

          <form className="reservation-form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Darlene Robertson"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="darlenerobert@gmail.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests" className="form-label">
                Number of Guests
              </label>
              <select id="guests" className="form-select">
                <option>4 Person</option>
                <option>2 Person</option>
                <option>6+ Person</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="time" className="form-label">
                Time of Reservation
              </label>
              <select id="time" className="form-select">
                <option>11:00 PM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Preferred Date
              </label>
              <input type="date" id="date" className="form-input date-input" />
            </div>
            <div className="form-group">
              <label htmlFor="dietary" className="form-label">
                Special Requests (Optional)
              </label>
              <select id="dietary" className="form-select">
                <option>Dietary Restrictions</option>
                <option>None</option>
                <option>Vegan</option>
                <option>Gluten Free</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes" className="form-label">
                Additional Notes
              </label>
              <textarea
                id="notes"
                placeholder="Any other comments or requests"
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-checkbox-group">
              <input type="checkbox" id="confirm" />
              <label htmlFor="confirm" className="form-label">
                I confirm my reservation and agree to the restaurant's policies.
              </label>
            </div>

            <button type="submit" className="form-submit-btn">
              Reserve Now
            </button>
          </form>
        </div>
      </section>

      {/* --- Events Section --- */}
      <section className="events-section">
        <div className="events-content">
          <span className="events-eyebrow">Events & Private Dining</span>
          <h2 className="events-title">
            Join us in celebrating life's special moments with exceptional food
            and unforgettable experiences together!
          </h2>
          <p className="events-desc">
            Whether it's a birthday, anniversary, corporate gathering, or any
            special occasion, our restaurant offers the perfect setting for your
            event.
          </p>
          <button className="btn-white">View More</button>
        </div>
        <div className="events-image-wrapper">
          <img
            src={InteriorImage}
            alt="Events Dining"
            className="events-image"
          />
        </div>
      </section>

      <section className="reservation-faq-section">
        <FAQ />
      </section>
    </div>
  );
};

export default Reservation;
