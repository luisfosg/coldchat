export const socketUserName = (socket, data, cb) => {
  socket.emit('nickname', {
    ...data
  }, cb)
}

export const getNicknames = (socket, cb) => {
  socket.emit('get-nicknames', {}, cb)
}
