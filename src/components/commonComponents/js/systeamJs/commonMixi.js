// 各个查询页面一些通用的方法与变量 按钮状态等等
import { mapState } from 'vuex'
export default {
  data () {
    return {
      commonLoading: true, // 通用loading
      dialogVisibleFlag: false, // 弹窗识别标记
      routeParams: {}, // 路由信息
      operatingTitle: '', // 弹窗标题
      queryData: {}, // 通用查询变量
      editUrl: {
        url: '',
        type: ''
      }, // 通用编辑新增页面传输变量
      tableHeight: ''// 通用表格高度变量
    }
  },
  computed: {
    ...mapState({
      windowWeight: state => state.systeam.windowWeight
    })
  },
  methods: {
    // 处理整体页面获取新增修改的参数
    handlerEditPageUrl (vm) {
      if (vm.routeParams.type === 'edit') {
        vm.editUrl.url = vm.routeParams.url
        vm.editUrl.type = vm.routeParams.urlType
      }
      if (vm.routeParams.type === 'add') {
        vm.editUrl.url = vm.routeParams.url
        vm.editUrl.type = vm.routeParams.urlType
      }
    },
    // 处理整体页面子组件回调
    handlerPageCallBack (vm, data) {
      vm.dialogVisibleFlag = false
      if (data.type === 'edit' || data.type === 'add') {
        vm.$refs.table.urlRequest()
      }
    },
    // 处理整体页面进入新增修改时的传参
    handlerPageTo ({ vm, dialogFlag, data, routeTo }) {
      // vm.dialogVisibleFlag = dialogFlag
      vm.$refs.commonDialog.dialogVisible = dialogFlag
      window.sessionStorage.setItem(
        'editData',
        JSON.stringify(data)
      )
      this.$router.push({ name: routeTo })
    },
    // 处理列表返回Loading问题
    tableChange (data) {
      this.commonLoading = data.loading
    },
    // 处理通用的页面进入Edit页面进行的数据请求
    initEditHandler ({ vm, url, data, specialHandler }) {
      return new Promise((resolve, reject) => {
        this.$request
          .Axios({
            url: url.url,
            method: url.type,
            data: data,
            tip: false
          })
          .then(response => {
            console.log(response)
            if (specialHandler) {
              resolve(response)
            } else {
              vm.form = $.extend(true, vm.form, response.data)
            }
          }).catch(error => { reject(error) })
      })
    },
    // 处理普通下拉菜单等简单处理的借口数据处理
    delWithGeneralRequest ({ urlData, data = {} }) {
      return new Promise((resolve, reject) => {
        this.$request
          .Axios({
            url: urlData.url,
            data: data,
            method: urlData.type,
            tip: false
          })
          .then(response => {
            resolve(response)
          }).catch(error => { reject(error) })
      })
    },
    // 解决使用eval时eslint报错问题
    evil (fn) {
      let Fn = Function
      return new Fn('return ' + fn)()
    }
  },
  mounted () {
  }
}
