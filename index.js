// Brune-dawg made this.
// DONT FORGET TO COMMENT :) - Brent
// ok - Chase

const http = require('http')
const app = require('./lib/app')

const server = http.createServer(app)

server.listen(9000, () => {
  console.log(`Listening to server on port: ${server.address().port}`)
})
