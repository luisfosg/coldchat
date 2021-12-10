import { Server as SocketServer } from 'socket.io'
import http from 'http'

import app from './app'

const httpServer = http.createServer(app)
export const io = new SocketServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

export default httpServer
