const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: {
    type: String,
    requried: true,
    unique: true
  },
  price: {
    type: Number,
    requried: true
  },
  description: {
    type: String,
    requried: true
  },
  image: {
    type: String,
    requried: true
  },
  category: {
    type: String,
    requried: true
  },
  bastseller: {
    type: Boolean,
    required: true
  },
  onSale: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
