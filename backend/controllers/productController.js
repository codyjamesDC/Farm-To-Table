import models from '../models';
import mongoose from 'mongoose';

try {
    await mongoose.connect(process.env.MONGO_URI);
} catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
}

const { Product } = models.product;

const getProducts = async (req, res) => { 

}
const getProductById = async (req, res) => { 

}
const saveProduct = async (req, res) => { 

}
const updateProduct = async (req, res) => { 

}
const deleteProduct = async (req, res) => {

}

module.exports = { getProducts, getProductById, saveProduct, updateProduct, deleteProduct };
