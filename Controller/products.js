const express = require("express");
const router = express.Router();
const productModel = require("../model/productDB");

router.get("/:category", (req, res) => {
  const temp_category = [],
    temp_model = [];
  const model = productModel.getAllProducts();
  if (req.params.category === "promotion") {
    model.forEach(e => {
      e.short = e.title.slice(0, 15);
      if (e.onSale) temp_model.push(e);
      let check = true;
      for (let i = 0; i < temp_category.length; ++i)
        if (e.subcategory == temp_category[i].subcategory) check = false;
      if (check) temp_category.push(e);
    });
    res.render("products", {
      title: "Promotion items",
      heading: "E-Market Promotion",
      nav_items: temp_category,
      products: temp_model
    });
  } else {
    model.forEach(e => {
      if (req.params.category == e.subcategory) temp_model.push(e);
      let check = true;
      for (let i = 0; i < temp_category.length; ++i)
        if (e.subcategory == temp_category[i].subcategory) check = false;
      if (check) temp_category.push(e);
    });
    res.render("products", {
      title: "products",
      heading: "E-Market Product",
      nav_items: temp_category,
      products: temp_model
    });
  }
});

module.exports = router;
