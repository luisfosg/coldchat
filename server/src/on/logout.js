import colors from 'colors/safe'

import { nicknames } from '../users.js'
import emitNicknames from '../emit/nicknames.js'

const disconnect = ({ io, socket }) => {
  const { cyan, green } = colors

  nicknames[socket.nickname].forEach((socketId, value) => {
    if (socketId.id === socket.id) {
      nicknames[socket.nickname].splice(value, 1)
      if (nicknames[socket.nickname].length === 0) delete nicknames[socket.nickname]
    }
  })

  console.log(cyan(`${socket.nickname}`), green('=>'), 'logout')
  emitNicknames(io)
}

export default disconnect
