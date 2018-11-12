import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Iview from "iview"
import iEditor from "iview-editor"
import "iview/dist/styles/iview.css"
import "iview-editor/dist/iview-editor.css"
import axios from "./http.js"
import loading from "./components/loading.vue"
// 
Vue.use(Iview)
Vue.use(iEditor)
Vue.component('loading',loading)
Vue.config.productionTip = false
Vue.prototype.remote = axios
Vue.prototype.locastorage = function(data){
  window.localStorage.setItem("userinfo",JSON.stringify(data))
}
Vue.prototype.removelocastorage = function(){
  window.localStorage.removeItem("userinfo")
}
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  console.log(to.name)
  // if(to.name != "login" && !localStorage.getItem("userinfo")){
  //   next("/")
  // }else{
    next()
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
