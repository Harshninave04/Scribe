import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import 'dotenv/config.js';
// app.use(express.json());
const router = express.Router();

/*****************************Creating JSON WEB TOKEN [JWT]*****************************/

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: '10d', // expires in 24 hours
  });
};

/*****************************Register user route*****************************/
router.post('/', async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required for registering user',
    });
  }

  // Check if the email is already exists

  const exist = await User.findOne({ email: email });
  if (exist) {
    return res.status(400).json({
      error: 'Email already exists',
    });
  }

  // Hashed the password

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ email, password: hashedPassword });
    // Create JSON web token
    const token = createToken(user._id);
    // Send the response
    res.status(200).json({
      message: 'User Created!',
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Try again one more time',
    });
  }
});

/*****************************Login user route*****************************/
router.post('/login', async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required for login',
    });
  }

  // Check if the email is already exists

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: 'Incorrect email',
    });
  }

  // Check if the password is correct

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({
      error: 'Incorrect password',
    });
  }

  try {
    // Create JSON web token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export { router as userRoutes };
