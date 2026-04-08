//Order class (schema)
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: objectId, //references User (customer)

  items: [
    {
        productId: ObjectId, //references product
        quantity: Number,
        priceAtPurchase: Number
    }
  ],

  totalAmount: Number,
  status: "pending" | "completed" | "cancelled",

  orderedAt: Date,
  confirmedAt: Date
});

const Order = mongoose.model('Order', orderSchema, 'orders'); // 'products' = collection name

export default Order;