//User class (schema)
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  password: String,
  userType: "customer" | "admin",

  address: String,
  contactNumber: String,
  createdAt: Date
});

const User = mongoose.model('User', userSchema, 'users'); // 'users' = collection name

export default User;