//Controller for admin privileges

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

