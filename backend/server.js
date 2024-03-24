import express from 'express';
import { postRoutes } from './routes/postRoutes.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.status(404).send('Welcome to App');
});

mongoose
  .connect('mongodb+srv://harsh:harsh9359@cluster0.axgoi9y.mongodb.net/demo_db')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => {
      console.log('listening on port 4000');
    });
  })
  .catch((err) => console.log(err));
