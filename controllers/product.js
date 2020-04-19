const express = require("express");
const router = express.Router();
const productModel = require("../models/product");
const categoryModel = require("../models/category");

router.get("/", (req, res) => {
  productModel
    .find()
    .then(products => {
      const filteredProducts = [];
      products.forEach(e => {
        filteredProducts.push({
          id: e._id,
          title: e.title,
          price: e.price,
          description: e.description,
          image: e.image,
          category: e.category,
          bestseller: e.bestseller,
          onSale: e.onSale
        });
      });
      const filteredCategories = [];
      categoryModel
        .find()
        .then(categories => {
          categories.forEach(e => {
            filteredCategories.push({
              category: e.category
            });
          });
          res.render("products", {
            title: "products",
            heading: "E-Market Product",
            nav_items: filteredCategories,
            products: filteredProducts
          });
        })
        .catch(err => console.log(`${err}`));
    })
    .catch(err => console.log(`${err}`));
});

router.get("/:productId", (req, res) => {
  productModel
    .findById(req.params.productId)
    .then(product => {
      const filteredCategories = [];
      categoryModel
        .find()
        .then(categories => {
          categories.forEach(e => {
            filteredCategories.push({
              category: e.category
            });
          });
          const option = [];

          for (let number = 1; number <= product.stock; number++) {
            option.push(number);
          }
          console.log(option);
          res.render("product_page", {
            id: product._id,
            title: "products",
            heading: "E-Market Product",
            nav_items: filteredCategories,
            onsale: product.bastseller,
            title: product.title,
            image: product.image,
            discription: product.description,
            price: product.price,
            onsale: product.onSale,
            stock: product.stock,
            option: option,
            sale_price: (product.price * 0.9).toFixed(2)
          });
        })
        .catch(err => console.log(`${err}`));
    })
    .catch(err => console.log(`${err}`));
});

module.exports = router;
