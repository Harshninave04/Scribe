import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// We're creating a middleware called auth-

const auth = async (req, res, next) => {
  // Check if the request headers contain the authorization key
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Authorized token not found' });
  }

  // Grab the token from headers (taking the "Bearer" token away)
  const token = authorization.split(' ')[1];
  try {
    // Decode and extract the user id from token
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    // Save the user in request
    req.user = await User.findById(_id).select('_id');
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default auth;
