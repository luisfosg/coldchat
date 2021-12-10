const disconnect = ({ socket }) => {
  console.log('user disconnected')

  socket.disconnect()
}

export default disconnect
