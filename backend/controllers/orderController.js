//Controller for orders

import Order from '../models/Order.js';
import Product from '../models/Product.js';

export const addOrder = async (req, res) => {
  try {
    const { userId, items } = req.body; // items = [{ productId, quantity }]
    
    let totalAmount = 0;
    const orderItems = [];

    // Loop through requested items, grab prices, and calculate total
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ message: `Product ${item.productId} not found` });

      orderItems.push({
        productId: product._id,
        quantity: item.quantity,
        priceAtPurchase: product.price
      });

      totalAmount += (product.price * item.quantity);
    }

    const newOrder = new Order({
      userId,
      items: orderItems,
      totalAmount,
      status: "completed", //TODO: This is temporary. I am auto-completing for dummy data purposes
      confirmedAt: new Date()
    });

    await newOrder.save();
    return res.status(201).json({ message: "Order created successfully", order: newOrder });

  } catch (error) {
    return res.status(500).json({ message: 'Unable to create order', error: error.message });
  }
};