import { useEffect, useContext } from 'react'
import Router from 'next/router'

import SocketContext from 'context/SocketContext'
import FormUser from 'components/FormUser'

export default function Home () {
  const { nickname, loading } = useContext(SocketContext)

  useEffect(() => {
    if (nickname && nickname !== '') Router.push('/chat')
  }, [nickname])

  if (loading || (nickname && nickname !== '')) return <div></div>
  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser/>
    </>
  )
}
