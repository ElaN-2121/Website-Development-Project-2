import React from "react";
import "../styles/MenuCard.css"; 

const MenuCard = ({ name, price, description, image, highlighted }) => {
  const fallbackImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500";
  
  return (
    <div className={`menu-card ${highlighted ? 'card-gold-active' : ''}`}>
      <div className="menu-card-image">
        <img src={image || fallbackImg} alt={name} />
        {/* Floating add button from design */}
        <button className="floating-add-btn">+</button>
      </div>
      <div className="menu-card-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">
          {description || "Succulent Wagyu steak drizzled with aromatic truffle sauce..."}
        </p>
        <div className="menu-card-footer">
          {highlighted && <div className="rating-stars">★★★★★</div>}
          <span className="menu-item-price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;