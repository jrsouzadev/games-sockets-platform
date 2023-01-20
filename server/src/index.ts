import express from 'express';
import dotenv from 'dotenv';

import { generateId } from './utils';

dotenv.config();

const app = express();

const port = process.env.PORT || 3333;

const production = process.env.NODE_ENV === 'production'

if (production) {
  app.use(express.static(__dirname + '../client/dist'))
} else {
  app.get('/', async (req, res) => {
    res.send('Server running')
  });
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});