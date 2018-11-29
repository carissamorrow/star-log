let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))
//serves the front end of the app
server.use(express.static(__dirname + '/public'))

let auth = require('./server-assets/auth/routes')

server.use(auth.session)
server.use('/account', auth.router)
server.use('*', (req, res, next) => {
  if (req.method == 'get') {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error('Please Login to Continue'))
  }
  if (req.method == "post") {
    req.body.creatorId = req.session.uid
  }
  next()
})

let ship = require("./server-assets/routes/ships")
let logs = require('./server-assets/routes/logs')

server.use(ship.router)
server.use(logs.router)



server.get('*', (req, res, next) => {
  res.status(404).send({
    error: "No Matching Routes"
  })
})

server.listen(port, () => {
  console.log('Server running on port: ', port)
})