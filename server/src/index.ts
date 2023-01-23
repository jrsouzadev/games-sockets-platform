import path from 'path'
import SocketServer, { SocketServerConfigOptions } from "./server";

const config: SocketServerConfigOptions = {
  port: process.env.PORT || 3333,
  staticPath: path.join(__dirname, 'public'),
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}

const server = new SocketServer(config)

server.startServer()