
import Vue from 'vue'
import Vuex from 'vuex'
import systeam from './module/systeam'
import routeMessage from './module/route'
Vue.use(Vuex)
const store = new Vuex.Store({
  // 模块化分发
  modules: {
    systeam,
    routeMessage
  }
})
export default store
