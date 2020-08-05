// 设置全局VUEX
const state = {
  routeFrom: '',
  routeTo: ''
}
const getters = {
  get_routeFrom (state) {
    return state.routeFrom
  },
  get_routeTo (state) {
    return state.routeTo
  }
}
const mutations = {
  set_routeFrom (state, item) {
    state.routeFrom = item
  },
  set_routeTo (state, item) {
    state.routeTo = item
  }
}
const actions = {
}
export default {
  state,
  getters,
  mutations,
  actions
}
