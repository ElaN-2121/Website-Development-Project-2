const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Note: We removed 'require("cors")' because we handle it manually below
const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const server = http.createServer(async (req, res) => {
  // 1. Handle CORS Manually (Permissions for Frontend to talk to Backend)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // 2. Handle Pre-flight requests (Browser checks permissions first)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // 3. Route Handlers
  // If a route returns 'true', it means it handled the request.
  if (await authRoutes(req, res)) return;
  if (await adminRoutes(req, res)) return;
  if (await menuRoutes(req, res)) return;

  // 4. 404 Fallback
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));