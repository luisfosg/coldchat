import { nicknames } from '../users.js'

const userName = ({ socket, data, cb }) => {
  if (data.userName in nicknames) return cb()
  if (typeof data.userName !== 'string' || data.userName === '') return cb()

  socket.nickname = data.userName.trim()
  nicknames[socket.nickname] = socket

  cb(data.userName)
}

export default userName
