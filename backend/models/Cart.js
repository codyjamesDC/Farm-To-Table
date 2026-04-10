// Cart class (schema)
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true }, // references User (customer) — one cart per user

  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // references Product
      quantity:  { type: Number, required: true, min: 1 }
    }
  ],

  totalPrice: { type: Number, default: 0, min: 0 }
}, {
  timestamps: true // auto-manages createdAt and updatedAt
});

const Cart = mongoose.model('Cart', cartSchema, 'carts'); // 'carts' = collection name

export default Cart;