// Product class (schema)
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true },
  type:        { type: String, enum: ["crop", "poultry"], required: true }, // "crop" | "poultry"
  price:       { type: Number, required: true, min: 0 },
  quantity:    { type: Number, required: true, min: 0, default: 0 },

  createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // references User (admin/merchant)
}, {
  timestamps: true // auto-manages createdAt and updatedAt
});

const Product = mongoose.model('Product', productSchema, 'products'); // 'products' = collection name

export default Product;