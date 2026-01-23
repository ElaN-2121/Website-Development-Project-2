import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";

// Import Local Assets
import Tibs from "../assets/menuAssets/tibs.png";
import Beyaynetu from "../assets/menuAssets/beyaynetu.webp";
import OceanSymphony from "../assets/menuAssets/ocean symphony.png";
import ChocolateLava from "../assets/menuAssets/choco cake.png";
import Amarula from "../assets/menuAssets/amarula.png";
import BlackForest from "../assets/menuAssets/black F.png";
import ChickenSalad from "../assets/menuAssets/chicken salad.png";
import Cocktail from "../assets/menuAssets/Coc.png";
import Doro from "../assets/menuAssets/doro.png";
import Salad from "../assets/menuAssets/salad.png";
import Fish from "../assets/menuAssets/fish cot.png";
import Kitfo from "../assets/menuAssets/kitfo.jpg";
import Mojhito from "../assets/menuAssets/mojhito.png";
import Sufle from "../assets/menuAssets/suf.png";
import Tej from "../assets/menuAssets/Tej.webp";
import Tiramisu from "../assets/menuAssets/Tiramisu.png";
import Default from "../assets/menuAssets/default.png";

const imageMap = {
  "Amarula": Amarula, 
  "Chicken Salad": ChickenSalad,
  "Beyaynetu": Beyaynetu,
  "BlackForest": BlackForest, 
  "Tibs Delight": Tibs, 
  "Salad": Salad,
  "Cocktail": Cocktail, 
  "Velvet Chocolate Lava Cake": ChocolateLava,
  "Fish Cotelete": Fish, 
  "Doro Wot": Doro, 
  "Soufflé": Sufle,
  "Mohjhito": Mojhito, 
  "Kitfo": Kitfo, 
  "Tiramisu": Tiramisu,
  "Ocean Symphony Risotto": OceanSymphony, 
  "Tej": Tej
};

const categories = ["All", "Main Course", "Salads", "Ethiopian Dishes", "Desserts", "Beverages"];

function MenuHero() {
  return (
    <section className="menu-hero">
      <div className="sketch-left"></div>
      <div className="sketch-right"></div>

      <div className="hero-container">
        <h1 className="hero-title">
          Discover, Select, Enjoy – Your <br /> Perfect Choice Awaits
        </h1>

        <div className="hero-main-content">
          <div className="badge-wrapper">
            <div className="quality-card">
              <div className="badge-icon-bg">
                <span className="icon">🍲</span>
              </div>
              <p><strong>100% Organic Foods</strong></p>
              <small>A meal you will never forget</small>
            </div>
          </div>

          <div className="hero-dish-container">
            <img src={Tibs} alt="Main Dish" className="main-hero-img" />
          </div>

          <div className="hero-info-side">
            <p className="hero-description">
              Explore our diverse menu, carefully curated for every taste.
              Select your favorite dishes and indulge in a delightful experience.
            </p>
            <div className="hero-action-btns">
              <Button
                text="View Menu"
                variant="yellow"
                onClick={() => {
                  document.getElementById("full-menu")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <Button text="Explore More" variant="white" to="/gallery"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dbItems, setDbItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu")
      .then(res => setDbItems(res.data))
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  const filteredItems = activeCategory === "All" 
    ? dbItems 
    : dbItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page-wrapper">
      <MenuHero />

      <div className="menu-dark-container">
        <section className="full-menu-section" id="full-menu">
          <div className="section-container">
            <h2 className="full-menu-title">Savor the Flavor, Delight in Every Bite!</h2>
            
            <div className="category-filter-bar">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-tab ${activeCategory === cat ? "active" : ""}`} 
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="full-menu-grid">
              {filteredItems.map((item) => {
                let displayImage;

                if (imageMap[item.name]) {
                  displayImage = imageMap[item.name];
                } else if (item.image && (item.image.startsWith("http") || item.image.startsWith("data:"))) {
                  displayImage = item.image;
                } else if (item.image) {
                  displayImage = `http://localhost:5000/${item.image}`;
                } else {
                  displayImage = Default;
                }

                return (
                  <MenuCard 
                    key={item._id} 
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={displayImage} 
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}