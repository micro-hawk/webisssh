const express = require('express')
const path = require('path')

const config = require('../config.json')
const swagger = require('./router/swagger')
const routerPath = require('../common/routerPath.json')

const server = express()

server.use(express.json())
server.use(express.urlencoded({"extended": true}))

server.use(routerPath.swagger.basePath, swagger)

server.use(express.static(path.join(__dirname, '..', 'dist')))

server.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

server.listen(config.port, () => {
  console.log(`Server started at Port: ${config.port}`)
})