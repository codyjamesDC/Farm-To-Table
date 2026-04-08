//Express Server
import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;


connectDB(); //connect to db
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});