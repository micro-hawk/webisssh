import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'
import UiElement from './components/elements/index'

import Toast from "vue-toastification"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

const options = {
  timeout: 2000,
  transition: "Vue-Toastification__fade",
  maxToasts: 8,
  newestOnTop: true
}

Vue.use(Toast, options)

Vue.use(UiElement)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
