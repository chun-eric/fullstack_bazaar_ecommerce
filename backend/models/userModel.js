import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // hold any nested object structure, default empty object
    cartData: { type: Object, default: {} },
  },
  // preserves empty objects. Keeps empty objects even when there are no items
  { minimize: false }
);

// checks if there is a model called user and if not creates one called user and uses userSchema
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
