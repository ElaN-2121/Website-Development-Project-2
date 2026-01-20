const { getTestimonials, createTestimonial } = require("../controllers/testimonialController");
const { adminMiddleware } = require("../middleware/adminMiddleware");

const testimonialRoutes = async (req, res) => {
  if (req.url === "/api/testimonials" && req.method === "GET") {
    await getTestimonials(req, res);
    return true;
  }
  if (req.url === "/api/testimonials" && req.method === "POST") {
    if (!adminMiddleware(req, res)) return true;
    await createTestimonial(req, res);
    return true;
  }
  return false;
};

module.exports = testimonialRoutes;
