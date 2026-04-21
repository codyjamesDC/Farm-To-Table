//File for populating the data

// Remove the mongoose import, your connectDB handles it!
import dotenv from "dotenv";
import bcrypt from "bcrypt";

// Import your database connection function (Adjust the path!)
import { connectDB } from "./config/db.js"; 

// 1. Models
import User from "./models/User.js";
import Product from "./models/Product.js";
import Cart from "./models/Cart.js";
import Order from "./models/Order.js";

// 2. Controllers
import { registerUser } from "./controllers/authController.js";
import { addProduct } from "./controllers/productController.js";
import { addToCart } from "./controllers/cartController.js";
import { addOrder } from "./controllers/orderController.js";

dotenv.config();

// Enhanced Helper to mock the Express req/res cycle
const executeController = async (controllerFn, bodyData) => {
  return new Promise((resolve, reject) => {
    const req = { body: bodyData };
    
    const res = {
      status: function (code) {
        this.statusCode = code;
        return this; 
      },
      send: function (data) {
        if (this.statusCode >= 400) reject(new Error(`Error ${this.statusCode}: ${JSON.stringify(data)}`));
        else resolve(data);
      },
      json: function (data) {
        if (this.statusCode >= 400) reject(new Error(`Error ${this.statusCode}: ${JSON.stringify(data)}`));
        else resolve(data);
      }
    };

    controllerFn(req, res).catch(reject);
  });
};

const seedDatabase = async () => {
  try {
    //Connect to db here
    connectDB();

    console.log("Clearing existing data...");
    await User.deleteMany();
    await Product.deleteMany();
    await Cart.deleteMany();
    await Order.deleteMany();

    // ==========================================
    // 1. CREATE ADMIN (Manual)
    // ==========================================
    console.log("Creating Admin user...");
    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash("admin123", salt);
    
    const admin = await User.create({
      firstName: "System", lastName: "Admin", email: "admin@farm.com",
      password: adminPassword, userType: "admin", address: "123 Farmville Road", contactNumber: "09123456789"
    });

// ==========================================
    // 2. CREATE CUSTOMERS (Via Controller)
    // ==========================================
    console.log("Creating Customers...");
    await executeController(registerUser, { firstName: "Juan", lastName: "Dela Cruz", email: "juan@gmail.com", password: "password123" });
    await executeController(registerUser, { firstName: "Maria", lastName: "Clara", email: "maria@gmail.com", password: "password123" });

    // Fixed Mongoose deprecation warning by changing 'new' to 'returnDocument'
    const customer1 = await User.findOneAndUpdate(
      { email: "juan@gmail.com" }, 
      { address: "456 Customer St", contactNumber: "09987654321" }, 
      { returnDocument: "after" } 
    );
    const customer2 = await User.findOneAndUpdate(
      { email: "maria@gmail.com" }, 
      { address: "789 Buyer Ave", contactNumber: "09112223333" }, 
      { returnDocument: "after" }
    );

    // ==========================================
    // 3. CREATE PRODUCTS (Via Controller)
    // ==========================================
    console.log("Creating Products...");
    
    // We execute the controllers but don't worry about saving the response variables
    await executeController(addProduct, { name: "Organic Tomatoes", type: "crop", price: 50, quantity: 100, createdBy: admin._id });
    await executeController(addProduct, { name: "Sweet Corn", type: "crop", price: 30, quantity: 200, createdBy: admin._id });
    await executeController(addProduct, { name: "Whole Chicken", type: "poultry", price: 250, quantity: 50, createdBy: admin._id });
    await executeController(addProduct, { name: "Fresh Eggs (Tray)", type: "poultry", price: 200, quantity: 80, createdBy: admin._id });

    // Safely query the database directly to get the IDs. This completely bypasses the JSON formatting issue!
    const p1 = await Product.findOne({ name: "Organic Tomatoes" });
    const p2 = await Product.findOne({ name: "Sweet Corn" });
    const p3 = await Product.findOne({ name: "Whole Chicken" });
    const p4 = await Product.findOne({ name: "Fresh Eggs (Tray)" });

    const p1Id = p1._id;
    const p2Id = p2._id;
    const p3Id = p3._id;
    const p4Id = p4._id;

    // ==========================================
    // 4. CREATE CARTS (Via Controller)
    // ==========================================
    console.log("Creating Cart for Customer 1...");
    await executeController(addToCart, { userId: customer1._id, productId: p1Id, quantity: 2 });
    await executeController(addToCart, { userId: customer1._id, productId: p3Id, quantity: 1 });

    // ==========================================
    // 5. CREATE ORDERS (Via Controller)
    // ==========================================
    console.log("Creating Order for Customer 2...");
    await executeController(addOrder, {
      userId: customer2._id,
      items: [
        { productId: p2Id, quantity: 5 },
        { productId: p4Id, quantity: 2 }
      ]
    });

    console.log("Database seeded successfully using all controllers!");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedDatabase();