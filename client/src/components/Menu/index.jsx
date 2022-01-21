import { useContext } from 'react'
import clsx from 'clsx'

import SocketContext from '@/context/SocketContext'

import styles from './Menu.module.css'

const buttonClass = clsx(styles.buttons, 'nes-btn')
const buttonLogout = clsx(buttonClass, 'is-error')
const buttonDarkmode = clsx(buttonClass, 'is-warning')

const Menu = () => {
  const { logout } = useContext(SocketContext)

  const handleDarkmode = () => {}

  return (
    <>
      <button type="button" onClick={logout} className={ buttonLogout }>Cerrar Sesión</button>
      <button type="button" onClick={handleDarkmode} className={ buttonDarkmode }>Mode Dark</button>
    </>
  )
}

export default Menu
