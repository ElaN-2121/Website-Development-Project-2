const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" }
  },
  { timestamps: true }
);


userSchema.pre("save", async function () { 
  if (!this.isModified("password")) return;

  try {
    // Hash the password and assign it back to the document
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    // If an error occurs, throwing it allows Mongoose to catch it
    throw err;
  }
});

module.exports = mongoose.model("User", userSchema);