import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import http from 'http'
import { Server, Socket } from 'socket.io';

// import { generateId } from './utils';

dotenv.config();
const production = process.env.NODE_ENV === 'production'

const expressApp = express();
const httpServer = http.createServer(expressApp)
const socketsServer = new Server(httpServer)

const port = production ? process.env.PORT || 3333 : 3333;


if (production) {
  expressApp.use(express.static(path.join(__dirname, 'public')))
} else {
  expressApp.get('/', async (req, res) => {
    res.status(200).send('Server running')
  });
};

socketsServer.on('connection', (socket: Socket) => {
  console.log(`Socket connected: id ${socket.id}`)
})

socketsServer.on('disconnect', (socket: Socket) => {
  console.log(`Socket disconnected: id ${socket.id}`)
})

httpServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});