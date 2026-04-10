import Product from '../models/Product.js';

const getProducts = async (req, res) => { 
    try {
        const products = await Product.find();
        console.log('Products found:', products);
        res.status(200).json(products);
    } catch (err) {
        console.error(err); 
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

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
