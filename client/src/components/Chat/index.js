import FormMessage from 'components/FormMessage'

import styles from './Chat.module.css'

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles['messages-container']}/>
      <FormMessage />
    </div>
  )
}

export default Chat
