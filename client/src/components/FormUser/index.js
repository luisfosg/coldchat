import { useState, useContext, useRef } from 'react'
import clsx from 'clsx'

import SocketContext from 'context/SocketContext'

import Avatar from 'components/Avatar'

import styles from './FormUser.module.css'

const FormUser = () => {
  const { login } = useContext(SocketContext)
  const [user, setUser] = useState('')
  const elementRef = useRef(null)

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user === '') return
    login(user, elementRef)
  }

  const styleButton = clsx('nes-btn is-primary', styles.buttonForm)
  const styleInput = clsx('nes-input')
  const isButtonDisabled = user === ''

  return (
    <>
      <section>
        <dialog className="nes-dialog is-rounded is-error" id="dialog-rounded" ref={elementRef}>
          <form method="dialog">
            <p className="title">El Usuario ya esta conectado!</p>
            <button className="nes-btn is-error">OK</button>
          </form>
        </dialog>
      </section>
      <div className={styles.container}>
        <div className={styles.containerAvatar}>
          <Avatar user={user}/>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="nes-field">
            <label htmlFor="name_field">Coloca tu Nick</label>
            <input type="text" id="name_field" autoFocus className={styleInput}
              placeholder="Mi Nick"
              value={user}
              onChange={handleUser}
            />
          </div>
          <button type="submit" disabled={isButtonDisabled} className={ styleButton }>Entrar</button>
        </form>
      </div>
    </>
  )
}

export default FormUser
