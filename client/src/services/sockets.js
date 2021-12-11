export const socketUserName = (socket, data, cb) => {
  socket.emit('userName', {
    userName: data.userName
  }, cb)
}
