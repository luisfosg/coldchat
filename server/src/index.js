import app from './app.js'
import server from './io.js'

server.listen(app.get('PORT'), () => {
  import('./handler/io')

  console.log(`Server running on port ${app.get('PORT')}`)
})
