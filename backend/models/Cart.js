//Cart class (schema)
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: objectId, //references User (customer)

  items: [
    {
        productId: ObjectId, //references product
        quantity: Number
    }
  ],

  totalPrice: Number,
  updatedAt: Date
});

const Cart = mongoose.model('Cart', cartSchema, 'carts'); // 'products' = collection name

export default Cart;