import express from 'express';
import Post from '../models/postModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, body } = req.body;

  // Check the fields are not empty
  if (!title || !body) {
    return res.status(400).json({
      error: 'Title and Body are required',
    });
  }

  try {
    const post = await Post.create({ title, body });
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

export { router as postRoutes };
