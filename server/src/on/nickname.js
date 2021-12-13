import { nicknames } from '../users.js'
import emitNicknames from '../emit/nicknames.js'

const Nickname = ({ io, socket, data, cb }) => {
  const { nickname } = data

  if (nickname in nicknames) return cb()
  if (typeof nickname !== 'string' || nickname === '') return cb()

  cb(nickname)
  socket.nickname = nickname.trim()
  nicknames[socket.nickname] = socket
  emitNicknames(io)
}

export default Nickname
