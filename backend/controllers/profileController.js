const User = require("../models/User");
const getReqData = require("../utils/parseBody");
const bcrypt = require("bcryptjs");

const getProfile = async (req, res) => {
  try {
    const adminId = req.user.id;

    const admin = await User.findById(adminId).select("-password");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(admin));
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ message: "Server error" }));
  }
};
const updateProfile = async (req, res) => {
  try {
    const adminId = req.user.id;
    const body = await getReqData(req);

    const updates = {};

    if (body.email) updates.email = body.email;
    if (body.phoneNumber) updates.phoneNumber = body.phoneNumber;

    // Optional password update
    if (body.password) {
      updates.password = await bcrypt.hash(body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      adminId,
      updates,
      { new: true }
    ).select("-password");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "Admin profile updated",
      user: updatedUser
    }));
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ message: "Server Error", error: err.message }));
  }
};

module.exports = { getProfile, updateProfile };
