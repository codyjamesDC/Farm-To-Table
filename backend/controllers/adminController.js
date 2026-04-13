//Controller for admin privileges
// getAllUsers, getUserById, deleteUser, assignAdmin, updateUser
//TODO: getLoginHistory, getTransactionHistory, getStats, getUsers with filter
//TODO-BONUS: suspendUser, assignRole, removeRole, sendAnnouncement

import User from "../models/User";

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

//GET USER BY ID
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        let foundUser = await User.findOne({ _id: userId});

        if (!foundUser){
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(foundUser);
    } catch (err) {
        res.status(500).json( {message: 'Unable to get user', error: err.message });
    }
}

//DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId).select("-password");

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    console.error("deleteUser error:", err);
    return res.status(500).json({
      message: "Unable to delete user",
      error: err.message,
    });
  }
};

//ASSIGN ADMIN
export const assignAdmin = async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { userType: "admin" }, //update
      { new: true }         //return updated version
    ).select("-password");  //exclude password in response body

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User promoted to admin successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("assignAdmin error:", err);
    return res.status(500).json({
      message: "Unable to assign admin role",
      error: err.message,
    });
  }
};

//UPDATE USER INFO
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    //Allowed fields
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
        new: true,
        runValidators: true, // respects schema rules
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("updateUser error:", err);
    return res.status(500).json({
      message: "Unable to update user",
      error: err.message,
    });
  }
};