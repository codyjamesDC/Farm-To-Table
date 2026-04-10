import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

export default (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        next();
    });

    app.get('/api/products', getProducts);
    app.get('/api/products/:id', getProductById);
    app.post('/api/products', addProduct);
    app.put('/api/products/:id', updateProduct);
    app.delete('/api/products/:id', deleteProduct);
}