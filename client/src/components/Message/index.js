import clsx from 'clsx'

const Message = ({ msg, isRight = false }) => {
  const sectionMessage = clsx('message', {
    '-left': !isRight,
    '-right': isRight
  })

  const bodyMessage = clsx('nes-balloon', {
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
