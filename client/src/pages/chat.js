import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'

const Chat = () => {
  const { socket } = useContext(SocketContext)
  const { nickname } = socket || ''

  useEffect(() => {
    if (!nickname || nickname === '') Router.push('/')
  }, [nickname])

  return (
    <div>
      { nickname }
    </div>
  )
}

export default Chat
