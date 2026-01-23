import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", profilePic: "" });
  const [editMode, setEditMode] = useState(false);
  const [previewPic, setPreviewPic] = useState(""); 
  const [selectedFile, setSelectedFile] = useState(null);

  const BACKEND_URL = "http://localhost:5000";

  // Dummy effect for UI testing - replace with fetch logic later
  useEffect(() => {
    // Initial UI state setup
    setPreviewPic(user.profilePic || "https://via.placeholder.com/150");
  }, [user.profilePic]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewPic(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        
        {/* Left Section: User Card */}
        <aside className="profile-sidebar">
          <div className="profile-image-wrapper">
            <img src={previewPic} alt="User" className="profile-avatar" />
            {editMode && (
              <label className="upload-badge">
                <i className="fas fa-camera">📸</i>
                <input type="file" hidden onChange={handleImageChange} />
              </label>
            )}
          </div>
          <h2 className="user-name">{user.name || "User Name"}</h2>
          <p className="user-status">Verified Customer</p>
          
          <div className="sidebar-stats">
            <div className="stat-item">
              <span>05</span>
              <label>Reservations</label>
            </div>
          </div>
        </aside>

        {/* Right Section: Form Details */}
        <main className="profile-details">
          <div className="details-header">
            <h3>Profile Settings</h3>
            <button 
              className={editMode ? "btn-cancel" : "btn-edit"} 
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={user.name} 
                disabled={!editMode} 
                placeholder="Enter your name"
                onChange={(e) => setUser({...user, name: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" value={user.email} disabled placeholder="email@example.com" />
              <small>Email cannot be changed.</small>
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                value={user.phone} 
                disabled={!editMode} 
                placeholder="+1 234 567 890"
                onChange={(e) => setUser({...user, phone: e.target.value})}
              />
            </div>
          </div>

          {editMode && (
            <div className="form-actions">
              <button className="btn-save">Update Profile</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;