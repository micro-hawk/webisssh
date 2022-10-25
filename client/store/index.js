import Vue from 'vue'
import Vuex from 'vuex'
import swagger from './swagger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoader: false
  },
  mutations: {
    OPEN_LOADER (state, value) {
      state.showLoader = value
    }
  },
  actions: {
  },
  modules: {
    swagger
  }
})
