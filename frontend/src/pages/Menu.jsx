// src/pages/Menu.jsx
import React, { useState } from "react";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button"; //
import FooterTwo from "../components/FooterTwo";

const categories = ["Appetizers", "Soups & Salads", "Main Course", "Side Dishes", "Desserts", "Beverages"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Appetizers");

  return (
    <div className="menu-page-wrapper">
      {/* HERO SECTION - Uses Light Tint */}
      <section className="menu-hero">
        <div className="section-container hero-flex">
          <div className="hero-text-content">
            <h1 className="menu-hero-title">Discover, Select, Enjoy – Your Perfect Choice Awaits</h1>
            <p className="menu-hero-desc">Explore our diverse menu, carefully curated for every taste. Select your favorite dishes and indulge in a delightful experience.</p>
            <div className="menu-hero-btns">
              {/* Using your Button component */}
              <Button text="View Menu" variant="menu" />
              <Button text="Explore More" variant="yellow" />
            </div>
          </div>
          <div className="hero-visual">
             {/*  */}
             <div className="quality-badge">
                <span>100% High Quality <br/><small>best quality raw materials</small></span>
             </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION - Signature & Full Menu */}
      <div className="menu-dark-container">
        <section className="menu-section">
          <div className="section-container">
            <div className="section-header-row">
              <h2 className="section-title text-white">Our Signature Menu</h2>
              <div className="slider-nav">
                <button className="nav-arrow">←</button>
                <button className="nav-arrow">→</button>
              </div>
            </div>
            
            <div className="menu-grid">
              {/* Mapping Signature Data */}
              <MenuCard name="Ocean Symphony Risotto" price="$12,00" highlighted={true} />
              <MenuCard name="Truffle-infused Wagyu" price="$25,00" />
            </div>

            <div className="full-menu-header">
               <h2 className="mid-title">Savor the Flavor, Delight in Every Bite!</h2>
               <div className="category-tabs">
                  {categories.map(cat => (
                    <button 
                      key={cat} 
                      className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            <div className="menu-grid">
               {/* Full Menu Items */}
               <MenuCard name="Golden Crispy Duck" price="$30,00" />
               <MenuCard name="Ocean Symphony Risotto" price="$12,00" highlighted={true} />
            </div>
          </div>
        </section>
      </div>
      <FAQ />
    </div>
  );
}