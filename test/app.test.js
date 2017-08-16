const app = require('../lib/app')
const fetch = require('node-fetch')
const assert = require('assert')
const http = require('http')

describe('app route', function () {
  let port = 9000
  let server
  let url = `http://localhost:${port}`

  before(function () {
    server = http.createServer(app)
    server.listen(port)
  })

  after(function () {
    server.close.bind(server)
    server.close()
  })

  it('tests the GET route', function (done) {
    fetch(`${url}/hello`, { method: 'GET' })
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        assert.equal(jsonResponse.message, 'hello world')
        done()
      })
      .catch(done)
  })

  it('tests the POST route', function (done) {
    let body = { message: 'did you get this?' }
    fetch(`${url}/hello`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        return response.json()
      }).then(function (jsonResponse) {
        assert.equal(jsonResponse.message, 'got it')
        assert.deepEqual(jsonResponse.original, body)
        done()
      })
      .catch(done)
  })

  it('tests the PUT route', function (done) {
    let body = { message: 'a new update!' }
    fetch(`${url}/hello`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        assert.equal(jsonResponse.message, 'got the update')
        assert.deepEqual(jsonResponse.original, body)
        done()
      })
      .catch(done)
  })

  it('tests the DELETE route', function (done) {
    let id = '1234567890'
    fetch(`${url}/hello/${id}`, {
      method: 'DELETE'
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        assert.equal(jsonResponse.message, `ok, will delete right away: ${id}`)
        done()
      })
      .catch(done)
  })
})
