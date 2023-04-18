const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const data = require("./blog.json");
const axios = require("axios");

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const api = await axios.get(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const joke = api.data.joke;
    res.render("home", { data, joke });
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});
app.get("/aboutus", (req, res) => {
  res.render("about");
});
app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  blog = data[id];
  res.render("blog", { blog });
});

port = 3000;
app.listen(port, () => console.log("server running port", port));
