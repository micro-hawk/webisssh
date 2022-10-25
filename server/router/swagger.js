const express = require('express')

const routerPath = require('../../common/routerPath.json')
const swaggerController = require('../controller/swagger')

const router = express.Router()

router.post(routerPath.swagger.proxy, (req, res) => {
  swaggerController.proxyCall(req, res)
})

router.post(routerPath.swagger.addServer, (req, res) => {
  swaggerController.addServer(req, res)
})

router.get(routerPath.swagger.getAllServers, (req, res) => {
  swaggerController.getAllServers(req, res)
})

router.delete(routerPath.swagger.deleteServer, (req, res) => {
  swaggerController.deleteServer(req, res)
})

module.exports = router