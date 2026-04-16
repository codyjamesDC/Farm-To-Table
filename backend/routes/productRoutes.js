import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import express from 'express';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;