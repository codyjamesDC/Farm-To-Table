import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import express from 'express';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();
//TODO: nilagay ko requireAdmin sa some here. Dikopa natetest
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', requireAdmin, addProduct); 
router.put('/:id', requireAdmin, updateProduct);
router.delete('/:id', requireAdmin, deleteProduct);

export default router;