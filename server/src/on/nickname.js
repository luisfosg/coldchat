/* eslint-disable node/no-callback-literal */
import { nanoid } from 'nanoid'
import colors from 'colors/safe'

import { nicknames } from '../users.js'
import emitNicknames from '../emit/nicknames.js'

const { cyan, green } = colors

const newUser = ({ io, socket, nickname, cb }) => {
  socket.key = nanoid()
  socket.nickname = nickname.trim()

  nicknames[socket.nickname] = [socket]
  cb({ name: nickname, newKey: socket.key })
  emitNicknames(io)

  return true
}

const oldUser = ({ socket, nickname, key, cb }) => {
  const firstSocket = nicknames[nickname][0]
  if (firstSocket.key !== key) return cb()

  socket.key = firstSocket.key
  socket.nickname = firstSocket.nickname

  nicknames[nickname] = [...nicknames[nickname], socket]
  cb({ name: nickname })

  return true
}

const Nickname = ({ io, socket, data, cb }) => {
  const { nickname, key } = data
  if (typeof nickname !== 'string' || nickname === '') return cb()

  const isCorrect = nickname in nicknames
    ? oldUser({ socket, nickname, key, cb })
    : newUser({ io, socket, nickname, cb })

  if (isCorrect) console.log(cyan(`${socket.id}`), green('=>'), `new name: ${socket.nickname}`)
}

export default Nickname
