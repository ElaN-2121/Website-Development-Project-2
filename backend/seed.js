const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MenuItem = require("./models/MenuItem"); // Ensure this path is correct

dotenv.config();

const menuItems = [
  { name: "Amarula", price: "100.00", category: "Beverages", rating: 3.5, description: "Amarula is a smooth South African cream liqueur made from the exotic marula fruit." },
  { name: "ChickenSalad", price: "40.00", category: "Main Course", rating: 3.5, description: "Chicken salad is a light, refreshing dish made with tender chicken and crisp vegetables." },
  { name: "Beyaynetu", price: "80.00", category: "Ethiopian Dishes", rating: 5, description: "Assorted vegetarian dishes—lentils, chickpeas, and greens—served on injera." },
  { name: "BlackForest", price: "30.00", category: "Desserts", rating: 5, description: "Black Forest cake is a decadent German dessert made with layers of chocolate sponge." },
  { name: "Tibs Delight", price: "12.00", category: "Ethiopian Dishes", rating: 5, description: "Ethiopian tibs is a spicy stir‑fried meat dish served with injera." },
  { name: "Salad", price: "50.00", category: "Salads", rating: 4, description: "Creamy saffron-infused risotto with fresh lobster, scallops, and prawns." },
  { name: "Cocktail", price: "50.00", category: "Beverages", rating: 5, description: "A mixed alcoholic drink combining spirits with juices or syrups." },
  { name: "Velvet Chocolate Lava Cake", price: "12.00", category: "Desserts", rating: 5, description: "Rich chocolate cake with a molten center, served with vanilla bean ice cream." },
  { name: "Fish Cotelete", price: "50.00", category: "Main Course", rating: 3, description: "Savory Ethiopian dish made from minced fish mixed with spices and pan-fried." },
  { name: "Doro Wot", price: "150.00", category: "Ethiopian Dishes", rating: 5, description: "Rich Ethiopian chicken stew simmered in spicy berbere sauce." },
  { name: "Soufflé", price: "35.00", category: "Desserts", rating: 3, description: "A light, airy French baked dish made with eggs." },
  { name: "Mohjhito", price: "30.00", category: "Beverages", rating: 4.5, description: "Refreshing Cuban cocktail made with rum, lime, mint, and soda." },
  { name: "Kitfo", price: "50.00", category: "Ethiopian Dishes", rating: 5, description: "Ethiopian dish of minced raw beef seasoned with spiced butter and chili." },
  { name: "Tiramisu", price: "150.00", category: "Desserts", rating: 5, description: "Classic Italian dessert with coffee‑soaked ladyfingers and mascarpone." },
  { name: "Ocean Symphony Risotto", price: "35.00", category: "Main Course", rating: 3, description: "Creamy seafood risotto with saffron." },
  { name: "Tej", price: "80.00", category: "Beverages", rating: 4.5, description: "Traditional Ethiopian honey wine, mildly sweet and often spiced." }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding...");
    await MenuItem.deleteMany({}); 
    await MenuItem.insertMany(menuItems);
    console.log("Database Seeded Successfully!");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });