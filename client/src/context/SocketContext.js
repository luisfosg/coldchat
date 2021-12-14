/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from 'react'
import Router from 'next/router'

import { socketUserName } from 'services/sockets'

import useSocket from 'hooks/useSocket'
import useLocalStorage from 'hooks/useLocalStorage'

const Context = createContext({
  socket: null,
  setName: () => {}
})

export const SocketContextProvider = ({ children }) => {
  const socket = useSocket()

  const [nickname, setNickname] = useLocalStorage('username')
  const [key, setKey] = useLocalStorage('key')

  useEffect(() => {
    if (!socket) return
    if (!nickname || nickname === '') return

    socketUserName(socket, { nickname, key }, ({ name, newKey } = {}) => {
      if (!name) {
        setNickname('')
        setKey('')
        return Router.push('/')
      }

      if (newKey) setKey(newKey)
      Router.push('/chat')
    })
  }, [socket])

  const login = (nickname, elementRef) => {
    socketUserName(socket, { nickname }, ({ name, newKey } = {}) => {
      if (!name) return elementRef.current.showModal()

      setNickname(name)
      setKey(newKey || '')

      Router.push('/chat')
    })
  }

  return (
    <Context.Provider value={{ socket, nickname, setNickname, login }}>
      {children}
    </Context.Provider>
  )
}

export default Context
