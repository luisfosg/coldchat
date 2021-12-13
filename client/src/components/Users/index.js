import { useState, useEffect, useContext } from 'react'

import SocketContext from 'context/SocketContext'

import User from 'components/User'

import styles from './Users.module.css'

const Users = () => {
  const { socket } = useContext(SocketContext)
  const [users, setUsers] = useState([])

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

  if (users.length === 0) {
    return (
      <div>No hay ningún Usuario Conectado</div>
    )
  }

  return (
    <div className={styles.containerUsers}>
      {
        users.map((user) => (
          <User key={user} user={user} />
        ))
      }
    </div>
  )
}

export default Users
