/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from 'react'
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
  const [nickname, setNickname] = useState('')

  const [nicknameStorage, setNicknameStorage] = useLocalStorage('username')
  const [key, setKey] = useLocalStorage('key')

  useEffect(() => {
    if (!socket) return
    if (!nicknameStorage || nicknameStorage === '') return

    socketUserName(socket, { nickname: nicknameStorage, key }, ({ name, newKey } = {}) => {
      if (!name) {
        setNicknameStorage('')
        setKey('')
        return Router.push('/')
      }

      if (newKey) setKey(newKey)
      setNickname(name)
      Router.push('/chat')
    })
  }, [socket])

  const login = (nickname, elementRef) => {
    socketUserName(socket, { nickname }, ({ name, newKey } = {}) => {
      if (!name) return elementRef.current.showModal()

      setNickname(name)
      setNicknameStorage(name)
      setKey(newKey || '')

      Router.push('/chat')
    })
  }

  const logout = () => {
    setNickname('')
    setNicknameStorage('')
    setKey('')

    socket.emit('logout')
  }

  return (
    <Context.Provider value={{ socket, nickname, login, logout }}>
      {children}
    </Context.Provider>
  )
}

export default Context
