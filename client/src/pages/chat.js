import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'

import Users from 'components/Users'

import styles from 'styles/chat.module.css'

const Chat = () => {
  const { socket } = useContext(SocketContext)
  const { nickname } = socket || ''

  useEffect(() => {
    if (!nickname || nickname === '') Router.push('/')
  }, [nickname])

  return (
    <section className={styles.main}>
      <div className={styles.containerUsers} >
        <Users />
      </div>
    </section>
  )
}

export default Chat
