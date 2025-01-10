import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

// Get all posts
router.get("/", getPosts);

//find -single post
router.get("/:id", getPost);

//create new POST
router.post("/", createPost);

//update posts
router.put("/:id", updatePost);

//delete post
router.delete("/:id", deletePost);

export default router;
