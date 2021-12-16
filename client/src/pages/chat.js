import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'

import Users from 'components/Users'

import styles from 'styles/chat.module.css'

const Chat = () => {
  const { nickname, loading } = useContext(SocketContext)

  useEffect(() => {
    if (!nickname || nickname === '') Router.push('/')
  }, [nickname])

  if (loading || !nickname || nickname === '') return <div></div>
  return (
    <section className={styles.main}>
      <div className={styles.containerUsers} >
        <Users />
      </div>
    </section>
  )
}

export default Chat
