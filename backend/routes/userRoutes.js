import express from 'express';
import {viewProfile, updateProfile} from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.use(verifyToken);

router.get('/', viewProfile);
router.put('/', updateProfile);

export default router;