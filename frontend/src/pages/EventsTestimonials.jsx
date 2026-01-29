import React, { useState, useRef, useEffect } from "react";
import "../styles/EventsTestimonials.css";
import Button from '../components/Button';

// Asset Imports
import event from "../assets/Gallery/event.png";
import wedding1 from "../assets/Gallery/wedding1.png";
import privateDinner from "../assets/Gallery/privateDinner.png";
import birthday from "../assets/Gallery/birthday.png";
import birthday2 from "../assets/Gallery/birthday2.png";
import wedding2 from "../assets/Gallery/wedding2.png";
import corporateEvent from "../assets/Gallery/corporate event.jpg";
import habesharestaurant from "../assets/Gallery/habesha-restaurant.jpg";
import hangout from "../assets/Gallery/Hangout.mp4";
import celebration from "../assets/Gallery/Celebration.mp4";
import DiningTogether from "../assets/Gallery/Dining Together.mp4";
import eventFormInterior from "../assets/Gallery/event_form_interior.jpg";

import Hana from "../assets/customers/Hana Gebremedhin.jpg";
import Lulit from "../assets/customers/Lulit Mekonnen.jpg";
import Nati from "../assets/customers/Natnael Haile.jpg";
import Saba from "../assets/customers/Saba Tesfay.jpg";
import Yonas from "../assets/customers/Yonas Birhan.jpg";
import Dagim from "../assets/customers/Dagmawi Abebe.jpg";
import testimonial_last_img from "../assets/Gallery/testimonials_img.jpg";

const initialTestimonials = [
  { id: 0, name: "Hana Gebremedhin", image: Hana, story: "Our wedding at Habesha Feast was absolutely magical!", rating: 5 },
  { id: 1, name: "Lulit Mekonnen", image: Lulit, story: "The corporate event was handled with such professionalism.", rating: 5 },
  { id: 2, name: "Yonas Berhane", image: Yonas, story: "A truly authentic experience! The flavors reminded me of home.", rating: 4 },
  { id: 3, name: "Saba Tesfaye", image: Saba, story: "Best birthday celebration ever! The team went above and beyond.", rating: 5 },
  { id: 4, name: "Natnael Haile", image: Nati, story: "Exceptional quality and atmosphere. We felt like royalty.", rating: 5 },
  { id: 5, name: "Dagmawi Abebe", image: Dagim, story: "Unmatched level of service. Impressed by the logistics.", rating: 4 },
];

const EventsTestimonials = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Persistence Logic: Initialize from LocalStorage
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("restaurant_testimonials");
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [newTestimonial, setNewTestimonial] = useState({ name: "", story: "", image: null, rating: 5 });
  const [hoverRating, setHoverRating] = useState(0); 
  const [previewURL, setPreviewURL] = useState(null);

  const unforgettableRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Persistence Logic: Save to LocalStorage whenever testimonials change
  useEffect(() => {
    localStorage.setItem("restaurant_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = (id) => setActiveTab(activeTab === id ? null : id);
  const nextSlide = () => setActiveCarouselIndex((prev) => (prev === 10 ? 0 : prev + 1));
  const prevSlide = () => setActiveCarouselIndex((prev) => (prev === 0 ? 10 : prev - 1));
  const nextTestimonial = () => setActiveTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () => setActiveTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Updated to handle Base64 strings for persistence
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
        setNewTestimonial({ ...newTestimonial, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.story) return;

    const entry = {
      id: Date.now(),
      name: newTestimonial.name,
      story: newTestimonial.story,
      rating: newTestimonial.rating,
      image: newTestimonial.image || testimonial_last_img, 
    };

    setTestimonials([entry, ...testimonials]);
    setNewTestimonial({ name: "", story: "", image: null, rating: 5 });
    setPreviewURL(null);
    alert("Thank you! Your testimonial has been added.");
  };

  const eventData = [
    { id: 0, title: "Customized Catering", desc: "Our catering services are tailored to your specific taste and dietary needs." },
    { id: 1, title: "Exclusive Venues", desc: "Gain access to prestigious, high-capacity banquet halls and premium private spaces tailored for your most important gatherings." },
    { id: 2, title: "Seamless Planning", desc: "Expert planners to handle every detail of your special day." },
    { id: 3, title: "Personalized Experience", desc: "Every event is unique, crafted to reflect your personal vision." },
    { id: 4, title: "Tailored Packages", desc: "Flexible pricing and service bundles to suit your budget." },
    { id: 5, title: "Memorable Moments", desc: "Creating lasting memories through exceptional service and atmosphere." },
  ];

  const carouselData = [
    { id: 0, type: "image", src: wedding1, title: "Grand Wedding Celebration", desc: "A spectacular wedding celebrated with grand decor, live entertainment, and a gourmet feast for hundreds of guests." },
    { id: 1, type: "video", src: hangout, title: "Afternoon Social", desc: "A stylish midday gathering with delicious meals and happy customers enjoying our premium lounge atmosphere." },
    { id: 2, type: "image", src: event, title: "Sun-Drenched Garden Luncheon", desc: "A vibrant afternoon celebration set against a backdrop of blooming florals and soft sunlight with a curated seasonal menu." },
    { id: 3, type: "image", src: privateDinner, title: "Elegant Private Dinner", desc: "A beautifully curated dining experience featuring a five-course meal, candlelit ambiance, and live acoustic music." },
    { id: 4, type: "video", src: celebration, title: "Joyous Moments", desc: "Capturing the energy of life's biggest wins with premium service and a festive environment for all your guests." },
    { id: 5, type: "image", src: birthday, title: "Milestone Birthday Bash", desc: "A vibrant party with a custom theme, DJ, and a decadent dessert station to mark a truly special year." },
    { id: 6, type: "image", src: corporateEvent, title: "Corporate Excellence", desc: "A sophisticated evening of networking, awards, and fine dining for industry leaders and corporate partners." },
    { id: 7, type: "video", src: DiningTogether, title: "Group Dining Experience", desc: "Large-scale communal dining where flavor meets friendship. Perfect for family reunions or team outings." },
    { id: 8, type: "image", src: habesharestaurant, title: "Authentic Habesha Dining", desc: "Foreign guests exploring the rich heritage of Ethiopian cuisine through our traditional communal platters." },
    { id: 9, type: "image", src: birthday2, title: "Blastful Birthday", desc: "High-energy celebrations featuring custom lighting and personalized decor to make your birthday unforgettable." },
    { id: 10, type: "image", src: wedding2, title: "Classic Wedding", desc: "Timeless elegance for your special day, featuring sophisticated floral arrangements and a refined white-glove service." },
  ];

  return (
    <div className="events-page-wrapper">
      <section className="container">
        <div className="content-wrapper">
          <div className="header-row">
            <h1 className="main-title">Unforgettable Events, Perfectly Curated for You</h1>
            <div className="header-right-text">
              <p className="header-desc">
                Elevate your celebrations with customized event packages, exquisite catering, and seamless service.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button text="See More" variant="yellow" className="see-more-btn" onClick={() => scrollToSection(unforgettableRef)} />
                <Button text="Testimonials" variant="white" className="see-more-btn" onClick={() => scrollToSection(testimonialsRef)} />
              </div>
            </div>
          </div>

          <div className="main-layout">
            <div className="accordion-container">
              {eventData.map((item) => (
                <div key={item.id} className={`accordion-item ${activeTab === item.id ? "active" : ""}`} onClick={() => handleToggle(item.id)}>
                  <div className="accordion-header">
                    <span className="item-title">{item.title}</span>
                    <div className="circle-btn">
                      <span className="arrow">{activeTab === item.id ? "↑" : "↓"}</span>
                    </div>
                  </div>
                  {activeTab === item.id && <p className="item-description">{item.desc}</p>}
                </div>
              ))}
            </div>
            <div className="event1stimage-section">
              <div className="event1stimage-container">
                <img src={event} alt="event" className="event1stimage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perfect-events-section">
        <div className="perfect-events-wrapper">
          <div className="perfect-events-header">
            <h2 className="perfect-events-title">Perfect Events, Any Occasion</h2>
            <p className="perfect-events-subtitle">From weddings to corporate gatherings, we create unforgettable events.</p>
          </div>
          <div className="perfect-events-grid">
            <div className="perfect-events-col-left">
              <div className="perfect-events-img-large"><img src={birthday} alt="Birthday" className="perfect-events-image" /></div>
              <div className="perfect-events-row-bottom">
                <div className="perfect-events-img-small"><img src={privateDinner} alt="Private Dinner" className="perfect-events-image" /></div>
                <div className="perfect-events-img-small"><img src={wedding1} alt="Wedding" className="perfect-events-image" /></div>
              </div>
            </div>
            <div className="perfect-events-col-right">
              <div className="perfect-events-img-medium"><img src={wedding2} alt="Wedding 2" className="perfect-events-image" /></div>
              <div className="perfect-events-img-medium"><img src={corporateEvent} alt="Corporate" className="perfect-events-image" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="unforgettable-section" ref={unforgettableRef}>
        <h2 className="unforgettable-title">Unforgettable Moments, Beautifully Crafted</h2>
        <div className="carousel-view">
          <Button text="←" variant="white" className="carousel-nav-btn left" onClick={prevSlide} />
          <div className="carousel-stage">
            {carouselData.map((item, index) => {
              const len = carouselData.length;
              let dist = index - activeCarouselIndex;
              if (dist > len / 2) dist -= len;
              if (dist < -len / 2) dist += len;

              let posClass = "hidden";
              if (dist === 0) posClass = "center";
              else if (dist === -1) posClass = "left-1";
              else if (dist === -2) posClass = "left-2";
              else if (dist === 1) posClass = "right-1";
              else if (dist === 2) posClass = "right-2";

              return (
                <div key={item.id} className={`carousel-card ${posClass}`}>
                  {item.type === "video" ? (
                    <video src={item.src} autoPlay loop muted playsInline className="carousel-media" />
                  ) : (
                    <img src={item.src} alt={item.title} className="carousel-media" />
                  )}
                </div>
              );
            })}
          </div>
          <Button text="→" variant="white" className="carousel-nav-btn right" onClick={nextSlide} />
        </div>
        <div className="unforgettable-footer">
          <h3 className="moment-name">{carouselData[activeCarouselIndex].title}</h3>
          <p className="moment-desc">{carouselData[activeCarouselIndex].desc}</p>
        </div>
      </section>

      <section className="testimonials-section" ref={testimonialsRef} style={{ background: "#4E342E" }}>
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-stage">
            {testimonials.map((item, index) => {
              const len = testimonials.length;
              let dist = index - activeTestimonialIndex;
              if (dist > len / 2) dist -= len;
              if (dist < -len / 2) dist += len;

              let posClass = "hidden";
              if (dist === 0) posClass = "center";
              else if (dist === -1) posClass = "left-1";
              else if (dist === 1) posClass = "right-1";

              return (
                <div key={item.id} className={`testimonial-3d-card ${posClass}`}>
                  <div className="testimonial-white-base">
                    <img src={item.image} alt={item.name} className="testimonial-img-only" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="testimonial-info-block">
            <p className="testimonial-name-active">{testimonials[activeTestimonialIndex]?.name}</p>
            <div className="testimonial-nav-btns">
              <Button text="←" variant="white" className="nav-circle" onClick={prevTestimonial} />
              <Button text="→" variant="white" className="nav-circle" onClick={nextTestimonial} />
            </div>
          </div>
        </div>

        <section className="reviews-display-section">
          <div className="reviews-carousel-wrapper">
            <div className="reviews-stage-area">
              {testimonials.map((item, index) => {
                const len = testimonials.length;
                let dist = index - activeTestimonialIndex;
                if (dist > len / 2) dist -= len;
                if (dist < -len / 2) dist += len;

                let posClass = "rev-hidden";
                if (dist === 0) posClass = "rev-center";
                else if (dist === -1) posClass = "rev-left";
                else if (dist === 1) posClass = "rev-right";

                return (
                  <div key={item.id} className={`review-card-3d ${posClass}`}>
                    <div className="review-glass-container">
                      <div className="stars-row">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < item.rating ? "#FFD700" : "#ffffff40" }}>★</span>
                        ))}
                      </div>
                      <p className="review-body-text">{item.story}</p>
                      <div className="review-footer-avatar-row">
                        <div className="rev-avatar-circle">
                          <img src={item.image} alt={item.name} className="rev-img" />
                        </div>
                        <div className="rev-user-details">
                          <h4 className="rev-user-name">{item.name}</h4>
                          <p className="rev-user-title">Verified Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="testimonial-form-entry">
            <div className="form-container-main">
                <div style={{ flex: "1", minWidth: "300px" }}>
                    <h2 className="form-title" >Share Your Experience</h2>
                    <p style={{ color: "white", marginBottom: "25px", fontSize: "0.9rem" }}>Upload a photo and tell us about your visit!</p>
                    
                    <form className="event-inquiry-form" onSubmit={handleTestimonialSubmit}>
                        <div className="input-group full-width">
                            <label className="testimonial-inputs">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                value={newTestimonial.name}
                                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                                required 
                            />
                        </div>

                        <div className="input-group full-width">
                            <label className="testimonial-inputs">Your Rating</label>
                            <div>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setNewTestimonial({ ...newTestimonial, rating: star })}
                                        style={{
                                            color: (hoverRating || newTestimonial.rating) >= star ? "#FFD700" : "#ffffff40",
                                            transition: "color 0.2s",
                                            cursor: "pointer",
                                            fontSize: "1.5rem"
                                        }}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="input-group full-width">
                            <label className="testimonial-inputs">Your Story</label>
                            <textarea 
                                placeholder="How was the food and service?" 
                                value={newTestimonial.story}
                                onChange={(e) => setNewTestimonial({...newTestimonial, story: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        <div className="input-group full-width">
                            <label className="testimonial-inputs">Add a Photo</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                style={{ border: "none", color: "white", padding: "5px 0" }}
                            />
                        </div>
                        <Button type="submit" text="Post Testimonial" variant="yellow" className="form-submit-btn" />
                    </form>
                </div>

                <div className="upload-image">
                    {previewURL ? (
                        <>
                            <p style={{ color: "#FFD700", marginBottom: "10px", fontSize: "0.8rem" }}>Image Preview:</p>
                            <img src={previewURL} alt="Preview" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
                        </>
                    ) : (
                        <p style={{ color: "#ffffff60", textAlign: "center" }}>Your uploaded photo will appear here</p>
                    )}
                </div>
            </div>
        </section>

        <section className="last-testimonial-section">
          <div className="testimonial-container">
            <img src={testimonial_last_img} alt="Event" className="header-image" />
            <div className="yellow-card">
              <blockquote className="quote">
                “When a leading tech company approached us... Our team worked closely with their organizers to understand their goals.”
              </blockquote>
              <div className="author-info">
                <h3 className="author-name">Michael Richard Klein</h3>
                <p className="author-description">Entrepreneur & Operations Manager</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default EventsTestimonials;