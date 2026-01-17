import React, { useState } from "react";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";
import FooterTwo from "../components/FooterTwo";
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

function MenuHero() {
  return (
    <section className="menu-hero">
      {/* Decorative Botanical Sketches */}
      <div className="sketch-left"></div>
      <div className="sketch-right"></div>

      <div className="hero-container">
        <h1 className="hero-title">
          Discover, Select, Enjoy – Your <br /> Perfect Choice Awaits
        </h1>

        <div className="hero-main-content">
          {/* Left Side: Quality Badge */}
          <div className="badge-wrapper">
            <div className="quality-card">
              <div className="badge-icon-bg">
                <span className="icon">🍲</span>
              </div>
              <p>
                <strong>100% Organic Foods</strong>
              </p>
              <small>A meal you will never forget</small>
            </div>
          </div>

          {/* Center: Main Dish */}
          <div className="hero-dish-container">
            <img src={Tibs} alt="Fresh Salad" className="main-hero-img" />
          </div>

          {/* Right Side: Description & Buttons */}
          <div className="hero-info-side">
            <p className="hero-description">
              Explore our diverse menu, carefully curated for every taste.
              Select your favorite dishes and indulge in a delightful
              experience.
            </p>
            <div className="hero-action-btns">
              <Button
                text="View Menu"
                variant="yellow"
                onClick={() => {
                  document
                    .getElementById("full-menu")
                    ?.scrollIntoView({ behavior: "smooth" });
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

const signatureData = [
  {
    id: 1,
    name: "Tibs Delight",
    description:
      "Ethiopian tibs is a spicy stir‑fried meat dish, cooked with onions, peppers, and berbere, served with injera.",
    price: "$12.00",
    rating: 5,
    image: Tibs,
  },
  {
    id: 2,
    name: "Beyaynetu",
    description:
      "Beyaynetu is a traditional Ethiopian platter of assorted vegetarian dishes—lentils, chickpeas, greens, and stews—served on injera.",
    price: "$10.00",
    rating: 4.5,
    image: Beyaynetu,
    isDefaultActive: false,
  },
  {
    id: 3,
    name: "Ocean Symphony Risotto",
    description:
      " Ocean Symphony Risotto is a saffron‑kissed seafood risotto that celebrates the Mediterranean’s richness in one elegant dish.",
    price: "$8.00",
    image: OceanSymphony,
  },
  {
    id: 4,
    name: "Velvet Chocolate Lava Cake",
    description:
      "Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.",
    price: "$12.00",
    image: ChocolateLava,
  },
];

function SignatureMenu() {
  return (
    <section className="signature-section">
      <div className="section-container">
        <div className="signature-header">
          <div className="header-text">
            <h2 className="signature-title">Our Signature Menu</h2>
            <p className="signature-subtitle">
              Experience our signature menu, a masterpiece of flavors crafted
              with <br />
              premium ingredients, culinary expertise, and an artistic touch to
              delight.
            </p>
          </div>
          <div className="slider-controls">
            <button className="control-btn">←</button>
            <button className="control-btn">→</button>
          </div>
        </div>

        <div className="signature-grid">
          {signatureData.map((item) => (
            <div
              key={item.id}
              className={`sig-card ${item.isDefaultActive ? "active-gold" : ""}`}
            >
              <div className="sig-image-box">
                <img src={item.image} alt={item.name} className="sig-img" />
              </div>
              <div className="sig-content">
                <h3 className="sig-name">{item.name}</h3>
                <p className="sig-desc">{item.description}</p>
                <div className="sig-footer">
                  {item.rating && <div className="stars">★★★★★</div>}
                  <span className="sig-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  "All",
  "Main Course",
  "Salads",
  "Ethiopian Dishes",
  "Desserts",
  "Beverages",
];

// Sample Data mirroring the UI
// src/pages/Menu.jsx

const menuItems = [
  {
    id: 1,
    name: "Amarula",
    price: "$100.00",
    category: "Beverages",
    rating: 3.5,
    image: Amarula,
    description:
      "Amarula is a smooth South African cream liqueur made from the exotic marula fruit, blended with fresh cream and spirits.",
  },
  {
    id: 2,
    name: "ChickenSalad",
    price: "$40.00",
    category: "Main Course",
    rating: 3.5,
    image: ChickenSalad,
    description:
      "Chicken salad is a light, refreshing dish made with tender chicken, crisp vegetables, and creamy dressing.",
  },
  {
    id: 3,
    name: "Beyaynetu",
    price: "$80.00",
    category: "Ethiopian Dishes",
    rating: 5,
    image: Beyaynetu,
    description:
      "Assorted vegetarian dishes—lentils, chickpeas, and greens—served on injera.",
  },
  {
    id: 4,
    name: "BlackForest",
    price: "$30.00",
    category: "Desserts",
    rating: 5,
    image: BlackForest,
    description:
      "Black Forest cake is a decadent German dessert made with layers of chocolate sponge, whipped cream, and cherries.",
  },
  {
    id: 5,
    name: "Tibs Delight",
    price: "$12.00",
    category: "Ethiopian Dishes",
    rating: 5,
    image: Tibs,
    description:
      "Ethiopian tibs is a spicy stir‑fried meat dish, cooked with onions, peppers, and berbere, served with injera.",
  },
  {
    id: 6,
    name: "Salad",
    price: "$50.00",
    category: "Salads",
    rating: 4,
    image: Salad,
    description:
      "Creamy saffron-infused risotto with fresh lobster, scallops, and prawns.",
  },
  {
    id: 7,
    name: "Cocktail",
    price: "$50.00",
    category: "Drinks",
    rating: 5,
    image: Cocktail,
    description:
      "A cocktail is a mixed alcoholic drink combining spirits with juices, syrups, or other flavorings",
  },
  {
    id: 8,
    name: "Velvet Chocolate Lava Cake",
    price: "$12.00",
    category: "Desserts",
    rating: 5,
    image: ChocolateLava,
    description:
      "Rich chocolate cake with a molten center, served with vanilla bean ice cream.",
  },
  {
    id: 9,
    name: "Fish Cotelete",
    price: "$50.00",
    category: "Main Course",
    rating: 3,
    image: Fish,
    description:
      "Fish cotelete is a savory Ethiopian dish made from minced fish mixed with spices, shaped into patties, and pan‑fried until golden.",
  },
  {
    id: 10,
    name: "Doro Wot",
    price: "$150.00",
    category: "Ethiopian Dishes",
    rating: 5,
    image: Doro,
    description:
      "Doro Wot is a rich Ethiopian chicken stew simmered in spicy berbere sauce and served with injera.",
  },
  {
    id: 11,
    name: "Soufflé",
    price: "$35.00",
    category: "Dessert",
    rating: 3,
    image: Sufle,
    description:
      "Soufflé is a light, airy French baked dish made with eggs, flavored sweet or savory, that rises beautifully",
  },
  {
    id: 12,
    name: "Mohjhito",
    price: "$30.00",
    category: "Beverages",
    rating: 4.5,
    image: Mojhito,
    description:
      "Mojito is a refreshing Cuban cocktail made with rum, lime, mint, sugar, and soda water. ",
  },
  {
    id: 13,
    name: "Kitfo",
    price: "$50.00",
    category: "Ethiopian Dishes",
    rating: 5,
    image: Kitfo,
    description:
      "Kitfo is an Ethiopian dish of minced raw beef seasoned with spiced butter and chili.",
  },
  {
    id: 14,
    name: "Tiramisu",
    price: "$150.00",
    category: "Desserts",
    rating: 5,
    image: Tiramisu,
    description:
      "Tiramisu is a classic Italian dessert made with layers of coffee‑soaked ladyfingers, mascarpone cream, and cocoa.",
  },
  {
    id: 15,
    name: "Ocean Symphony Risotto",
    price: "$35.00",
    category: "Main Course",
    rating: 3,
    image: OceanSymphony,
    description:
      "Ocean Symphony Risotto is a creamy seafood risotto with saffron.",
  },
  {
    id: 16,
    name: "Tej",
    price: "$80.00",
    category: "Beverages",
    rating: 4.5,
    image: Tej,
    description:
      "Tej is a traditional Ethiopian honey wine, mildly sweet and often spiced with gesho leaves.",
  },
];

function FullMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="full-menu-section" id="full-menu">
      <div className="section-container">
        <div className="full-menu-header">
          <h2 className="full-menu-title">
            Savor the Flavor, Delight <br /> in Every Bite!
          </h2>
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="full-menu-grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Menu() {
  return (
    <div className="menu-page-wrapper">
      <MenuHero />
      <div className="menu-dark-container">
        <SignatureMenu />
        <FullMenu />
      </div>
      <FAQ />
    </div>
  );
}
