import React, { useState } from "react";
import "../styles/FAQ.css";
import "../styles/Button.css";
import Button from "./Button";
import Gate from "../assets/Gallery/drinks.jpg";

const faqData = [
  {
    question: "What are your restaurant's hours of operation?",
    answer: "Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM."
  },
  {
    question: "Do I need a reservation to dine?",
    answer: "While walk-ins are welcome, we recommend reservations for dinner and weekends."
  },
  {
    question: "Can I modify my reservation after booking?",
    answer: "Yes, you can modify or cancel your reservation up to 2 hours before your scheduled time."
  },
  {
    question: "Do you offer takeout or delivery services?",
    answer: "Yes, we offer both takeout and delivery through our website and major delivery apps."
  },
  {
    question: "Are there vegetarian or gluten-free available?",
    answer: "Absolutely! We have a dedicated section of our menu for various dietary needs."
  },
  {
    question: "Can I host a private event at your restaurant?",
    answer: "We offer private dining options for groups up to 50 people. Please contact our events manager."
  },
  {
    question: "Do you accommodate requests for celebrations?",
    answer: "Yes, we love being part of your special days. Let us know if it's a birthday or anniversary!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="section-container">
        {/* Header Row */}
        <div className="faq-header-row">
          <h2 className="faq-title">Your Questions Answered, Enjoy a Seamless Experience!</h2>
          <div className="faq-header-info">
            <p className="faq-subtitle">
              Explore our FAQs to find answers to common inquiries, ensuring a smooth and enjoyable dining experience for all our guests.
            </p>
            <button className="see-more-btn">See More</button>
          </div>
        </div>

        {/* FAQ Content Grid */}
        <div className="faq-grid-layout">
          <div className="accordion-wrapper">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                {/* Line 1: Question and Icon */}
                <div className="faq-question-row">
                  <span className="question-text">{item.question}</span>
                  <div className="faq-icon-container">
                    {openIndex === index ? "∨" : "∧"}
                  </div>
                </div>
                
                {openIndex === index && (
                  <div className="faq-answer-row">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-image-column">
            <div className="faq-image-container">
               <img 
                 src={Gate} 
                 alt="Restaurant Interior"
                 className="faq-interior-img"
               />
               <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}