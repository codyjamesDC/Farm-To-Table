// Order class (schema)
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // references User (customer)

  items: [
    {
      productId:       { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // references Product
      quantity:        { type: Number, required: true, min: 1 },
      priceAtPurchase: { type: Number, required: true, min: 0 } // snapshot of price at time of order
    }
  ],

  totalAmount: { type: Number, required: true, min: 0 },
  status:      { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" }, // "pending" | "completed" | "cancelled"

  confirmedAt: { type: Date, default: null } // set when merchant confirms the order
}, {
  timestamps: true // auto-manages createdAt (orderedAt) and updatedAt
});

const Order = mongoose.model('Order', orderSchema, 'orders'); // 'orders' = collection name

export default Order;