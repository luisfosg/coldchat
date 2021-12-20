import { useState } from 'react'
import clsx from 'clsx'

import styles from './FormMessage.module.css'

const button = clsx('nes-btn is-primary', styles.button)
const divField = clsx('nes-field', styles.inLine)

const FormMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState('')

  const handlechange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage({ msg: message })
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={ divField }>
        <input type="text" className="nes-input is-primary" placeholder="Mensaje" value={message} onChange={handlechange} />
        <button type="submit" className={ button }><i className="fas fa-caret-right"></i></button>
      </div>
    </form>
  )
}

export default FormMessage
