const express = require("express");
const router = express.Router();
const productModel = require("../models/product");
const categoryModel = require("../models/category");

router.get("/:category", (req, res) => {
  const temp_category = [],
    filteredProducts = [];
  productModel
    .find()
    .then(products => {
      products.forEach(prod => {
        if (req.params.category === "promotion") {
          if (prod.onSale == true)
            filteredProducts.push({
              id: prod._id,
              title: prod.title,
              price: prod.price,
              description: prod.description,
              image: prod.image,
              category: prod.category,
              bestseller: prod.bestseller,
              onSale: prod.onSale
            });
        } else {
          if (req.params.category == prod.category)
            filteredProducts.push({
              id: prod._id,
              title: prod.title,
              price: prod.price,
              description: prod.description,
              image: prod.image,
              category: prod.category,
              bestseller: prod.bestseller,
              onSale: prod.onSale
            });
        }
      });

      categoryModel
        .find()
        .then(categories => {
          categories.forEach(e => {
            temp_category.push({
              category: e.category
            });
          });
          res.render("products", {
            title: "Promotion items",
            heading: "E-Market Promotion",
            nav_items: temp_category,
            products: filteredProducts
          });
        })
        .catch(err => console.log(`${err}`));
    })
    .catch(err => console.log(`${err}`));
});

module.exports = router;
