import React from 'react';
import '../styles/MenuCard.css';
import Button from './Button'; 
import defaultImage from '../assets/menuAssets/default.png';

const MenuCard = ({ id, name, description, price, image, isAdmin, onEdit, onDelete }) => {
  
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img 
          src={image || defaultImage} 
          alt={name} 
          loading="lazy" 
          onError={handleImageError}
        />
      </div>

      <div className="menu-card-info">
        <div className="menu-card-header">
          <h3 className="menu-item-name">{name}</h3>
        </div>
        
        <p className="menu-item-description">
          {description || "No description available."}
        </p>
        
        <div className="menu-card-footer">
           <span className="menu-item-price">
             {price ? `$${price}` : "Price TBD"}
           </span>
           <div className="rating-stars">★★★★★</div>
        </div>

        {isAdmin && (
          <div className="admin-actions">
            <Button 
              className="edit-btn" 
              onClick={onEdit} 
              text="Edit" 
              variant="default" 
            />
            <Button 
              className="delete-btn" 
              onClick={() => onDelete(id)} 
              text="Delete" 
              variant="default" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;