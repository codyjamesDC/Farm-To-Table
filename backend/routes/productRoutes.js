import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import express from 'express';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', verifyToken, requireAdmin, addProduct); 
router.put('/:id', verifyToken, requireAdmin, updateProduct);
router.delete('/:id', verifyToken, requireAdmin, deleteProduct);

export default router;