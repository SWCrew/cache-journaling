const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser').json()

app.use(morgan('dev'))

app
  .get('/hello', function (req, res, next) {
    res.send({ message: 'hello world' })
  })
  .post('/hello', bodyParser, function (req, res, next) {
    res.send({ message: 'got it', original: req.body })
  })
  .put('/hello', bodyParser, function (req, res, next) {
    res.send({ message: 'got the update', original: req.body })
  })
  .delete('/hello/:id', bodyParser, function (req, res, next) {
    res.send({ message: `ok, will delete right away: ${req.params.id}` })
  })

module.exports = app