import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FaTrash } from "react-icons/fa";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this message permanently?")) {
      try {
        await api.delete(`/contact/${id}`);
        fetchMessages(); // Refresh the list
      } catch (err) {
        alert("Delete failed");
      }
    }
  };

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Contact Messages</h1>
      
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#1a1a1a", borderRadius: "10px", overflow: "hidden" }}>
        <thead>
          <tr style={{ color: "#efb40e", borderBottom: "2px solid #efb40e", textAlign: "left" }}>
            <th style={{ padding: "15px" }}>Customer</th>
            <th>Email</th>
            <th>Message</th>
            <th style={{ textAlign: "center" }}>Manage</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((m) => (
            <tr key={m._id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: "15px" }}>{m.name}</td>
              <td>{m.email}</td>
              <td style={{ maxWidth: "400px", padding: "10px 0" }}>{m.message}</td>
              <td style={{ textAlign: "center" }}>
                <FaTrash 
                  onClick={() => handleDelete(m._id)} 
                  style={{ cursor: "pointer", color: "#f44336", fontSize: "1.2rem" }} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {messages.length === 0 && <p style={{ marginTop: "20px", textAlign: "center" }}>No messages found.</p>}
    </div>
  );
}