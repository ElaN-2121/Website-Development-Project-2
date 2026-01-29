import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // 1️⃣ Fetch Admin Data on Load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.admin);
      } catch (err) {
        console.error("Error fetching profile", err);
        setMessage("Failed to load profile");
      }
    };
    fetchProfile();
  }, [token]);

  // 2️⃣ Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateData = { name: user.name, email: user.email };
    if (user.password) updateData.password = user.password;

    try {
      const res = await axios.put(
        "http://localhost:5000/api/admin/profile",
        updateData,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setMessage(res.data.message);
      setEditMode(false);
      setUser({ ...user, password: "" });
    } catch (err) {
      console.error(err);
      setMessage("Update failed");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <main className="profile-content">
          <div className="profile-header">
            <h2>Admin Settings</h2>
            <button className="btn-edit" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Cancel" : "Edit Credentials"}
            </button>
          </div>

          {message && <p className="status-msg">{message}</p>}

          <form onSubmit={handleUpdate} className="form-grid">
            <div className="input-group">
              <label>Admin Name</label>
              <input
                type="text"
                value={user.name}
                disabled={!editMode}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={user.email}
                disabled={!editMode}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {editMode && (
              <div className="input-group">
                <label>New Password (leave blank to keep current)</label>
                <input
                  type="password"
                  placeholder="********"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
            )}

            {editMode && (
              <div className="form-actions">
                <button type="submit" className="btn-save">
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;
