const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const config = require('../config.json')
const swagger = require('./router/swagger')
const routerPath = require('../common/routerPath.json')

const server = express()

server.use(express.json())
server.use(express.urlencoded({"extended": true}))

server.use(routerPath.swagger.basePath, swagger)


var options = {
  target: 'http://localhost:8001',
  changeOrigin: true
}
server.use('/', createProxyMiddleware(options));

server.listen(config.port)