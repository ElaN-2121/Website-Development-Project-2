import React from 'react';
import '../styles/MenuCard.css';

export default function MenuCard({ name, price, rating, image, description }) {
  const renderStars = (count) => {
    const validCount = Math.floor(count) || 0;
    return "★".repeat(validCount) + "☆".repeat(5 - validCount);
  };

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        {/* The image prop passed from menuItems in Menu.jsx */}
        <img src={image} alt={name} />
      </div>
      <div className="menu-card-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-card-footer">
          <div className="rating-stars">{renderStars(rating)}</div>
          <span className="menu-item-price">{price}</span>
        </div>
      </div>
    </div>
  );
}
