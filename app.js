const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let items = [];

app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  let date = new Date();
  let currDate = date.toLocaleDateString("en", options);
  res.render("list", { date: currDate, tasks: items });
});

app.post("/", function (req, res) {
  let item = req.body.newTask;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port: 3000");
});
