const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const productModel = require("../models/product");
const cartModel = require("../models/cart");
const sgMail = require("@sendgrid/mail");
const bcrypt = require("bcryptjs");
const path = require("path");

const isAuthenticated = require("../middleware/auth");

//check empty object
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

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
    userModel.findOne({ email }).then(user => {
      if (user == null) {
        const msg = {
          to: `${email}`,
          from: "jihyo.kim@outlook.com",
          subject: "Wellcome to join E-market!",
          text: "and easy to do anywhere, even with Node.js",
          html: `<string>Hello ${name}</string>, Thanks to join our website.<br>
            Now we are 10% sale promotion on a lot of products,<br>
            please enjoy shopping in our website.`
        };
        const newUser = {
          name,
          email,
          password,
          type: "User"
        };
        const user = new userModel(newUser);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        sgMail
          .send(msg)
          .then(
            user
              .save()
              .then(
                res.render("welcome", {
                  title: "Home",
                  heading: "E-Market",
                  name: name
                })
              )
              .catch(err => console.log(`Error while create User: ${err}`))
          )
          .catch(err => console.log(`Error while create User: ${err}`));
      } else {
        errorMess.email = "This email is registered.";
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
    userModel
      .findOne({ email })
      .then(user => {
        console.log(user);
        if (user == null) {
          errorMess.email = "Email ress was not registered";
          res.render("login", {
            title: "login",
            heading: "E-Market Login",
            errorEmail: errorMess.email,
            errorPass: errorMess.password,
            email: req.body.email,
            password: req.body.password
          });
        } else {
          bcrypt
            .compare(password, user.password)
            .then(isMatched => {
              if (isMatched) {
                req.session.userInfo = user;
                res.redirect("/");
              } else {
                errorMess.password = "Password is incorrect";
                res.render("login", {
                  title: "login",
                  heading: "E-Market Login",
                  errorEmail: errorMess.email,
                  errorPass: errorMess.password,
                  email: req.body.email,
                  password: req.body.password
                });
              }
            })
            .catch(err => console.log(`Error occur when login ${err}`));
        }
      })
      .catch(err => console.log(`Error occurs when find Email: ${err}`));
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

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/user/login");
});
router.get("/register", (req, res) => {
  res.render("register", {
    title: "register",
    heading: "E-Market Register"
  });
});

router.get("/cart", isAuthenticated, (req, res) => {
  let filteredCart = [];
  let ori_price = 0;
  let total_price = 0;

  cartModel
    .find({ userId: req.session.userInfo._id })
    .then(carts => {
      carts.forEach(async e => {
        if (e.onSale) ori_price = e.prodPrice * 0.9;
        else ori_price = e.prodPrice;
        filteredCart.push({
          cartId: e._id,
          title: e.prodName,
          description: e.prodDesc,
          image: e.prodImage,
          quantity: e.quantity,
          price: (e.quantity * ori_price).toFixed(2)
        });
        total_price += e.quantity * ori_price;
        console.log("Filtered:" + filteredCart.title);
        console.log(total_price);
      });
      res.render("cart", {
        title: `${req.session.userInfo.name}'s cart`,
        heading: "E-Market Cart",
        data: filteredCart,
        price: total_price.toFixed(2),
        userName: `${req.session.userInfo.name}`,
        GST: (total_price * 0.13).toFixed(2),
        total_price: (total_price * 1.13).toFixed(2)
      });
    })
    .catch(err => console.log(`${err}`));
});

router.get("/admin", isAuthenticated, (req, res) => {
  const filteredProducts = [];
  productModel.find().then(products => {
    products.forEach(e => {
      filteredProducts.push({
        id: e._id,
        title: e.title,
        price: e.price,
        description: e.description,
        image: e.image,
        category: e.category,
        bestseller: e.bestseller,
        onSale: e.onSale,
        stock: e.stock
      });
    });
    res.render("admin", {
      title: `Admin`,
      heading: "Product Manage",
      data: filteredProducts
    });
  });
});
router.delete("/admin/delete/:id", (req, res) => {
  productModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/user/admin");
    })
    .catch(err =>
      console.log(`Error happened when updating data from the database :${err}`)
    );
});
router.get("/admin/add_product", isAuthenticated, (req, res) => {
  res.render("add_product", {
    title: `Admin | Add Product`,
    heading: "Product Manage"
  });
});
router.post("/admin/add_product", isAuthenticated, (req, res) => {
  const {
    prodname,
    price,
    description,
    category,
    bestseller,
    onSale,
    stock
  } = req.body;

  const newProduct = {
    title: prodname,
    price,
    description,
    image: "temp.jpg",
    category: category,
    bestseller: bestseller == null ? false : true,
    onSale: onSale == "1" ? true : false,
    stock
  };
  const product = productModel(newProduct);
  product
    .save()
    .then(prod => {
      req.files.productPic
        .mv(`public/img/product/${req.files.productPic.name}`)
        .then(() => {
          productModel
            .updateOne(
              { _id: prod._id },
              {
                image: `/img/product/${req.files.productPic.name}`
              }
            )
            .then(() => {
              res.redirect("/user/admin");
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

router.get("/admin/update/:id", isAuthenticated, (req, res) => {
  productModel
    .findOne({ _id: req.params.id })
    .then(product => {
      const { title, price, description, category, stock } = product;
      res.render("update_product", {
        title: "Upadte Product",
        heading: "Update Product",
        id: req.params.id,
        name: title,
        price,
        description,
        category,
        stock
      });
    })
    .catch(err => console.log(err));
});

router.put("/admin/update/:id", isAuthenticated, (req, res) => {
  const {
    prodname,
    price,
    description,
    category,
    bestseller,
    onSale,
    stock
  } = req.body;

  const newProduct = {
    title: prodname,
    price,
    description,
    image: "temp.jpg",
    category: category,
    bestseller: bestseller == null ? false : true,
    onSale: onSale == "1" ? true : false,
    stock
  };
  req.files.productPic
    .mv(`public/img/product/${req.files.productPic.name}`)
    .then(() => {
      productModel
        .find({ _id: req.params.id })
        .update({
          title: prodname,
          price,
          description,
          image: `/img/product/${req.files.productPic.name}`,
          category: category,
          bestseller: bestseller == null ? false : true,
          onSale: onSale == "1" ? true : false,
          stock
        })
        .then(() => {
          res.redirect("/user/admin");
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

router.delete("/cart/delete/:id", (req, res) => {
  cartModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/user/cart");
    })
    .catch(err =>
      console.log(`Error happened when updating data from the database :${err}`)
    );
});

module.exports = router;
