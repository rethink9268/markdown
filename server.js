const express = require("express");
const mongoose = require("mongoose"); //database//
const articleRouter = require("./routes/articles.js");
const app = express();
const Article = require("./models/articles.js");
const methodOverride = require("method-override");

//connect database//
mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen("https://serene-queijadas-43c2a3.netlify.app/");
