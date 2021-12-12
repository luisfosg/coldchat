import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'

const Chat = () => {
  const { socket } = useContext(SocketContext)
  const { nameUser } = socket || ''

  useEffect(() => {
    if (!nameUser || nameUser === '') Router.push('/')
  }, [nameUser])

  return (
    <div>
      { nameUser }
    </div>
  )
}

export default Chat
