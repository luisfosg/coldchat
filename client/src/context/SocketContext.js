import { createContext, useEffect } from 'react'

import useSocket from 'hooks/useSocket'

const Context = createContext({
  socket: null,
  setName: () => {}
})

export const SocketContextProvider = ({ children }) => {
  const socket = useSocket()

  useEffect(() => {
    if (socket) socket.nickname = ''
  }, [socket])

  const setNickname = name => {
    socket.nickname = name
  }

  return (
    <Context.Provider value={{ socket, setNickname }}>
      {children}
    </Context.Provider>
  )
}

export default Context
