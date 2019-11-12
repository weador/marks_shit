/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import api from './api/api.js'

// Components
import './components'

// Plugins
import './plugins'
// import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import router from '@/router'
import store from '@/store'

// Sync store with router
// sync(store, router)

Vue.config.productionTip = false
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
