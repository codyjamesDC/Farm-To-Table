import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Attempt to connect using the Atlas URI from your .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit the process with failure so your app doesn't run without a DB
    process.exit(1); 
  }
}

export { connectDB };