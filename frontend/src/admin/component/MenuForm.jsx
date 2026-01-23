import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import "../../styles/AdminMenu.css";

export default function MenuForm({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Main Course",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
    else setFormData({ name: "", price: "", category: "Main Course", description: "", image: "" });
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialData ? "Edit Menu Item" : "Add New Item"}</h2>
        
        <div className="form-group">
          <label>Food Name</label>
          <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Price (with $)</label>
          <input value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
            <option>Main Course</option>
            <option>Salads</option>
            <option>Ethiopian Dishes</option>
            <option>Desserts</option>
            <option>Beverages</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
        </div>

        <div className="form-actions">
          <Button text="Save Changes" variant="yellow" onClick={() => onSubmit(formData)} />
          <Button text="Cancel" variant="white" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}