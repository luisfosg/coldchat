import { useState, useContext } from 'react'
import Router from 'next/router'
import clsx from 'clsx'

import SocketContext from 'context/SocketContext'
import { socketUserName } from 'services/sockets'

import Avatar from 'components/Avatar'

import styles from './FormUser.module.css'

const FormUser = () => {
  const { socket, setName } = useContext(SocketContext)
  const [user, setUser] = useState('')

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user === '') return

    socketUserName(socket, { userName: user }, (name) => {
      setName(name)
      Router.push('/chat')
    })
  }

  const styleButton = clsx('nes-btn is-primary', styles.buttonForm)
  const styleInput = clsx('nes-input')

  return (
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
  )
}

export default FormUser
