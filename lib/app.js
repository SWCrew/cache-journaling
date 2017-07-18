const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/hello', (req, res, next) => {
  res.send({ body: 'hello world' })
})

module.exports = app