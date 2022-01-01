import { Fragment } from 'react'

import clsx from 'clsx'

import styles from './Message.module.css'

function SetUrl ({ url }) {
  return <a target="_blank" href={url} rel="noreferrer" >{ url }</a>
}

function Urlify ({ text }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const args = text.split(urlRegex)

  return args.map((arg, index) => {
    if (urlRegex.test(arg)) {
      return <SetUrl key={index} url={arg} />
    } else {
      return <Fragment key={index}>{arg}</Fragment>
    }
  })
}

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
        <p><Urlify text={msg} /></p>
      </div>
    </section>
  )
}

export default Message
