import FormMessage from 'components/FormMessage'
import Message from 'components/Message'

import styles from './Chat.module.css'

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles['messages-container']}>
        <section className="message-list">

          <Message isRight />
          <Message />
          <Message isRight />
          <Message isRight />
          <Message />
          <Message />
          <Message isRight />
          <Message />
          <Message isRight/>

        </section>
      </div>
      <FormMessage />
    </div>
  )
}

export default Chat
