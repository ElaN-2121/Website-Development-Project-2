// routes/authRoutes.js
const { registerUser, loginUser } = require("../controllers/authController");
const getReqData = require("../utils/parseBody");

const authRoutes = async (req, res) => {
  if (req.url === "/api/auth/register" && req.method === "POST") {
    await registerUser(req, res, getReqData);
    return true; // Correctly tell server.js to stop
  } 
  
  if (req.url === "/api/auth/login" && req.method === "POST") {
    await loginUser(req, res, getReqData);
    return true; // Correctly tell server.js to stop
  }

  return false; 
};

module.exports = authRoutes;