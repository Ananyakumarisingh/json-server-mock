// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
require('dotenv')

server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})
