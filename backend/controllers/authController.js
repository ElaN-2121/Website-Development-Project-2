// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register User
const registerUser = async (req, res, getReqData) => {
  try {
    const body = await getReqData(req);
    console.log("Request Body:", body); // Debug log

    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Name, email, and password are required" }));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "User already exists" }));
    }

    const user = await User.create({ name, email, password, role });

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role)
    }));

  } catch (err) {
    console.error("Register Error:", err); // Debug log
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

// Login User
const loginUser = async (req, res, getReqData) => {
  try {
    const body = await getReqData(req);
    console.log("Login Body:", body); // Debug log

    const { email, password } = body;

    if (!email || !password) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Email and password are required" }));
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid credentials" }));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid credentials" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role)
    }));

  } catch (err) {
    console.error("Login Error:", err); // Debug log
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { registerUser, loginUser };
