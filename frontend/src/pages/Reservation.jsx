import React, { useState } from "react";
import axios from "axios";
import "../styles/Reservation.css";
import Button from "../components/Button";

// Image imports
import HeroImage from "../assets/Gallery/reservation.png";
import InteriorImage from "../assets/homeAssets/Interior2.png";

const Reservation = () => {
  // 1. State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: "4 Person",
    time: "11:00 PM",
    date: "",
    dietary: "None",
    notes: "",
    confirm: false
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.confirm) {
      alert("Please confirm the reservation policies.");
      return;
    }

    try {
      // Mapping frontend state to Backend Model field names
      const payload = {
        name: formData.fullName,
        email: formData.email,
        guests: parseInt(formData.guests), // Converts "4 Person" to 4
        time: formData.time,
        date: formData.date,
        specialRequest: `Dietary: ${formData.dietary} | Notes: ${formData.notes}`
      };

      const response = await axios.post("http://localhost:5000/api/reservations", payload);
      
      if (response.status === 201) {
        alert("Success! Your table has been reserved.");
        // Clear form
        setFormData({
          fullName: "", email: "", guests: "4 Person", time: "11:00 PM",
          date: "", dietary: "None", notes: "", confirm: false
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="reservation-page">
      {/*Hero Section*/}
      <section className="reservation-hero">
        <h1 className="reservation-title">
          Reserve Your Table, Savor Every Moment with Us
        </h1>
        <div className="reservation-hero-content">
          <div className="reservation-hero-image-wrapper">
            <img src={HeroImage} alt="Dining Table" className="reservation-hero-image" />
          </div>
          <div className="reservation-hero-subtitle">
            <p className="reservation-subtitle">
              Secure your table effortlessly and enjoy a delightful dining experience with exceptional flavors.
            </p>
            <div className="reservation-hero-actions">
              <Button text="View Menu" variant="yellow" to="/menu" />
              <Button text="Explore Store" variant="white" to="/gallery" />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Section*/}
      <section className="reservation-form-section">
        <div className="reservation-form-container">
          <div className="form-header">
            <h2 className="form-title">Secure Your Spot</h2>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text" id="fullName" required
                placeholder="Darlene Robertson" className="form-input"
                value={formData.fullName} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email" id="email" required
                placeholder="darlenerobert@gmail.com" className="form-input"
                value={formData.email} onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests" className="form-label">Number of Guests</label>
              <select id="guests" className="form-select" value={formData.guests} onChange={handleChange}>
                <option>1 Person</option>
                <option>2 Person</option>
                <option>4 Person</option>
                <option>6+ Person</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="time" className="form-label">Time</label>
              <select id="time" className="form-select" value={formData.time} onChange={handleChange}>
                <option>11:00 PM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">Preferred Date</label>
              <input 
                type="date" id="date" required 
                className="form-input date-input" 
                value={formData.date} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dietary" className="form-label">Special Requests</label>
              <select id="dietary" className="form-select" value={formData.dietary} onChange={handleChange}>
                <option>None</option>
                <option>Vegan</option>
                <option>Gluten Free</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes" className="form-label">Additional Notes</label>
              <textarea
                id="notes" placeholder="Any other requests" className="form-textarea"
                value={formData.notes} onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-checkbox-group">
              <input 
                type="checkbox" id="confirm" 
                checked={formData.confirm} onChange={handleChange} 
              />
              <label htmlFor="confirm" className="form-label">
                I confirm my reservation and agree to policies.
              </label>
            </div>

            <button type="submit" className="form-submit-btn">Reserve Now</button>
          </form>
        </div>
      </section>

      <section className="events-section">
        <div className="events-content">
          <h2 className="events-title">Join us in celebrating life's special moments!</h2>
          <button className="btn-white">View More</button>
        </div>
        <div className="events-image-wrapper">
          <img src={InteriorImage} alt="Events" className="events-image" />
        </div>
      </section>
    </div>
  );
};

export default Reservation;