//File for adding cart items
//TODO: Other functions here

import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Fetch the product to get its current price
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if user already has a cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create new cart if none exists
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
        totalPrice: product.price * quantity
      });
    } else {
      // If cart exists, check if product is already in it
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (itemIndex > -1) {
        // Update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item
        cart.items.push({ productId, quantity });
      }

      // Recalculate total price
      cart.totalPrice += (product.price * quantity);
    }

    await cart.save();
    return res.status(200).json({ message: "Cart updated", cart });

  } catch (error) {
    return res.status(500).json({ message: 'Unable to update cart', error: error.message });
  }
};