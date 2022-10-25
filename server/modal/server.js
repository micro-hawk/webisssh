const FileDB = require('../plugin/fileDB')

const document_name = 'server_config'
const server_document = new FileDB(document_name)

module.exports = class Server {
  constructor (server =  {}) {
    this.name = server.name || null
    this.proto = server.proto || null
    this.endpoint = server.endpoint || null
    this.docPath = server.docPath || null
    this.id = server.id || null
  }
  save (cb) {
    server_document.set(this, cb)
  }

  getAll (cb) {
    server_document.getAll(cb)
  }

  getById (id, cb) {
    server_document.getById(id, cb)
  }

  deleteById (id, cb) {
    server_document.deleteById(id, cb)
  }
}