const roomName = (io, socket, data) => {
  io.emit('newName', data)
}

export default roomName
