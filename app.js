const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

require("dotenv").config({ path: "./config/keys.env" });

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// session
app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true
    //cookie: {secure: true} only works in https
  })
);
app.use((req, res, next) => {
  res.locals.user = req.session.userInfo;
  next();
});

const generalController = require("./controllers/general");
const productController = require("./controllers/product");
const productsController = require("./controllers/products");
const userController = require("./controllers/user");

app.use("/", generalController);
app.use("/product", productController);
app.use("/products", productsController);
app.use("/user", userController);

//connect to mongoose
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB!!");
  })
  .catch(err => console.log(`Error while connecting to MonogoDB ${err}`));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected!!!!!!! on ${PORT}`);
});
