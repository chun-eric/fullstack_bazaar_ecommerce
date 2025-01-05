import mongoose from "mongoose";

// create template for products in database
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestSeller: { type: Boolean, default: false },
  date: { type: Number, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);
// checks if there is a model called product and if not creates one
// creates collection named "product" and uses productSchema as template
// mongoose.models built in feature that tracks all models in our database

export default productModel;
