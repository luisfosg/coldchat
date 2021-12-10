import { socket } from './io'

export const userName = (userName, cb) => {
  socket.emit('userName', {
    userName
  }, cb)
}
