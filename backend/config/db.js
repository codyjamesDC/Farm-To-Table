//Establish connection to DB here by calling connectDB function
import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to the database..");
}

export { connectDB };