module.exports = class ResponseBody {
  constructor () {
    this.duration = 0
    this.error = false
    this.errorMessage = ''
    this.responseBody = {}
    this.responseHeader = {}
    this.requestConfig = {}
    this.statusCode = ''
  }
  setErrorMessage (msgObj) {
    this.errorMessage = msgObj
  } 
}