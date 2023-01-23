import express, { Express } from 'express';
import dotenv from 'dotenv';
import http from 'http'
import { Server, Socket } from 'socket.io';

import { generateId } from './utils';

export interface SocketServerConfigOptions {
    port?: string | number;
    staticPath?: string;
    env?: 'production' | 'development'
}



class SocketServer {

    readonly id: string;
    private expressApp: Express;
    private httpServer: http.Server;
    private socketsServer: Server;
    private port: string | number;

    constructor(options?: SocketServerConfigOptions) {

        dotenv.config();

        this.expressApp = express()
        this.httpServer = http.createServer(this.expressApp)
        this.socketsServer = new Server(this.httpServer)
        this.id = generateId()
        this.port = options?.port || 3333

        if (options?.env === 'production' && options?.staticPath) {
            this.expressApp.use(express.static(options.staticPath))
        }

        this.socketsServer.on('connection', (socket: Socket) => {
            console.log(`Socket connected: id ${socket.id}`)

            socket.on('client_data', (payload: any) => {
                this.socketsServer.emit('server_data', payload)
            })

            socket.on('disconnect', (reason) => {
                console.log(`Socket disconnected. Id: ${socket.id}; reason: ${reason}`)
            })
        })
    }

    startServer() {
        this.httpServer.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}

export default SocketServer;