const axios = require('axios').default
const ResponseDao = require('../dao/resposce')

const httpRequest = (config, cb) => {
  console.log('PROXY REQUEST', config)
  const responseDao = new ResponseDao()
  const startTime = new Date().valueOf()
  axios(config).then(res => {
    console.log('PROXY RESPONSE::SUCCESS', res.data)
    const endTime = new Date().valueOf()
    responseDao.duration = endTime - startTime
    responseDao.responseBody = res.data
    responseDao.responseHeader = res.headers
    responseDao.statusCode = res.statusCode
    responseDao.requestConfig = config
    cb(responseDao)
  }).catch(err => {
    console.log('PROXY RESPONSE::ERROR', err)
    const endTime = new Date().valueOf()
    responseDao.duration = endTime - startTime
    responseDao.error = true
    responseDao.setErrorMessage({message: err.message, errorObj: err.response && err.response.data})
    responseDao.requestConfig = config
    cb(responseDao)
  })
}

module.exports = httpRequest