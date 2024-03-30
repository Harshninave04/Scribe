import express from 'express';
// app.use(express.json());
const router = express.Router();

/*****************************Register user route*****************************/
router.post('/', function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: 'Username and password are required',
    });
  }
});

/*****************************Login user route*****************************/
router.post('/login', function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: 'Username and password are required',
    });
  }
});
export { router as userRoutes };
