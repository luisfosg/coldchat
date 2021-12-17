import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'

import Users from 'components/Users'

import styles from 'styles/chat.module.css'
import Profile from 'components/Profile'

const Chat = () => {
  const { nickname, loading } = useContext(SocketContext)

  useEffect(() => {
    if (!nickname || nickname === '') Router.push('/')
  }, [nickname])

  if (loading || !nickname || nickname === '') return <div></div>
  return (
    <section className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.profileContainer}>
          <Profile />
        </div>
      </div>
      <div className={styles.main}>
        <section className={styles.containerUsers}>
          <Users />
        </section>
      </div>
    </section>
  )
}

export default Chat
