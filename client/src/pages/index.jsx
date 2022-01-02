import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import SocketContext from '@/context/SocketContext'
import FormUser from '@/components/FormUser'
import Loading from '@/components/Loading'

export default function Home () {
  const { nickname, loading } = useContext(SocketContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (nickname && nickname !== '') navigate('/chat')
  }, [nickname])

  if (loading || (nickname && nickname !== '')) return <Loading />
  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser/>
    </>
  )
}
