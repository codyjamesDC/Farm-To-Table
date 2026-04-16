// Middleware to verify JWT tokens and protect routes

import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    // Get token from Authorization header
    // Expected format: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ message: "No token provided. Authorization denied." });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token (excluding password)
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).send({ message: "User not found. Authorization denied." });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({ message: "Invalid token." });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).send({ message: "Token expired." });
    }
    console.error("verifyToken error:", error);
    return res.status(500).send({ message: "Server error during authentication." });
  }
};

//Middleware to check user type (for admin-only routes)
export const requireAdmin = (req, res, next) => {
  if (req.user.userType !== "admin") {
    return res.status(403).send({ message: "Access denied. Admin privileges required." });
  }
  next();
};