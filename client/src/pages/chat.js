import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import SocketContext from '@/context/SocketContext'

import Main from '@/components/Main'
import ChatComponent from '@/components/Chat'
import Loading from '@/components/Loading'

import styles from '@/styles/chat.module.css'

const Chat = () => {
  const { nickname, loading } = useContext(SocketContext)

  useEffect(() => {
    if (!nickname || nickname === '') Router.push('/')
  }, [nickname])

  if (loading || !nickname || nickname === '') return <Loading />
  return (
    <>
      <Head>
        <title>Cold Chat | { nickname }</title>
      </Head>
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
