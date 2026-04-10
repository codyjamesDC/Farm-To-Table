// Controller for authentication, registration, login, logout, and view all Users

import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import validator from "validator";

//REGISTER
export const registerUser = async (req, res) => {
  try {
    const { firstName, middleName, lastName, email, password } = req.body;

    // Basic field validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send({ message: "Please fill in all required fields." });
    }

    // Validate email format using validator module
    if (!validator.isEmail(email)) {
      return res.status(400).send({ message: "Invalid email format." });
    }

    // Check if email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "Email is already registered." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new customer user (userType always "customer" on self-registration)
    const newUser = new User({
      firstName,
      middleName: middleName || "",
      lastName,
      email,
      password: hashedPassword,
      userType: "customer",
    });

    await newUser.save();

    return res.status(201).send({ message: "Registration successful." });
  } catch (error) {
    console.error("registerUser error:", error);
    return res.status(500).send({ message: "Server error during registration." });
  }
};

//LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    // TODO: Add session/cookie-based auth later
    return res.status(200).send({
      message: "Login successful.",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error("loginUser error:", error);
    return res.status(500).send({ message: "Server error during login." });
  }
};

//LOGOUT
// TODO: Clear session/cookie here when auth is implemented
export const logoutUser = (req, res) => {
  return res.status(200).send({ message: "Logout successful." });
};

//GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    // Exclude passwords from the response
    const users = await User.find({ userType: "customer" }).select("-password");

    return res.status(200).send({
      total: users.length,
      users,
    });
  } catch (error) {
    console.error("getAllUsers error:", error);
    return res.status(500).send({ message: "Server error fetching users." });
  }
};

