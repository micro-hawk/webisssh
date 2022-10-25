import axios from 'axios'
import config from '../../common/routerPath.json'
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    serverList: [],
    serverLoaded: false,
    apiDocs: null,
    selectedServer: null,
    proxyPath: config.swagger.basePath + config.swagger.proxy
  },
  mutations: {
    setServerList (state, serverList) {
      state.serverList = serverList
      state.serverLoaded = true
    },
    SET_API_DOC (state, docs) {
      state.apiDocs = docs
    },
    SET_SELECTED_SERVER (state, server) {
      state.selectedServer = server
    }
  },
  actions: {

    getServerList ({commit}) {
      const requestConfig = {
        url: config.swagger.basePath + config.swagger.getAllServers,
        method: 'GET'
      }
      axios(requestConfig).then(e => commit('setServerList', e.data))
    },

    saveServer ({dispatch}, { data, cb }) {
      const requestConfig = {
        url: config.swagger.basePath + config.swagger.addServer,
        method: 'POST',
        data: data
      }
      axios(requestConfig).then(() => {
        Vue.$toast.success("Server created successfully")
        dispatch('getServerList')
        cb()
      }).catch(() => {
        Vue.$toast.error("Failed to save server")
      })
    },

    deleteServer ({dispatch}, {id, cb}) {
      const requestConfig = {
        url: config.swagger.basePath + config.swagger.deleteServer,
        method: 'DELETE',
        data: {id}
      }
      axios(requestConfig).then(() => {
        Vue.$toast.success("Server remove successfully")
        dispatch('getServerList')
        cb && cb()
      }).catch(() => {
        Vue.$toast.error("Fail to delete server")
      })

    },

    getServerApiDoc (_, {server, cb, fail}) {
      const requestConfig = {
        url: config.swagger.basePath + config.swagger.proxy,
        method: 'POST',
        data: {
          proto: server.proto,
          baseUrl: server.endpoint,
          url: server.docPath,
          method: 'GET',
          query: {},
          params: {},
          headers: {}
        }
      }
      axios(requestConfig).then(cb).catch(fail)
    }
  }
}