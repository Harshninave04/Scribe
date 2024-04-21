import express from 'express';
import Post from '../models/postModel.js';
import mongoose from 'mongoose';
import auth from '../middleware/auth.js';
import User from '../models/userModel.js';

const router = express.Router();

/*****************************Get All Post*****************************/

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*****************************Create New Post*****************************/
router.post('/', auth, async (req, res) => {
  // Grab the data from request body
  const { title, body } = req.body;

  // Check the fields are not empty
  if (!title || !body) {
    return res.status(400).json({
      error: 'Title and Body are required',
    });
  }

  // Grab the user from authenticated body
  const user = await User.findById(req.user._id);

  try {
    const post = await Post.create({ user: user._id, title, body });
    res.status(400).json({
      message: 'Post Created!',
      post,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

/*****************************Delete Post*****************************/

router.delete('/:id', auth, async (req, res) => {
  // Check the ID is valid type
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'Invalid ID',
    });
  }

  // Check the post exists
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }

  // Check the user owns the post
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: 'Not Authorized' });
  }

  try {
    await post.deleteOne();
    res.status(200).json({
      message: 'Post Deleted!',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

/*****************************Update Post*****************************/
router.put('/:id', auth, async (req, res) => {
  // Grab the data from request body
  const { title, body } = req.body;

  // Check the fields are not empty
  if (!title || !body) {
    return res.status(400).json({
      error: 'Title and Body are required',
    });
  }

  // Check the ID is valid type
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'Invalid ID',
    });
  }

  // Check the post exists
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }

  // Check the user owns the post
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: 'Not Authorized' });
  }

  try {
    await post.updateOne({ title, body });
    res.status(200).json({
      success: 'Post Updated!',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export { router as postRoutes };
