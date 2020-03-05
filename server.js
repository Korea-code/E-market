const express = require("express");
const exphbs = require("express-handlebars");

const bodyParser = require("body-parser");

const general = require("./Controller/general");
const product = require("./Controller/product");
const products = require("./Controller/products");

const app = express();

require("dotenv").config({ path: "./config/keys.env" });

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", general);
app.use("/product", product);
app.use("/products", products);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is connected!!!!!!! on ${PORT}`);
});
