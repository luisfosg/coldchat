import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000')

    setSocket(socketIo)

    function cleanup () {
      socketIo.disconnect()
    }
    return cleanup
  }, [])

  return socket
}

export default useSocket
