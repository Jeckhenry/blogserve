import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Iview from "iview"
import iEditor from "iview-editor"
import "iview/dist/styles/iview.css"
import "iview-editor/dist/iview-editor.css"
import axios from "./http.js"

// 
Vue.use(Iview)
Vue.use(iEditor)
Vue.config.productionTip = false
Vue.prototype.remote = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
