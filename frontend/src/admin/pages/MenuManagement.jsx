import React, { useState, useEffect } from "react";
import MenuCard from "../../components/MenuCard";
import Button from "../../components/Button";
import MenuForm from "../component/MenuForm"; // Ensure this folder is 'component' not 'components'
import * as menuApi from "../services/menuApi";
import "../../styles/AdminMenu.css";
import "../../styles/Menu.css";

export default function MenuManagement() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => { loadMenu(); }, []);

  const loadMenu = async () => {
    try {
      setLoading(true);
      const data = await menuApi.fetchMenu();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load menu", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingItem) {
        await menuApi.updateMenuItem(editingItem._id, formData);
      } else {
        await menuApi.addMenuItem(formData);
      }
      setModalOpen(false);
      loadMenu();
    } catch (err) {
      alert("Error saving menu item. Check if your backend is running!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this item permanently?")) {
      try {
        await menuApi.deleteMenuItem(id);
        loadMenu();
      } catch (err) {
        alert("Delete failed.");
      }
    }
  };

  if (loading) return <div style={{color: 'white', padding: '20px'}}>Loading Menu...</div>;

  return (
    <div className="admin-menu-page">
      <div className="admin-menu-header">
        <h1 style={{color: '#f39c12'}}>Menu Management</h1>
        <Button text="Add New Item" variant="yellow" onClick={() => {setEditingItem(null); setModalOpen(true);}} />
      </div>

      <div className="full-menu-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <MenuCard 
              key={item._id} 
              {...item} 
              id={item._id}
              isAdmin={true} 
              onEdit={() => {setEditingItem(item); setModalOpen(true);}} 
              onDelete={handleDelete} 
            />
          ))
        ) : (
          <p style={{color: 'white'}}>No items found. Click 'Add New Item' to begin!</p>
        )}
      </div>

      <MenuForm 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        initialData={editingItem} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}