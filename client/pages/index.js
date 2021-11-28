import React, { useState } from 'react'
import Head from 'next/head'
import { io } from 'socket.io-client'

import styles from '../styles/Home.module.css'

const socket = io('http://localhost:4000')

export default function Home () {
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    if (name === '') return
    socket.emit('roomName', {
      name
    })

    setName('')
  }

  socket.on('newName', (data) => {
    setList(list.concat(data.name))
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>{ name || 'ColdChat' }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Welcome { name }
        </h1>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit} >Send Name</button>

        <ul>
          {
            list.map((name, index) => (
              <li key={index}>{name}</li>
            ))
          }
        </ul>
    </div>
  )
}
