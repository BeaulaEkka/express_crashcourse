const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

//set up static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
  { id: 5, title: "Post five" },
];

//get all posts
// app.get("/api/posts", (req, res) => {
//   const limit = parseInt(req.query.limit);
//   if (!isNaN(limit) && limit > 0) {
//     res.json(posts.slice(0, limit));
//   } else {
//     res.json(posts);
//   }
//   res.json(posts);
// });

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log("Server is running on port 8000"));
