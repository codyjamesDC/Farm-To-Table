const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const getProducts = async (req, res) => { 
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Unable to get products', error: err.message });
    }
}

const getProductById = async (req, res) => { 

}
const addProduct = async (req, res) => { 

}
const updateProduct = async (req, res) => { 

}
const deleteProduct = async (req, res) => {

}

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
