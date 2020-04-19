const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  userId: {
    type: String,
    requried: true
  },
  prodId: {
    type: String,
    required: true,
    unique: true
  },
  prodName: {
    type: String,
    requried: true
  },
  prodDesc: {
    type: String,
    requried: true
  },
  prodImage: {
    type: String,
    requried: true
  },
  prodPrice: {
    type: Number,
    require: true
  },
  onSale: {
    type: Boolean,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

const cartModel = mongoose.model("Cart", cartSchema);
module.exports = cartModel;
