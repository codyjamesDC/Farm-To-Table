// Controller for user management features (viewProfile, updateProfile)

import User from "../models/User.js";

// VIEW PROFILE
export const viewProfile = async (req, res) => {
  try {
    // We use req.user._id (from the token) instead of req.params.id
    const userId = req.user._id; 
    
    // We use findById and exclude the password from being sent to the frontend
    let foundUser = await User.findById(userId).select("-password");

    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json({ message: 'Unable to get profile', error: err.message });
  }
};


// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    // We use req.user._id instead of trusting a URL parameter
    const userId = req.user._id;
    const updates = req.body;

    // Allowed fields
    const allowedFields = [
      "firstName",
      "middleName",
      "lastName",
      "email",
      "address",
      "contactNumber",
    ];

    // Filter only allowed fields
    const filteredUpdates = {};
    for (let key of Object.keys(updates)) {
      if (allowedFields.includes(key)) {
        filteredUpdates[key] = updates[key];
      }
    }

    // If no valid fields provided
    if (Object.keys(filteredUpdates).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      filteredUpdates,
      {
        returnDocument: 'after',
        runValidators: true, 
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("updateProfile error:", err);
    return res.status(500).json({
      message: "Unable to update profile",
      error: err.message,
    });
  }
};