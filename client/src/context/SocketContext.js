import { createContext, useEffect } from 'react'

import useSocket from 'hooks/useSocket'

const Context = createContext({
  socket: null,
  setName: () => {}
})

export const SocketContextProvider = ({ children }) => {
  const socket = useSocket()

  useEffect(() => {
    if (socket) socket.nameUser = ''
  }, [socket])

  const setName = name => {
    socket.nameUser = name
  }

  return (
    <Context.Provider value={{ socket, setName }}>
      {children}
    </Context.Provider>
  )
}

export default Context
