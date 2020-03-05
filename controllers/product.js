const express = require("express");
const router = express.Router();
const productModel = require("../models/productDB");

router.get("/", (req, res) => {
  const temp_category = [],
    temp_model = [];
  const model = productModel.getAllProducts();
  model.forEach(e => {
    temp_model.push(e);
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
});

router.get("/:productId", (req, res) => {
  let temp_product,
    temp_category = [];
  const model = productModel.getAllProducts();
  model.forEach(e => {
    let check = true;
    if (e.id == req.params.productId) temp_product = e;
    for (let i = 0; i < temp_category.length; ++i)
      if (e.subcategory == temp_category[i].subcategory) check = false;
    if (check) temp_category.push(e);
  });
  res.render("product_page", {
    title: "products",
    heading: "E-Market Product",
    nav_items: temp_category,
    onsale: temp_product.bastseller,
    title: temp_product.title,
    image: temp_product.image,
    discription: temp_product.description,
    price: temp_product.price,
    onsale: temp_product.onSale,
    sale_price: (temp_product.price * 0.9).toFixed(2)
  });
});

module.exports = router;
