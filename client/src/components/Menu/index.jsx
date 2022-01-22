import { useContext } from 'react'
import clsx from 'clsx'

import useTheme from '@/hooks/useTheme'

import SocketContext from '@/context/SocketContext'
import { themeLight, themeDark } from '@/styles/themes'

import styles from './Menu.module.css'

const buttonClass = clsx(styles.buttons, 'nes-btn')
const buttonLogout = clsx(buttonClass, 'is-error')
const buttonDarkmode = clsx(buttonClass, 'is-warning')

const Menu = () => {
  const { theme, setTheme } = useTheme()
  const { logout } = useContext(SocketContext)

  const handleDarkmode = () => {
    setTheme(theme.name === themeLight.name ? themeDark : themeLight)
  }

  return (
    <>
      <button type="button" onClick={logout} className={ buttonLogout }>Cerrar Sesión</button>
      <button type="button" onClick={handleDarkmode} className={ buttonDarkmode }>Mode Dark</button>
    </>
  )
}

export default Menu
