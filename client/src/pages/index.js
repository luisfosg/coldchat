import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'
import FormUser from 'components/FormUser'

export default function Home () {
  const { socket } = useContext(SocketContext)
  const { nameUser } = socket || ''

  useEffect(() => {
    if (nameUser || nameUser !== '') Router.push('/chat')
  }, [nameUser])

  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser/>
    </>
  )
}
