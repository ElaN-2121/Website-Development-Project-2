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
            <NavLink key={item.path} to={item.path} end className="admin-nav-link">
              {item.name}
            </NavLink>
          ))}
        </nav>
        <Button text="Back to Home" variant="white" to="src/pages/Home" className="admin-back-to-home" />
        <Button text="Logout" variant="white" onClick={handleLogout} className="admin-logout"/>
        
      </aside>
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
}