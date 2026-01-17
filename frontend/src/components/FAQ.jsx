import React, { useState } from 'react';
import "../styles/FAQ.css";

const faqs = [
  { q: "What are your restaurant's hours of operation?", a: "Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM." },
  { q: "Do I need a reservation to dine?", a: "No, but we recommend booking in advance during peak hours." },
  { q: "Can I modify my reservation after booking?", a: "Yes, modifications are allowed up to 24 hours before your reservation." },
  { q: "Do you offer takeout or delivery services?", a: "Yes, we provide both takeout and delivery options." },
  { q: "Are there vegetarian or gluten-free options available?", a: "Yes, we cater to vegetarian and gluten-free diets." },
  { q: "Can I host a private event at your restaurant?", a: "Yes, contact us for private event arrangements." },
  { q: "Do you accommodate requests for celebrations?", a: "Absolutely! Let us know your requirements." },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <section className="faq-section">
      <div className="section-container faq-grid">
        <div className="faq-content-side">
          <h2 className="faq-title">Your Questions Answered, Enjoy a Seamless Experience!</h2>
          
          <div className="accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeIndex === idx ? 'active' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{activeIndex === idx ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-container">
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-image-side">
          <div className="faq-image-wrapper">
             <img 
               src="/src/assets/Restaurant_interior.png" 
               alt="Restaurant Interior" 
               className="faq-main-img" 
             />
             <button className="faq-see-more">See More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;