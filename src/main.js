// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import reaxios from './assets/js/request'
import store from './store/store'
import enumData from './components/commonComponents/js/systeamJs/enum.js'
import commonMixi from './components/commonComponents/js/systeamJs/commonMixi'
import common from './assets/js/common'
import routeWatcher from './components/commonComponents/js/systeamJs/routeWatcher'
import './assets/css/common.css'
import tkDiv from './components/commonComponents/systeamPackage/continerPane'
import basicPage from './components/commonComponents/systeamPackage/basicPageLayout'
import {commonButton, commonTable, commonDialog, commonDrawer} from './components/commonComponents/module/interface'
import echarts from 'echarts'
import apiconfig from './assets/js/apiConfig'
import img from './assets/img/callUsLeft.png'
require('./mock')
// import initConfig from './static/js/config.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$request = reaxios
Vue.prototype.$common = common
Vue.prototype.$enumData = enumData
Vue.prototype.$echarts = echarts
Vue.prototype.$apiconfig = apiconfig

Vue.use(ElementUI)
Vue.mixin(commonMixi)
Vue.use(VueResource)
Vue.use(commonButton)
Vue.use(commonTable)
Vue.use(commonDialog)
Vue.use(commonDrawer)

Vue.component('common-drawer', commonDrawer)
Vue.component('common-dialog', commonDialog)
Vue.component('common-button', commonButton)
Vue.component('common-table', commonTable)
Vue.component('TkDiv', tkDiv)
Vue.component('basicPage', basicPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
