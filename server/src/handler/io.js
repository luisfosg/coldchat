import { readdirSync } from 'fs'
import { join } from 'path'

import { io } from '../io'

io.on('connection', async (socket) => {
  console.log('a user connected')

  for (const eventFile of readdirSync(join(__dirname, '../on'))) {
    if (!eventFile.endsWith('.js')) continue

    const eventName = eventFile.replace('.js', '')
    const event = await import(`../on/${eventFile}`)

    socket.on(eventName, (...args) => event.default({
      io, socket, ...args
    }))
  }
})
