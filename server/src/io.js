import { Server as SocketServer } from 'socket.io'
import http from 'http'

import app from './app'

const httpServer = http.createServer(app)
const io = new SocketServer(httpServer)

io.on('connection', () => {
  console.log('a user connected')
})

export default httpServer
