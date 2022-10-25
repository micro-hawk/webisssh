const httpRequest = require('./httpRequest')
const Server = require('../modal/server')
const swaggerService = {}

swaggerService.proxyCall = (config, cb) => {

  let fullUrl = config.proto + (config.baseUrl + config.url).replace(/\/+/gm, '/')
  const matchList = fullUrl.match(/{.*?}/gi) || []

  matchList.forEach(key => {
    const value = config.params[key.slice(1, -1).trim()]
    fullUrl = fullUrl.replace(key, value)
  })

  let pathVariable = ''
  const querys = config.query || {}
  Object.keys(querys).forEach((value, index, arr) => {
    if (index === 0) {
      pathVariable += '?' 
    }
    pathVariable += `${value}=${querys[value]}`
    if (index !== arr.length - 1) {
      pathVariable += '&'
    }
  })

  fullUrl += pathVariable
  
  const requestBody = {}
  requestBody.url = fullUrl
  requestBody.method = config.method || 'GET'
  requestBody.headers = config.headers || {}
  if (typeof config.body === 'object' && requestBody.method !== 'GET') {
    requestBody.headers['Content-type'] = 'application/json'
  }
  if (requestBody.method !== 'GET') {
    requestBody.data = config.body
  }
  httpRequest(requestBody, cb)
}

swaggerService.addServer = (server, cb) => {
  const newServer = new Server(server)
  newServer.save(cb)
}

swaggerService.getAllServers = (cb) => {
  const newServer = new Server()
  newServer.getAll(cb)
}

swaggerService.deleteServer = (id, cb) => {
  const newServer = new Server()
  newServer.deleteById(id, cb)
}

module.exports = swaggerService