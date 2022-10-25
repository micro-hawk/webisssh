const swaggerService = require('../service/swagger')
const swaggerController = {}

swaggerController.proxyCall = (req, res) => {
  const body = req.body
  swaggerService.proxyCall(body, data => {
    res.send(data)
  })
}

swaggerController.addServer = (req, res) => {
  const body = req.body
  swaggerService.addServer(body, data => {
    res.send(data)
  })
}

swaggerController.getAllServers = (req, res) => {
  swaggerService.getAllServers(data => {
    res.send(data)
  })
}

swaggerController.deleteServer = (req, res) => {
  const id = req.body.id
  swaggerService.deleteServer(id, data => {
    res.send(data)
  })
}

module.exports = swaggerController
