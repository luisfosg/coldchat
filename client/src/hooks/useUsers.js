import { useState, useEffect, useContext } from 'react'

import SocketContext from 'context/SocketContext'

import { getNicknames } from 'services/sockets'

const useUsers = () => {
  const { socket } = useContext(SocketContext)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!socket) return
    getNicknames(socket, (users) => {
      setUsers(users.filter((user) => user !== socket.nickname))
    })
  }, [socket])

  useEffect(() => {
    if (!socket) return

    const updateUsers = (users) => {
      setUsers(users.filter((user) => user !== socket.nickname))
    }
    socket.on('nicknames', updateUsers)

    return () => {
      socket.off('nicknames', updateUsers)
    }
  }, [socket])

  return {
    users
  }
}

export default useUsers
