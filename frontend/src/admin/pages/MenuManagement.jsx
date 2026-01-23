import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard";
import MenuForm from "../component/MenuForm";
import Default from "../../assets/menuAssets/default.png";
import { fetchMenu, addMenuItem, updateMenuItem, deleteMenuItem } from "../services/menuApi";
import Button from "../../components/Button";

export default function MenuManagement() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      setLoading(true);
      const data = await fetchMenu();
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
      // We MUST use FormData to send files over HTTP
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("description", formData.description);
      
      // Check if image is a new file or an existing URL/path
      if (formData.image instanceof File) {
        data.append("image", formData.image);
      } else if (formData.image) {
        data.append("image", formData.image);
      }

      if (editingItem) {
        await updateMenuItem(editingItem._id, data);
      } else {
        await addMenuItem(data);
      }
      
      setModalOpen(false);
      loadMenu();
    } catch (err) {
      console.error("Save Error:", err);
      alert("Error saving menu item. Ensure the backend is configured for FormData.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this item permanently?")) {
      try {
        await deleteMenuItem(id);
        loadMenu();
      } catch (err) {
        alert("Delete failed.");
      }
    }
  };

  if (loading) return <div style={{ color: "white", padding: "20px" }}>Loading Menu...</div>;

  return (
    <div className="admin-menu-page">
      <div className="admin-menu-header">
        <h1 style={{ color: "#f39c12" }}>Menu Management</h1>
        <Button
          text="Add New Item"
          variant="yellow"
          onClick={() => {
            setEditingItem(null);
            setModalOpen(true);
          }}
        />
      </div>

      <div className="full-menu-grid">
        {items.map((item) => (
          <MenuCard
            key={item._id}
            {...item}
            id={item._id}
            image={item.image ? (item.image.startsWith('uploads') ? `http://localhost:5000/${item.image}` : item.image) : Default}
            isAdmin={true}
            onEdit={() => {
              setEditingItem(item);
              setModalOpen(true);
            }}
            onDelete={handleDelete}
          />
        ))}
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