import { useState } from 'react'
import clsx from 'clsx'

import useTheme from '@/hooks/useTheme'

import styles from './FormMessage.module.css'

const button = clsx('nes-btn is-primary is-dark', styles.button)
const divField = clsx('nes-field', styles.inLine)

const FormMessage = ({ sendMessage }) => {
  const { theme } = useTheme()

  const [message, setMessage] = useState('')

  const handlechange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (message === '') return
    sendMessage({ msg: message })
    setMessage('')
  }

  const inputClass = clsx('nes-input is-primary', theme.name === 'dark' ? 'is-dark' : '')

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={ divField }>
        <input type="text" className={inputClass} placeholder="Mensaje" value={message} onChange={handlechange} />
        <button type="submit" className={ button }><i className="fas fa-caret-right"></i></button>
      </div>
    </form>
  )
}

export default FormMessage
