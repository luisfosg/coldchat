import clsx from 'clsx'

import styles from './Message.module.css'

const Message = ({ msg, isRight = false }) => {
  const sectionMessage = clsx('message', styles.containerMessage, {
    '-left': !isRight,
    '-right': isRight
  })

  const bodyMessage = clsx('nes-balloon', styles.bodyMessage, {
    'from-left': !isRight,
    'from-right': isRight
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
