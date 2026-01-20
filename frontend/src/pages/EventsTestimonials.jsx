import React, { useState, useRef } from "react";
import "../styles/EventsTestimonials.css";
import Button from '../components/Button';

// Asset Imports - Gallery
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

// Asset Imports - Customers
import Hana from "../assets/customers/Hana Gebremedhin.jpg";
import Lulit from "../assets/customers/Lulit Mekonnen.jpg";
import Nati from "../assets/customers/Natnael Haile.jpg";
import Saba from "../assets/customers/Saba Tesfay.jpg";
import Yonas from "../assets/customers/Yonas Birhan.jpg";
import Dagim from "../assets/customers/Dagmawi Abebe.jpg";
import testimonial_last_img from "../assets/Gallery/testimonials_img.jpg";

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

const testimonialsData = [
  { id: 0, name: "Hana Gebremedhin", image: Hana },
  { id: 1, name: "Lulit Mekonnen", image: Lulit },
  { id: 2, name: "Yonas Berhane", image: Yonas },
  { id: 3, name: "Saba Tesfaye", image: Saba },
  { id: 4, name: "Natnael Haile", image: Nati },
  { id: 5, name: "Dagmawi Abebe", image: Dagim },
];

const EventsTestimonials = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const unforgettableRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  // Main Carousel Navigation
  const nextSlide = () => {
    setActiveCarouselIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveCarouselIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  // Testimonial Navigation Functions
  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const eventData = [
    { id: 0, title: "Customized Catering", desc: "Our catering services are tailored to your specific taste and dietary needs." },
    { id: 1, title: "Exclusive Venues", desc: "Gain access to prestigious, high-capacity banquet halls and premium private spaces tailored for your most important gatherings." },
    { id: 2, title: "Seamless Planning", desc: "Expert planners to handle every detail of your special day." },
    { id: 3, title: "Personalized Experience", desc: "Every event is unique, crafted to reflect your personal vision." },
    { id: 4, title: "Tailored Packages", desc: "Flexible pricing and service bundles to suit your budget." },
    { id: 5, title: "Memorable Moments", desc: "Creating lasting memories through exceptional service and atmosphere." },
  ];

  return (
    <div className="events-page-wrapper">
      {/* SECTION 1: HEADER & ACCORDION */}
      <section className="container">
        <div className="content-wrapper">
          <div className="header-row">
            <h1 className="main-title">Unforgettable Events, Perfectly Curated for You</h1>
            <div className="header-right-text">
              <p className="header-desc">
                Elevate your celebrations with customized event packages, exquisite catering, and seamless service.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button 
                  text="See More" 
                  variant="yellow" 
                  className="see-more-btn" 
                  onClick={() => scrollToSection(unforgettableRef)} 
                  />
                  <Button 
                  text="Testimonials" 
                  variant="white" 
                  className="see-more-btn" 
                  onClick={() => scrollToSection(testimonialsRef)} 
                  />
                  </div>
              </div>
            </div>
          </div>

          <div className="main-layout">
            <div className="accordion-container">
              {eventData.map((item) => (
                <div
                  key={item.id}
                  className={`accordion-item ${activeTab === item.id ? "active" : ""}`}
                  onClick={() => handleToggle(item.id)}
                >
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

      {/* SECTION 2: PERFECT EVENTS GRID */}
      <section className="perfect-events-section">
        <div className="perfect-events-wrapper">
          <div className="perfect-events-header">
            <h2 className="perfect-events-title">Perfect Events, Any Occasion</h2>
            <p className="perfect-events-subtitle">From weddings to corporate gatherings, we create unforgettable events.</p>
          </div>
          <div className="perfect-events-grid">
            <div className="perfect-events-col-left">
              <div className="perfect-events-img-large">
                <img src={birthday} alt="Birthday" className="perfect-events-image" />
              </div>
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

      {/* SECTION 3: 3D CAROUSEL */}
      <section className="unforgettable-section" ref={unforgettableRef}>
        <h2 className="unforgettable-title">Unforgettable Moments, Beautifully Crafted</h2>
        <div className="carousel-view">
          <Button 
          text="←" 
          variant="white" 
          className="carousel-nav-btn left" 
          onClick={prevSlide} 
          />
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
          <Button 
          text="→" 
          variant="white" 
          className="carousel-nav-btn right" 
          onClick={nextSlide} 
          />
        </div>
        <div className="unforgettable-footer">
          <h3 className="moment-name">{carouselData[activeCarouselIndex].title}</h3>
          <p className="moment-desc">{carouselData[activeCarouselIndex].desc}</p>
        </div>
      </section>

      {/* SECTION 4: EVENT FORM */}
      <section className="event-form-section">
        <div className="form-container-main">
          <div className="form-image-column">
            <img src={eventFormInterior} alt="Event Venue" className="form-hero-img" />
          </div>
          <div className="form-content-column">
            <div className="form-header">
              <h2 className="form-title">Your Event, Our Priority</h2>
              <p className="form-subtitle">Have questions about your event? Fill out our dedicated form, and our team will assist you with personalized solutions</p>
            </div>

            <form className="event-inquiry-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-group">
                  <label>First name</label>
                  <input type="text" placeholder="Tell us who you are" />
                </div>
                <div className="input-group">
                  <label>Last name</label>
                  <input type="text" placeholder="Tell us who you are" />
                </div>
              </div>
              <div className="input-group full-width">
                <label>Email address</label>
                <input type="email" placeholder="Where can we reach you?" />
              </div>
              <div className="input-group full-width">
                <label>How can we assist with your event inquiries?</label>
                <textarea placeholder="Tell us your Specific Case"></textarea>
              </div>
            <Button 
            type="submit" 
            text="Send to Us" 
            variant="yellow" 
            className="form-submit-btn" 
            />
            </form>
            <div className="form-footer">
              <p className="terms-text">By Contacting us, you agree to our <span className="terms">Terms</span> of service and <span className="terms">privacy Policy</span></p>
              <p className="copyright-text">© 2026 Habesha Feast, All right reserved</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="testimonials-section" ref={testimonialsRef} style={{ background: "#4E342E" }}>
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <div className="quote-container">
          <span className="big-quote left-quote">“</span>
          <h2 className="testimonial-text">
            <span className="gold-text">THE FOOD WAS ABSOLUTELY OUTSTANDING, AND THE SERVICE WAS EXCEPTIONAL!</span>
            <span className="white-text"> EVERY DETAIL CONTRIBUTED TO AN UNFORGETTABLE MOMENT. CAN’T WAIT TO RETURN FOR ANOTHER AMAZING EXPERIENCE</span>
          </h2>
          <span className="big-quote right-quote">”</span>
        </div>

        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-stage">
            {testimonialsData.map((item, index) => {
              const len = testimonialsData.length;
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
            <p className="testimonial-name-active">
              {testimonialsData[activeTestimonialIndex]?.name}
            </p>
            <div className="testimonial-nav-btns">
              <Button 
              text="←" 
              variant="white" 
              className="nav-circle" 
              onClick={prevTestimonial} 
              />
              <Button 
              text="→" 
              variant="white" 
              className="nav-circle" 
              onClick={nextTestimonial} 
              />
            </div>
          </div>
        </div>

        {/* SECTION 6: REVIEW CARDS SECTION */}
        <section className="reviews-display-section">
          <div className="quote-container">
            <h2 className="testimonial-text">
              <span className="white-text">What Our Customers Say About Us!</span>
            </h2>
          </div>

          <div className="reviews-carousel-wrapper">
            <div className="reviews-stage-area">
              {testimonialsData.map((item, index) => {
                const len = testimonialsData.length;
                let dist = index - activeTestimonialIndex;
                if (dist > len / 2) dist -= len;
                if (dist < -len / 2) dist += len;

                let posClass = "rev-hidden";
                if (dist === 0) posClass = "rev-center";
                else if (dist === -1) posClass = "rev-left";
                else if (dist === 1) posClass = "rev-right";

                const stories = [
                  "Our wedding at Habesha Feast was absolutely magical! From the moment we arrived, the stunning venue took our breath away. The attention to detail was remarkable, and the staff was incredibly attentive, ensuring everything ran smoothly. The gourmet food was a highlight; our guests are still raving about the delicious menu and exceptional service. We truly felt like royalty throughout the entire day.",
                  "The corporate event was handled with such professionalism. The catering was exquisite, and the ambiance was exactly what we needed for our partners. Every detail was taken care of, from the presentation of the appetizers to the seamless flow of the evening program. It provided the perfect sophisticated backdrop for our high-level networking and partnership discussions.",
                  "A truly authentic experience! The flavors of the communal platters reminded me so much of home. The service was warm and personal, and the live music added a beautiful, soulful touch to our anniversary dinner. We've been to many restaurants, but none capture the heart and heritage of our culture quite like this place. It was more than just a meal; it was a celebration of identity.",
                  "Best birthday celebration ever! The team went above and beyond with the decorations and the custom menu that reflected all my favorite flavors. My guests are still talking about the outstanding service and the unique honey wine selection. They managed to make a large party feel intimate and special, attending to every guest's needs with a smile and professional grace.",
                  "Exceptional quality and atmosphere. We hosted a private dinner here, and the staff made us feel like royalty. The food is consistently delicious and the decor is breathtaking, blending modern luxury with traditional elements. It's rare to find a place that excels equally in culinary mastery and interior design. Every visit feels like a luxury getaway right in the heart of the city.",
                  "The level of service provided by the Habesha Feast team is unmatched. As Dagmawi Abebe, I was particularly impressed by how they managed the guest flow and logistics during our gala. A flawless execution that allowed us to focus entirely on our guests. Their coordination between the kitchen and the front-of-house is a masterclass in event management. I highly recommend them for high-stakes events."
                ];

                return (
                  <div key={item.id} className={`review-card-3d ${posClass}`}>
                    <div className="review-glass-container">
                      <div className="stars-row">⭐⭐⭐⭐⭐</div>
                      <p className="review-body-text">{stories[index % stories.length]}</p>

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

            <div className="reviews-controls-block">
              <div className="testimonial-nav-btns">
                <div className="testimonial-nav-btns">
                  <Button 
                  text="←" 
                  variant="white" 
                  className="nav-circle" 
                  onClick={prevTestimonial} 
                  />
                  <Button 
                  text="→" 
                  variant="white" 
                  className="nav-circle" 
                  onClick={nextTestimonial} 
                  />
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL TESTIMONIAL IMAGE & QUOTE */}
        <section className="last-testimonial-section">
          <div className="testimonial-container">
            <img src={testimonial_last_img} alt="Event" className="header-image" />
            <div className="yellow-card">
              <blockquote className="quote">
                “When a leading tech company approached us to host their annual corporate retreat, they wanted to create an event that would inspire creativity and strengthen team bonds. Our team worked closely with their organizers to understand their goals and vision”
              </blockquote>
              <div className="author-info">
                <h3 className="author-name">Michael Richard Klein</h3>
                <p className="author-description">A successful entrepreneur managing operations across various industries and sectors</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default EventsTestimonials;