import { useState, useEffect, useContext } from 'react'

import SocketContext from 'context/SocketContext'

const useMessages = () => {
  const { socket, nickname } = useContext(SocketContext)
  const [messages, setMessages] = useState([])

  const sendMessage = ({ msg }) => {
    socket.emit('send-message', { msg })
  }

  useEffect(() => {
    if (!socket) return

    const getMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data.msg])
    }
    socket.on('new message', getMessage)

    return () => {
      socket.off('new message', getMessage)
    }
  }, [nickname, socket])

  return {
    messages,
    sendMessage
  }
}

export default useMessages
