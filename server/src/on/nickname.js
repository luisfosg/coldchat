/* eslint-disable node/no-callback-literal */
import { nanoid } from 'nanoid'

import { nicknames } from '../users.js'
import emitNicknames from '../emit/nicknames.js'

const newUser = ({ io, socket, nickname, cb }) => {
  socket.key = nanoid()
  socket.nickname = nickname.trim()
  socket.connectionNumber = 1

  nicknames[socket.nickname] = [socket]
  cb({ name: nickname, newKey: socket.key })
  emitNicknames(io)
}

const oldUser = ({ socket, nickname, key, cb }) => {
  if (nicknames[nickname][0].key !== key) return cb()
  const lastSocket = nicknames[nickname][nicknames[nickname].length - 1]

  socket.key = lastSocket.key
  socket.nickname = lastSocket.nickname
  socket.connectionNumber = lastSocket.connectionNumber + 1

  nicknames[nickname] = [...nicknames[nickname], socket]
  cb({ name: nickname })
}

const Nickname = ({ io, socket, data, cb }) => {
  const { nickname, key } = data
  if (typeof nickname !== 'string' || nickname === '') return cb()

  nickname in nicknames
    ? oldUser({ socket, nickname, key, cb })
    : newUser({ io, socket, nickname, cb })
}

export default Nickname
