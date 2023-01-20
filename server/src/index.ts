import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

import { generateId } from './utils';

dotenv.config();

const app = express();

const port = process.env.PORT || 3333;

const production = process.env.NODE_ENV === 'production'
console.log(process.env.NODE_ENV)

if (production) {
  app.use(express.static(path.join(__dirname, 'public')))
} else {
  app.get('/', async (req, res) => {
    res.status(200).send('Server running')
  });
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});