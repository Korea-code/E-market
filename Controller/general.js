const express = require("express");
const router = express.Router();
const productModel = require("../model/productDB");
const sgMail = require("@sendgrid/mail");

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
  const numNalp =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let errorMess = {};
  const { name, email, password, password_confirm } = req.body;
  if (name == "") errorMess.name = "Enter your name";
  if (email == "") errorMess.email = "Enter your Email";
  else if (email.search("@") == -1) errorMess.email = "Enter Email format";
  if (password == "") errorMess.password = "Enter your password";
  else if (password.length < 6 || password.length > 15)
    errorMess.password = "Password lengh is between 6 and 15";
  else
    password.split("").forEach(e => {
      if (!numNalp.includes(e)) {
        errorMess.password = "You can only use alphabet and number";
      }
    });
  if (password != password_confirm)
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
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: `${email}`,
      from: "jihyo.kim@outlook.com",
      subject: "Wellcome to join E-market!",
      text: "and easy to do anywhere, even with Node.js",
      html: `<string>Hello ${name}</string>, Thanks to join our website.<br>
      Now we are 10% sale promotion on a lot of products,<br>
      please enjoy shopping in our website.`
    };
    sgMail.send(msg);
    res.render("welcome", {
      title: "Home",
      heading: "E-Market",
      name: name
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
  const { email, password } = req.body;
  if (email == "") errorMess.email = "Enter your Email";
  else if (email.search("@") == -1) errorMess.email = "Enter Email format";
  if (password == "") errorMess.password = "Enter your Password";
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
