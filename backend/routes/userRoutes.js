import express from 'express';
import User from '../models/userModel.js';
// app.use(express.json());
const router = express.Router();

/*****************************Register user route*****************************/
router.post('/', async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required for registering user',
    });
  }

  try {
    const user = await User.create({ email, password });
    res.status(200).json({
      message: 'User Created!',
      User,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

/*****************************Login user route*****************************/
router.post('/login', function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required for login',
    });
  }
});
export { router as userRoutes };
