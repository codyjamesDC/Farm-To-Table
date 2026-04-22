import express from 'express';
import * as adminController from '../controllers/adminController.js';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Apply the auth middleware to all admin routes easily
router.use(verifyToken, requireAdmin);

//Admin only privileges
router.get('/', adminController.getAllUsers); 
router.get('/:id', adminController.getUserById);
router.delete('/:id', adminController.deleteUser);
router.put('/:id/assign-admin', adminController.assignAdmin);
router.put('/:id', adminController.updateUser);

export default router;