<template>
  <el-drawer
    :title="title"
    :visible.sync="drawerVisible"
    :before-close="handleClose"
    class="searchDrawer"
  >
    <router-view class="drawerRoute" ref="drawerData"></router-view>
    <div class="demo-drawer__footer">
      <common-button type="" :buttonname="'取消'" @click.native="toBack()"></common-button>
      <common-button :buttonname="'确定'" @click.native="submint()"></common-button>
    </div>
  </el-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'commonDrawer',
  props: {
    dialogControl: {}
    // title: {
    //   default: '提示'
    // }
  },
  data () {
    return {
      drawerVisible: false,
      title: '',
      windowOpenContral: window.sessionStorage.getItem('PopupsData')
    }
  },
  computed: {
    ...mapState({
      routeFrom: state => state.routeMessage.routeFrom,
      routeTo: state => state.routeMessage.routeTo
    }),
    getRouteTo () {
      return this.routeTo
    }
  },
  watch: {
    dialogControl: {
      handler (value) {
        if (value === true) {
          this.drawerVisible = value
        }
      },
      deep: true
    },
    routeTo: {
      handler (value) {
        if (value.meta.openStyle === 'drawer') {
          this.drawerVisible = true
        }
      },
      deep: true
    },
    getRouteTo (newData) {
      this.title = newData.meta.name
      setTimeout(() => {
        $('.drawerRoute').css({
          height: document.body.clientHeight - 90 + 'px'
        })
      }, 100)
    }
  },
  mounted () {
    if (
      window.sessionStorage.getItem('drawerMark') &&
      JSON.parse(window.sessionStorage.getItem('drawerMark')).open === true
    ) {
      this.drawerVisible = true
      setTimeout(() => {
        $('.drawerRoute').css({
          height: document.body.clientHeight - 90 + 'px'
        })
      }, 100)
      this.title = this.routeTo.meta.name
    }
  },
  methods: {
    handleClose (closeManner) {
      this.$emit(
        'change',
        closeManner === true
          ? {
            type: JSON.parse(window.sessionStorage.getItem('editData')).type
          }
          : ''
      )
      this.drawerVisible = false
      window.sessionStorage.removeItem('drawerMark')
      this.$router.push({
        name: this.$route.matched[this.$route.matched.length - 2].name
      })
    },
    submint () {
      this.$refs.drawerData.$refs['form'].validate(valid => {
        if (valid) {
          this.$request
            .Axios({
              url: this.$refs.drawerData.editUrl.url,
              data: this.$refs.drawerData.form
            })
            .then(response => {
              if (response.data.state === 1) {
                this.handleClose(true)
              } else {
              }
            })
        } else {
        }
      })
    },
    toBack () {
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.demo-drawer__footer {
  position: absolute;
  bottom: 5px;
  margin-left: 10px;
}
.searchDrawer >>> .el-drawer__body {
  height: inherit;
}
</style>
