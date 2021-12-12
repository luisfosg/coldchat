import { useState, useContext, useRef } from 'react'
import Router from 'next/router'
import clsx from 'clsx'

import SocketContext from 'context/SocketContext'
import { socketUserName } from 'services/sockets'

import Avatar from 'components/Avatar'

import styles from './FormUser.module.css'

const FormUser = () => {
  const { socket, setNickname } = useContext(SocketContext)
  const [user, setUser] = useState('')
  const elementRef = useRef(null)

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user === '') return

    socketUserName(socket, { nickname: user }, (name) => {
      if (!name) return elementRef.current.showModal()

      setNickname(name)
      Router.push('/chat')
    })
  }

  const styleButton = clsx('nes-btn is-primary', styles.buttonForm)
  const styleInput = clsx('nes-input')

  return (
    <>
      <section>
        <dialog className="nes-dialog is-rounded is-error" id="dialog-rounded" ref={elementRef}>
          <form method="dialog">
            <p className="title">El Usuario ya Existe!</p>
            <button className="nes-btn is-error">OK</button>
          </form>
        </dialog>
      </section>
      <div className={styles.container}>
        <Avatar user={user}/>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="nes-field">
            <label htmlFor="name_field">Coloca tu Nick</label>
            <input type="text" id="name_field" className={styleInput}
              placeholder="Mi Nick"
              value={user}
              onChange={handleUser}
            />
          </div>
          <button type="submit" className={ styleButton }>Entrar</button>
        </form>
      </div>
    </>
  )
}

export default FormUser
