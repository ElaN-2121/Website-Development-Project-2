const ContactMessage = require("../models/ContactMessage");
const getReqData = require("../utils/parseBody");

const getContacts = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 }); // Newest first
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(messages));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

const createContactMessage = async (req, res) => {
  try {
    const body = await getReqData(req);
    const message = await ContactMessage.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

// ADD THIS DELETE FUNCTION
const deleteContact = async (req, res) => {
  try {
    const id = req.url.split("/")[3]; // Gets ID from /api/contact/ID
    await ContactMessage.findByIdAndDelete(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Message deleted" }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getContacts, createContactMessage, deleteContact };