const disconnect = ({ socket }) => {
  console.log(`${socket.id}: disconnected`)

  socket.disconnect()
}

export default disconnect
