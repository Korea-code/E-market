const express = require("express");
const router = express.Router();

const productModel = require("../models/productDB");

//check empty object
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

router.get("/", (req, res) => {
  const temp_category = [],
    temp_bestseller = [];
  const model = productModel.getAllProducts();
  temp_category.push(model[0]);
  model.forEach(e => {
    if (e.bastseller) temp_bestseller.push(e);
    let check = true;
    for (let i = 0; i < temp_category.length; ++i)
      if (e.subcategory == temp_category[i].subcategory) check = false;
    if (check) temp_category.push(e);
  });

  res.render("home", {
    title: "Home",
    heading: "E-Market",
    promotion: "10% Sale NOW",
    nav_items: temp_category,
    img_category: temp_category,
    best: temp_bestseller
  });
});

module.exports = router;
