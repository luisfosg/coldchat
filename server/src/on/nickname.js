import { nicknames } from '../users.js'

const Nickname = ({ socket, data, cb }) => {
  const { nickname } = data

  if (nickname in nicknames) return cb()
  if (typeof nickname !== 'string' || nickname === '') return cb()

  socket.nickname = nickname.trim()
  nicknames[socket.nickname] = socket

  cb(nickname)
}

export default Nickname
