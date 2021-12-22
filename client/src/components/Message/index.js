import clsx from 'clsx'

import styles from './Message.module.css'

const Message = ({ msg, owner }) => {
  const sectionMessage = clsx('message',
    owner ? styles.containerMessageRight : styles.containerMessageLeft,
    {
      '-left': !owner,
      '-right': owner
    }
  )

  const bodyMessage = clsx('nes-balloon', styles.bodyMessage, {
    'from-left': !owner,
    'from-right': owner
  })

  return (
    <section className={ sectionMessage }>
      <div className={ bodyMessage }>
        <p>{ msg }</p>
      </div>
    </section>
  )
}

export default Message
