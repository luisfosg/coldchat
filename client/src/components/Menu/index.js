import { useContext } from 'react'
import SocketContext from '@/context/SocketContext'

const Menu = () => {
  const { logout } = useContext(SocketContext)

  return (
    <>
      <button type="button" onClick={logout} className="nes-btn is-error">Cerrar Sesión</button>
    </>
  )
}

export default Menu
