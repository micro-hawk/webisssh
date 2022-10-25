export default {
  install (Vue) {
    Vue.component('p-btn', () => import('./btn.vue'))
    Vue.component('p-json', () => import('./json.vue'))
  }
}