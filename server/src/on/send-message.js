const sendMessage = ({ io, data }) => {
  const date = Date.now()

  io.sockets.emit('new message', {
    ...data,
    date
  })
}

export default sendMessage
