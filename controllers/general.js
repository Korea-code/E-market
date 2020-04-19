const express = require("express");
const router = express.Router();

const productModel = require("../models/product");

//check empty object
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

router.get("/", (req, res) => {
  const filteredCategories = [],
    filteredProducts = [];
  productModel
    .find()
    .then(products => {
      filteredCategories.push({
        category: products[0].category,
        image: products[0].image
      });
      products.forEach(e => {
        if (e.bestseller)
          filteredProducts.push({
            id: e._id,
            image: e.image
          });
        let check = true;
        for (let i = 0; i < filteredCategories.length; ++i)
          if (
            e.category == filteredCategories[i].category ||
            e.category == undefined
          )
            check = false;
        if (check)
          filteredCategories.push({
            category: e.category,
            image: e.image
          });
      });
      console.log(filteredCategories);
      res.render("home", {
        title: "Home",
        heading: "E-Market",
        promotion: "10% Sale NOW",
        nav_items: filteredCategories,
        img_category: filteredCategories,
        best: filteredProducts
      });
    })
    .catch(err => console.log(`${err}`));
});

module.exports = router;
