import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
  { id: 5, title: "Post five" },
];

//logger
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
}; //next runs at the end and adds next piece of function

// Get all posts
router.get("/", logger, (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit)); // Single response
  }
  res.json(posts);
});

//get single post
// app.get("/api/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   res.json(posts.filter((post) => post.id === id));
// });

//find -single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `Post with id ${id} not found.` });
  }
  res.status(200).json(post);
});

//create new POST
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }
  posts.push(newPost);
  console.log(newPost);
  res.status(201).json(posts);
});

//update posts
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `A post with ${id} not found` });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

//delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const toDeletePost = posts.find((post) => post.id === id);

  if (!toDeletePost) {
    return res
      .status(404)
      .json({ msg: `The message with an id of  ${id} does not exist` });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
