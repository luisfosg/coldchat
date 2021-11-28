import { Server as SocketServer } from 'socket.io'
import http from 'http'

import app from './app'

const httpServer = http.createServer(app)
const io = new SocketServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('roomName', (data) => {
    io.emit('newName', data)
  })
})

export default httpServer
