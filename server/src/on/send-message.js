const sendMessage = ({ io, data }) => {
  io.sockets.emit('new message', {
    msg: data.msg
  })
}

export default sendMessage
