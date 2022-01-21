import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false


// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
