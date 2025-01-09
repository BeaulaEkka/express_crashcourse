import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
  { id: 5, title: "Post five" },
];

//get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
  res.json(posts);
});

//get single post
// app.get("/api/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   res.json(posts.filter((post) => post.id === id));
// });

//find
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ message: "Post not found" });
  } else {
    res.status(200).json(post);
  }
});

//create new posts
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
  console.log(newPost);
  res.status(201).json(posts);
});

export default router;
