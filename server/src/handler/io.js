import colors from 'colors/safe'

import { readdirSync } from 'fs'
import { join } from 'path'

import { io } from '../io'

io.on('connection', async (socket) => {
  const { cyan, green } = colors
  console.log(cyan(`${socket.id}`), green('=>'), 'New connection')

  for (const eventFile of readdirSync(join(__dirname, '../on'))) {
    if (!eventFile.endsWith('.js')) continue

    const eventName = eventFile.replace('.js', '')
    const event = await import(`../on/${eventFile}`)

    socket.on(eventName, (data, cb) => event.default({ io, socket, data, cb }))
  }
})
