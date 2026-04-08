//Product class (schema)
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: "crop" | "poultry",
  price: Number,
  quantity: Number,

  createdBy: ObjectId, //references User (admin/merchant)
  createdAt: Date
});

const Product = mongoose.model('Product', productSchema, 'products'); // 'products' = collection name

export default Product;