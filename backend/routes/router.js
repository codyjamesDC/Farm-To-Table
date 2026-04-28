import productRoutes from './productRoutes.js';
import authRoutes from './authRoutes.js';
import cartRoute from './cartRoutes.js';
import adminRoutes from './adminRoutes.js'
import userRoutes from './userRoutes.js'


export default (app) => {
    app.use('/api/products', productRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/api/cart', cartRoute);
    app.use('/api/admin', adminRoutes);
    app.use('/api/profile', userRoutes)
}