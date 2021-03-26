import Vue from 'vue'
import App from './App.vue'

import router from './router'

// Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.path = '/two') {
//     next('/two')
//   } else {
//     next()
//   }
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
