import express from 'express'

const app = express()

app.set('PORT', process.env.PORT || 4000)

app.get('/', (_req, res) => {
  res.send('<h1>Hello World!</h1>')
})

export default app
