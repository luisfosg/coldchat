import colors from 'colors/safe'

import app from './app.js'
import server from './io.js'

server.listen(app.get('PORT'), async () => {
  await import('./handler/io')

  console.log(colors.gray(`\nServer running on port ${app.get('PORT')}\n`))
})
