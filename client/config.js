const path = {
  swagger: {
    basePath: '/swagger',
    save_server: '/addserver',
    get_server_list: '/servers'
  }
}

export default {
  getSwaggerPath: (key) => window.location.origin + path.swagger.basePath + path.swagger[key]
}