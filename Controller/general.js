const express = require("express");
const router = express.Router();
const productModel = require("../model/productDB");

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

router.post("/register", (req, res) => {
  let errorMess = {};
  if (req.body.name == "") errorMess.name = "Enter your name";
  if (req.body.email == "") errorMess.email = "Enter your Email";
  else if (req.body.email.search("@") == -1)
    errorMess.email = "Enter Email format";
  if (req.body.password == "") errorMess.password = "Enter your password";
  if (req.body.password != req.body.password_confirm)
    errorMess.password_confirm = "Enter password correctly";
  if (isEmpty(errorMess)) {
    const temp_category = [],
      temp_bestseller = [];
    const model = productModel.getAllProducts();
    temp_category.push(model[0]);
    model.forEach(e => {
      if (e.bastseller && temp_bestseller.length < 8) temp_bestseller.push(e);
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
  } else {
    res.render("register", {
      title: "register",
      heading: "E-Market Register",
      errorName: errorMess.name,
      errorEmail: errorMess.email,
      errorPasswd: errorMess.password,
      errorConfirm: errorMess.password_confirm,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password_confirm: req.body.password_confirm
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "login",
    heading: "E-Market Login"
  });
});

router.post("/login", (req, res) => {
  let errorMess = {};
  if (req.body.email == "") errorMess.email = "Enter your Email";
  else if (req.body.email.search("@") == -1)
    errorMess.email = "Enter Email format";
  if (req.body.password == "") errorMess.password = "Enter your Password";

  if (isEmpty(errorMess)) {
    const temp_category = [],
      temp_bestseller = [];
    const model = productModel.getAllProducts();
    temp_category.push(model[0]);
    model.forEach(e => {
      if (e.bastseller && temp_bestseller.length < 8) temp_bestseller.push(e);
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
  } else {
    res.render("login", {
      title: "login",
      heading: "E-Market Login",
      errorEmail: errorMess.email,
      errorPass: errorMess.password,
      email: req.body.email,
      password: req.body.password
    });
  }
});
router.get("/register", (req, res) => {
  res.render("register", {
    title: "register",
    heading: "E-Market Register"
  });
});

module.exports = router;