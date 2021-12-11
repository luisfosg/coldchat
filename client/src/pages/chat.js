import { useEffect } from 'react'
import Router from 'next/router'
import useLocalStorage from 'hooks/useLocalStorage'

const Chat = () => {
  const [userName] = useLocalStorage('userName')

  useEffect(() => {
    if (!userName || userName === '') Router.push('/')
  }, [userName])

  return (
    <div>
      { userName }
    </div>
  )
}

export default Chat
