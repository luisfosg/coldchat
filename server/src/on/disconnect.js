import { nicknames } from '../users.js'

const disconnect = ({ socket }) => {
  if (!socket.nickname) return console.log(`${socket.id}: disconnected`)
  delete nicknames[socket.nickname]

  console.log(`${socket.nickname}: disconnected`)
}

export default disconnect
