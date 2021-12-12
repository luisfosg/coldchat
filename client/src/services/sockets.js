export const socketUserName = (socket, data, cb) => {
  socket.emit('nickname', {
    ...data
  }, cb)
}
