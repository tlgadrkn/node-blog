const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "How I got into Web Development",
      body: "blbalbalblalbalblablalblablb",
    },
    {
      title: "My Life as a software developers",
      body: "blbalbalblalbalblablalblablb",
    },
    {
      title: "How to monetize Youtube",
      body: "blbalbalblalbalblablalblablb",
    },
  ];
  res.render("index", { title: "| Home", blogs });
});
app.get("/about", (req, res) => res.render("about", { title: "| About" }));

app.get("/blogs/create", (req, res) => {
  res.render("createNewBlog", { title: "| Create a Blog" });
});

app.use((req, res) => res.status(404).render("404"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
