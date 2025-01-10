let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
  { id: 5, title: "Post five" },
];

//@desc Get all posts
//@route GET/api/posts

export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit)); // Single response
    
  }
  res.json(posts);
};

//@desc Get Single pst
//@route GET/api/posts/:id

export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id ${id} not found.`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//@desc create new Post
//@route POST/api/posts

export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    const error = new Error("Title is required.");
    error.status = 400;
    return next(error);
    // return res.status(400).json({ msg: "Please include a title" });
  }
  posts.push(newPost);
  console.log(newPost);
  res.status(201).json(posts);
};

//@desc update Post
//@route POST/api/posts

export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with ${id} not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc Delete Post
//@route POST/api/posts

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const toDeletePost = posts.find((post) => post.id === id);

  if (!toDeletePost) {
    const error = new Error(`The post with an id of  ${id} does not exist`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
