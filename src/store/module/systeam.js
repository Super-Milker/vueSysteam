// 设置全局VUEX
const state = {
  systeamStyle: '',
  windowWeight: '',
  elmainWeight: '',
  elmainHeight: '',
  token: '',
  menu: {},
  routePop: false
}
const getters = {
  get_systeamStyle (state) {
    return state.systeamStyle
  },
  get_windowWeight (state) {
    return state.windowWeight
  },
  get_elmainWeight (state) {
    return state.elmainWeight
  },
  get_elmainHeight (state) {
    return state.elmainHeight
  },
  get_token (state) {
    return state.token
  },
  get_menu (state) {
    return state.menu
  },
  get_routePop (state) {
    return state.routePop
  }
}
const mutations = {
  set_systeamStyle (state, item) {
    if (item === null) { } else {
      state.systeamStyle = item
    }
  },
  set_windowWeight (state, item) {
    state.windowWeight = item
  },
  set_elmainWeight (state, item) {
    state.elmainWeight = item
  },
  set_elmainHeight (state, item) {
    state.elmainHeight = item
  },
  set_token (state, item) {
    state.token = item
  },
  set_menu (state, item) {
    state.menu = item
  },
  set_routePop (state, item) {
    state.routePop = item
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
