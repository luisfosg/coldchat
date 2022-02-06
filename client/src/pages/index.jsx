import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import useTheme from '@/hooks/useTheme'

import SocketContext from '@/context/SocketContext'
import FormUser from '@/components/FormUser'
import Loading from '@/components/Loading'

import { themeLight, themeDark } from '@/styles/themes'

const buttonDarkmode = clsx('nes-btn', 'is-warning')

export default function Home () {
  const { nickname, loading } = useContext(SocketContext)
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    if (nickname && nickname !== '') navigate('/chat')
  }, [nickname])

  const handleDarkmode = () => {
    setTheme(theme.name === themeLight.name ? themeDark : themeLight)
  }

  if (loading || (nickname && nickname !== '')) return <Loading />
  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser/>
      <button type="button" onClick={handleDarkmode} className={ buttonDarkmode }>Mode Dark</button>
    </>
  )
}
