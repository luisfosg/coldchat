import { nicknames } from '../users.js'

const Nicknames = (io) => {
  io.sockets.emit('nicknames', Object.keys(nicknames))
}

export default Nicknames
