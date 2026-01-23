import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";
import "../../styles/AdminLayout.css";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Menu Management", path: "/admin/menu" },
    { name: "Reservations", path: "/admin/reservations" },
    { name: "Messages", path: "/admin/messages" },
  ];

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              end 
              className="admin-nav-link"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Moved buttons inside the nav and removed marginTop: auto */}
          <div className="admin-sidebar-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <Button 
              text="Back to Home" 
              variant="yellow" 
              to="/" 
              className="admin-sidebar-btn" 
              style={{ width: '100%' }}
            />
            
            <Button 
              text="Logout" 
              variant="yellow" 
              onClick={handleLogout} 
              className="admin-sidebar-btn"
              style={{ width: '100%' }}
            />
          </div>
        </nav>
      </aside>

      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
}