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

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => console.log("Server is running on port 8000"));
