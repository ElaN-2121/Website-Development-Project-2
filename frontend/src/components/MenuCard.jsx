import React from 'react';
import '../styles/MenuCard.css';
import Button from './Button';

export default function MenuCard({ id, name, price, rating, image, description, isAdmin, onEdit, onDelete }) {
  const renderStars = (count) => {
    const validCount = Math.floor(count) || 0;
    return "★".repeat(validCount) + "☆".repeat(5 - validCount);
  };

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="menu-card-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-card-footer">
          <div className="rating-stars">{renderStars(rating)}</div>
          <span className="menu-item-price">{price}</span>
        </div>
        
        {/* Admin Action Buttons */}
        {isAdmin && (
          <div className="admin-card-actions" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <Button 
              text="Edit" 
              variant="yellow" 
              className="btn-small" 
              onClick={() => onEdit({ id, name, price, image, description })} 
            />
            <Button 
              text="Delete" 
              variant="white" 
              className="btn-small" 
              onClick={() => onDelete(id)} 
            />
          </div>
        )}
      </div>
    </div>
  );
}