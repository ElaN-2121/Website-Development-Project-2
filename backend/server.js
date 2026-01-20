require("dotenv").config();
const http = require("http");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Connect to MongoDB
connectDB();

// CORS helper
const setCorsHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

// server.js
const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  // Await the auth routes
  const handled = await authRoutes(req, res); // Added 'await'
  if (handled) return;
  if (await profileRoutes(req, res)) return; // Added 'await'
  if (await adminRoutes(req, res)) return; // Added 'await'

  // Default fallback
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));

});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
