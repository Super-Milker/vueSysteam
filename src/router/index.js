import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import dashBaord from '@/components/commonComponents/pages/dashBaord/Index'
import notFoundpage from '@/components/commonComponents/pages/404Page/Index.vue'
// import Test from '@/components/commonComponents/pages/test/HelloWorld'

Vue.use(Router)

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      // redirect: '/HelloWorld',
      component: Login
    },
    // {
    //   path: '/registered',
    //   name: 'registered',
    //   component: resolve => require(['@/components/registered'], resolve)
    // },
    // {
    //   path: '/slide',
    //   name: 'slide',
    //   component: resolve => require(['@/components/commonComponents/module/slider/slider'], resolve)
    // },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      meta: {
        name: '首页',
        breadNum: 0
      },
      component: HelloWorld,
      redirect: '/HelloWorld/dashBaord',
      children: [
        // 首页
        {
          path: 'dashBaord',
          name: 'dashBaord',
          component: resolve => require(['@/components/commonComponents/pages/dashBaord/Index'], resolve)
        },
        // 个人中心
        {
          path: 'personCenter',
          name: 'personCenter',
          meta: {
            name: '个人中心',
            breadNum: 1
          },
          component: resolve => require(['@/components/commonComponents/pages/systeamPages/personCenter/personCenter'], resolve)
        },
        // 信息中心
        {
          path: 'netWork',
          name: 'netWork',
          meta: {
            name: '网络中心',
            breadNum: 1
          },
          component: resolve => require(['@/components/commonComponents/pages/systeamPages/informationCenter/netWork/netWork.vue'], resolve)
        },
        // {
        //   path: 'opinionAdd',
        //   name: 'opinionAdd',
        //   meta: {
        //     name: '添加意见',
        //     breadNum: 2
        //   },
        //   component: resolve => require(['@/components/commonComponents/pages/systeamPages/opinion/opinionEdit'], resolve)
        // },
        // {
        //   path: 'opinionEdit',
        //   name: 'opinionEdit',
        //   meta: {
        //     name: '意见修改',
        //     breadNum: 2
        //   },
        //   component: resolve => require(['@/components/commonComponents/pages/systeamPages/opinion/opinionEdit'], resolve)
        // },
        // 用户中心
        {
          path: 'userConfig',
          name: 'userConfig',
          meta: {
            name: '用户管理',
            breadNum: 1
          },
          component: resolve => require(['@/components/commonComponents/pages/systeamPages/systeamConfig/userConfig/userConfig'], resolve),
          children: [
            {
              path: 'userConfigAdd',
              name: 'userConfigAdd',
              meta: {
                name: '添加用户',
                breadNum: 2
              },
              component: resolve => require(['@/components/commonComponents/pages/systeamPages/systeamConfig/userConfig/userConfigEdit'], resolve)
            }
          ]
        },
        {
          path: 'userConfigEdit',
          name: 'userConfigEdit',
          meta: {
            name: '用户修改',
            breadNum: 2
          },
          component: resolve => require(['@/components/commonComponents/pages/systeamPages/systeamConfig/userConfig/userConfigEdit'], resolve)
        }
      ]
    },
    { path: '*', component: notFoundpage }
  ]
})
