import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'wowjs/css/libs/animate.css'

Vue.config.productionTip = false

import vWow from './plugins/wow'

import VueWow from 'vue-wow'

// mount with global
Vue.use(VueWow)
Vue.use(vWow)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
