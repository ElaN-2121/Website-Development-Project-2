require("dotenv").config();
const http = require("http");
const connectDB = require("./config/db");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menuRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

// Connect to MongoDB
connectDB();

// CORS helper
const setCorsHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  // Waterfall Routing System
  // Each route returns true if handled, false if not.
  if (await authRoutes(req, res)) return; 
  if (await profileRoutes(req, res)) return; 
  if (await adminRoutes(req, res)) return; 
  if (await menuRoutes(req, res)) return;
  if (await reservationRoutes(req, res)) return;
  if (await contactRoutes(req, res)) return;
  if (await testimonialRoutes(req, res)) return;
  if (await galleryRoutes(req, res)) return;

  // Default fallback if no route matches
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));