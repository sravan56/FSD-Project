const express = require("express");
const items = require("./data");

const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/Kalakar", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Database Connected!!");
});

app.use(express.static("src"));
app.use("/js", express.static(__dirname + "/src/js"));
app.use("/images", express.static(__dirname + "/src/images"));
app.use("/styles", express.static(__dirname + "/src/styles"));
app.set("/views", __dirname + "/views");

const productschema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  Reviews: { type: String, required: true },
  img: { type: String },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});
const cartschema = new mongoose.Schema({
  ProductId: {
    type: mongoose.Schema.Type.ProductId,
    ref: "Products",
    required: true,
  },
  qty: Number,
  total: Number,
});

const Products = mongoose.model("products", productschema);
const User = mongoose.model("User", userSchema);
const carts = mongoose.model("carts", cartschema);
let isloggedIn = false;
app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/products", async (req, res) => {
  const items = await Products.find({});
  console.log(items);
  res.render("product", { items: items });
});
app.post("/products", async (req, res) => {
  console.log(req.body);
  const newProduct = await Products.create(req.body);
  console.log("new product created!!! ", newProduct);
  res.redirect("/products");
});
app.get("/login", (req, res) => {
  res.render("Login", { items: items });
});
app.post("/login", async (req, res) => {
  const userObj = await User.findOne({ email: req.body.email });
  console.log("1 ", userObj.password);
  console.log("2", req.body.password);
  console.log(req.body);
  if (userObj.password == req.body.password) {
    isloggedIn = true;
    console.log("sucess");
    return res.redirect("/");
  }
  console.log("failure");
  console.log("userlogin", userObj);
  res.redirect("back");
});
app.get("/cart", (req, res) => {
  if (!isloggedIn) {
    return res.redirect("/login");
  }
  res.render("Cart", { items: items });
});
app.get("/user", (req, res) => {
  res.render("User", { items: items });
});
app.get("/register", (req, res) => {
  res.render("Register", { items: items });
});
app.post("/register", async (req, res) => {
  console.log(req.body);
  const newUser = await User.create(req.body);
  console.log(newUser);
  res.redirect("/login");
});

app.listen(5000, () => {
  console.log("Connected!");
});
