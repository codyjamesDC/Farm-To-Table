import models from '../models';
import mongoose from 'mongoose';

try {
    await mongoose.connect(process.env.MONGO_URI);
} catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
}

const { Product } = models.product;

const saveProduct = async (req, res) => {
    try{

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

