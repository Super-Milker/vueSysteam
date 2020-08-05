import router from '@/router'
import store from '@/store/store.js'
// 全局路由监听
export default router.beforeEach((to, from, next) => {
  // 保证出现弹窗时不会出现后退行为
  let allowBack = true
  if (to.meta.allowBack !== undefined) {
    allowBack = to.meta.allowBack
  }
  if (!allowBack) {
    history.pushState(null, null, location.href)
    window.onpopstate = () => {
      if (!allowBack) {
        history.go(1)
      }
    }
  }
  // 如果下个路由时弹窗时控制弹窗的打开
  if (to.meta.openStyle === 'drawer') {
    window.sessionStorage.setItem(
      'drawerMark',
      JSON.stringify({ open: true })
    )
  }
  store.commit('set_routeFrom', from)
  store.commit('set_routeTo', to)

  next()
})
