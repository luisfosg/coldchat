import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import SocketContext from '@/context/SocketContext'

import Main from '@/components/Main'
import ChatComponent from '@/components/Chat'
import Loading from '@/components/Loading'

import styles from '@/styles/chat.module.css'

const Chat = () => {
  const { nickname, loading } = useContext(SocketContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!nickname || nickname === '') navigate('/')
  }, [nickname])

  if (loading || !nickname || nickname === '') return <Loading />
  return (
    <>
      <section className={styles.wrapper}>
        <Main />
        <div className={styles.column2}>
          <header className={styles.header}>
            <h1>Chat</h1>
          </header>
          <section className={styles.chat}>
            <ChatComponent />
          </section>
        </div>
      </section>
    </>
  )
}

export default Chat
