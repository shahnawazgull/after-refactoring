import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },

    supplier: {
      type: String,
      required: true,
      trim: true,
    },

    stock_status: {
      type: String,
      enum: ["In Stock", "Low Stock", "Out of Stock"],
      default: "In Stock",
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    image:{
      type:String
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const SNKProducts = mongoose.model("SNKPRODUCTS", productsSchema);

export default SNKProducts;
