const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  category: {
    type: String,
    requried: true,
    unique: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;

// fakeDB = [
//     {
//       category: "Tablet"
//     },
//     {
//       category: "Laptop"
//     },
//     {
//       category: "Television"
//     },
//     {
//       category: "Headphone"
//     },
//     {
//       category: "Snack"
//     },
//     {
//       category: "Drink"
//     }
//   ];
