const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/blogs/create", (req, res) => {
  res.render("createNewBlog");
})

app.use((req, res) => res.status(404).render("404"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
