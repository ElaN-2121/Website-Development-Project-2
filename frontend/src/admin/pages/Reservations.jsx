import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs"; 
import "../../styles/ReservationAdmin.css";


export default function Reservations() {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null); 

  const fetchReservations = async () => {
    try {
      const res = await api.get("/reservations");
      setBookings(res.data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchReservations(); }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await api.put("/reservations/status", { id, status: newStatus });
      setEditingId(null);
      fetchReservations();
    } catch (err) { alert("Failed to update"); }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this reservation?")) {
      try {
        await api.delete(`/reservations/${id}`);
        fetchReservations();
      } catch (err) { alert("Delete failed"); }
    }
  };

  const parseRequests = (requestString) => {
    if (!requestString) return { dietary: "None", notes: "None" };
    const parts = requestString.split(" | ");
    return {
      dietary: parts[0]?.replace("Dietary: ", "") || "None",
      notes: parts[1]?.replace("Notes: ", "") || "None"
    };
  };

  return (
    <div style={{ color: "white", padding: "40px", position: "relative" }}>
      <h1 style={{ marginBottom: "30px" }}>Table Reservations</h1>
      
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ color: "#efb40e", borderBottom: "2px solid #efb40e", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Details</th>
            <th>Actions</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: "15px" }}>{b.name}</td>
              <td>{new Date(b.date).toLocaleDateString()}</td>
              <td style={{ 
                fontWeight: "bold", 
                color: b.status === "Approved" ? "#4caf50" : b.status === "Disapproved" ? "#f44336" : "#efb40e" 
              }}>
                {b.status}
              </td>
              <td>
                <BsThreeDotsVertical 
                  style={{ cursor: "pointer", fontSize: "1.2rem" }} 
                  onClick={() => setSelectedBooking(b)}
                />
              </td>
              <td>
                {editingId === b._id ? (
                  <div style={{ display: "flex", gap: "5px", transform: "scale(0.8)", transformOrigin: "left" }}>
                    <Button text="Approve" variant="yellow" onClick={() => handleStatusUpdate(b._id, "Approved")} />
                    <Button text="Disapprove" variant="white" onClick={() => handleStatusUpdate(b._id, "Disapproved")} />
                  </div>
                ) : (
                  <Button text="Change" variant="white" onClick={() => setEditingId(b._id)} style={{ transform: "scale(0.8)" }} />
                )}
              </td>
              <td>
                <FaTrash onClick={() => handleDelete(b._id)} style={{ cursor: "pointer", color: "#f44336" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* DETAIL MODAL */}
      {selectedBooking && (
        <div style={modalOverlayStyle} onClick={() => setSelectedBooking(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "#efb40e", marginBottom: "20px", textAlign: "center" }}>Reservation Details</h2>
            
            <div style={detailRowStyle}>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Customer:</strong> {selectedBooking.name}</p>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Email:</strong> {selectedBooking.email}</p>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Date:</strong> {new Date(selectedBooking.date).toLocaleDateString()}</p>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Time:</strong> {selectedBooking.time}</p>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Guests:</strong> {selectedBooking.guests}</p>
              <p style={whiteTextStyle}><strong style={whiteTextStyle}>Special Requirements:</strong> {parseRequests(selectedBooking.specialRequest).dietary}</p>
            </div>

            <p style={{ marginTop: "15px", fontWeight: "bold", color: "#ffffff" }}>Additional Notes:</p>
            <div style={notesBoxStyle}>
              {parseRequests(selectedBooking.specialRequest).notes}
            </div>

            {/* CENTERED BUTTON CONTAINER */}
            <div style={buttonContainerStyle}>
              <Button text="Close" variant="yellow" onClick={() => setSelectedBooking(null)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// STYLES OBJECTS
const whiteTextStyle = { color: "#ffffff", margin: "5px 0" };

const modalOverlayStyle = {
  position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: "#1e1e1e", padding: "30px", borderRadius: "15px", 
  width: "450px", border: "1px solid #efb40e"
};

const detailRowStyle = {
  display: "flex", flexDirection: "column", gap: "2px", lineHeight: "1.6"
};

const notesBoxStyle = {
  backgroundColor: "#2a2a2a", padding: "15px", borderRadius: "8px", 
  marginTop: "8px", fontSize: "0.95rem", color: "#ffffff", 
  border: "1px solid #444", minHeight: "60px"
};

const buttonContainerStyle = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center", // This centers your custom button
  width: "100%"
};