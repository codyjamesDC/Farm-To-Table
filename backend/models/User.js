// User class (schema)
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName:     { type: String, required: true, trim: true },
  middleName:    { type: String, default: "", trim: true },
  lastName:      { type: String, required: true, trim: true },
  email:         { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:      { type: String, required: true },
  userType:      { type: String, enum: ["customer", "admin", "merchant"], default: "customer" }, // "customer" | "admin"

  address:       { type: String, default: "" },
  contactNumber: { type: String, default: "" },
}, {
  timestamps: true // auto-manages createdAt and updatedAt
});

const User = mongoose.model('User', userSchema, 'users'); // 'users' = collection name

export default User;