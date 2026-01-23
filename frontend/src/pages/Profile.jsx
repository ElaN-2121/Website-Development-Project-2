import React, { useState } from "react";
import "../styles/Profile.css";
import Button from "../components/Button";
import defaultAvatar from "../assets/customers/Yonas Birhan.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // User state to handle updates
  const [user, setUser] = useState({
    name: "Natnael Haile",
    email: "natnael.h@example.com",
    phone: "+251 911 22 33 44",
    address: "Bole Atlas, Addis Ababa",
    memberSince: "May 2024",
    points: 450,
  });

  // Temporary state for the form while editing
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...formData }); // Commit changes to the main user state
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({ ...user }); // Revert changes to original user data
    setIsEditing(false);
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        
        {/* LEFT COLUMN: STATIC INFO */}
        <aside className="profile-sidebar">
          <div className="profile-card user-main-info">
            <div className="avatar-wrapper">
              <img src={defaultAvatar} alt="Profile" className="profile-avatar" />
              <div className="avatar-overlay">
                 <span className="camera-icon">📷</span>
              </div>
            </div>
            <h2 className="user-name">{user.name}</h2>
            <p className="user-membership">Gold Member • {user.points} Points</p>
            <hr className="divider" />
          </div>

          <nav className="profile-nav">
            <button className="nav-link logout">Sign Out</button>
          </nav>
        </aside>

        {/* RIGHT COLUMN: EDITABLE CONTENT */}
        <main className="profile-content">
          <section className="profile-card">
            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ color: "#FFD700", margin: 0 }}>Account Details</h3>
              {!isEditing ? (
                <Button text="Edit Profile" variant="yellow" onClick={() => setIsEditing(true)} />
              ) : (
                <Button text="Cancel" variant="white" onClick={handleCancel} />
              )}
            </div>

            

            <form className="profile-form" onSubmit={handleSave}>
              <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                
                {/* Full Name */}
                <div className="input-group">
                  <label>Full Name</label>
                  {isEditing ? (
                    <input type="text" value={formData.name} onChange={(e) => handleInputChange(e, "name")} className="edit-input" />
                  ) : (
                    <p className="view-text">{user.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="input-group">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input type="email" value={formData.email} onChange={(e) => handleInputChange(e, "email")} className="edit-input" />
                  ) : (
                    <p className="view-text">{user.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="input-group">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input type="text" value={formData.phone} onChange={(e) => handleInputChange(e, "phone")} className="edit-input" />
                  ) : (
                    <p className="view-text">{user.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div className="input-group">
                  <label>Primary Address</label>
                  {isEditing ? (
                    <input type="text" value={formData.address} onChange={(e) => handleInputChange(e, "address")} className="edit-input" />
                  ) : (
                    <p className="view-text">{user.address}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="form-actions" style={{ marginTop: "30px" }}>
                  <Button type="submit" text="Save Changes" variant="yellow" style={{ width: "100%" }} />
                </div>
              )}
            </form>
          </section>
        </main>

      </div>
    </div>
  );
};

export default Profile;