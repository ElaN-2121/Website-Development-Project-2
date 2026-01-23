import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import "../../styles/AdminMenu.css";
import "../../styles/MenuForm.css";

export default function MenuForm({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Main Course",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ 
        name: "", 
        price: "", 
        category: "Main Course", 
        description: "", 
        image: null 
      });
    }
  }, [initialData, isOpen]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialData ? "Edit Menu Item" : "Add New Item"}</h2>
        
        {/* NEW GRID WRAPPER TO MAKE IT SHORTER */}
        <div className="admin-form-container">
          
          <div className="form-group full-width">
            <label>Food Name</label>
            <input 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          <div className="form-group">
            <label>Price ($)</label>
            <input 
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})} 
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select 
              value={formData.category} 
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option>Main Course</option>
              <option>Salads</option>
              <option>Ethiopian Dishes</option>
              <option>Desserts</option>
              <option>Beverages</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>

          <div className="form-group full-width">
            <label>Upload Image</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
            {initialData && typeof formData.image === 'string' && (
              <span className="current-img-note">File: {formData.image.split('/').pop()}</span>
            )}
          </div>

        </div>

        <div className="form-actions">
          <Button text="Save" variant="yellow" onClick={() => onSubmit(formData)} />
          <Button text="Cancel" variant="white" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}