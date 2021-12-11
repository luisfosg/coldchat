import { useEffect } from 'react'
import Router from 'next/router'

import useLocalStorage from 'hooks/useLocalStorage'

import FormUser from 'components/FormUser'

export default function Home () {
  const [userName, setUserName] = useLocalStorage('userName')

  useEffect(() => {
    if (userName && userName !== '') Router.push('/chat')
  }, [userName])

  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser setUserName={setUserName} />
    </>
  )
}
