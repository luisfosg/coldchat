import { useRef, useEffect, useContext } from 'react'

import SocketContext from 'context/SocketContext'
import useMessages from 'hooks/useMessages'

import FormMessage from 'components/FormMessage'
import Message from 'components/Message'

import styles from './Chat.module.css'

const Chat = () => {
  const scrollElement = useRef(null)
  const { nickname } = useContext(SocketContext)
  const { messages, sendMessage } = useMessages()

  useEffect(() => {
    if (scrollElement.current) {
      scrollElement.current.scrollTop = scrollElement.current.scrollHeight
    }
  }, [messages, scrollElement])

  return (
    <div className={styles.chatContainer}>
      <div className={styles['messages-container']} ref={scrollElement} >
        <section className="message-list">

          {
            messages.map((msgInfo, index) => (
              <Message key={index} msg={msgInfo.msg} owner={nickname === msgInfo.nickname} />
            ))
          }

        </section>
      </div>
      <FormMessage sendMessage={sendMessage} />
    </div>
  )
}

export default Chat
