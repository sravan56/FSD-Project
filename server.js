const express = require("express");
const items = require("./data");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("src"));
app.use("/js", express.static(__dirname + "/src/js"));
app.use("/images", express.static(__dirname + "/src/images"));
app.use("/styles", express.static(__dirname + "/src/styles"));
app.set("/views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/products", (req, res) => {
  res.render("product", { items: items });
});
app.get("/login", (req, res) => {
  res.render("Login", { items: items });
});
app.get("/cart", (req, res) => {
  res.render("Cart", { items: items });
});
app.get("/user", (req, res) => {
  res.render("User", { items: items });
});
app.get("/register", (req, res) => {
  res.render("Register", { items: items });
});

app.listen(5000, () => {
  console.log("Connected!");
});
