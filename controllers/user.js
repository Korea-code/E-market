const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const sgMail = require("@sendgrid/mail");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../middleware/auth");

// temp
const productModel = require("../models/productDB");

//check empty object
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
// ... temp

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
          errorMess.email = "Email address was not registered";
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
  res.render("cart", {
    title: `${req.session.userInfo.name}'s cart`,
    heading: "E-Market Cart"
  });
});

router.get("/admin", isAuthenticated, (req, res) => {
  res.render("admin", {
    title: `Admin`,
    heading: "Product Manage"
  });
});
router.get("/admin/add_product", isAuthenticated, (req, res) => {
  res.render("add_product", {
    title: "Add Product",
    heading: "Add Product"
  });
});

module.exports = router;
