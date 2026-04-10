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
    try {
        const productId = req.params.id;
        let prod = await Product.findOne({ _id: productId });

        if (!prod) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(prod);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: 'Unable to get product', error: err.message });
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, description, type, price, quantity, createdBy } = req.body;

        const newProduct = new Product({
            name,
            description,
            type,
            price,
            quantity,
            createdBy
        });

        await newProduct.save();
        res.status(200).json(newProduct);
        
    } catch (err) {
        res.status(500).json({ message: 'Unable to add product', error: err.message });
    }
}
const updateProduct = async (req, res) => { 

}
const deleteProduct = async (req, res) => {

}

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
